'use strict';

import {
  contains,
  curry,
  filter,
  lensPath,
  map,
  mapObjIndexed,
  pipe,
  reduce,
  view
} from 'ramda';
import objectAssignDeep from 'object-assign-deep';

export const getRefName = ref => ref.split('/').pop();

export const getRefLink = ref => {
  const name = getRefName(ref);

  return `[_${name}_](${ref})`;
};

export const getNonFormatted = (data, type = 'application/json') => `\`\`\`${type}\n${JSON.stringify(data, null, 2)}\n\`\`\``;

export const renderSchema = schema => {
  if (schema.$ref) {
    return getRefLink(schema.$ref)
  }

  return getNonFormatted(schema);
};

export const getRowByParameterSchema = parameter => `${parameter.in}|\`${parameter.name}\`|${renderSchema(parameter.schema)}|\n`;

export const getRowByParameterType = parameter => `${parameter.in}|\`${parameter.name}\`|_${parameter.type}_|${parameter.description}\n`;

export const renderParam = parameter => {
  if (parameter.schema) {
    return getRowByParameterSchema(parameter);
  }

  return getRowByParameterType(parameter);
};

export const getSchema = (definitions, ref) => {
  const path = ref
    .split('/')
    .slice(2);

  const lens = lensPath(path);

  return view(lens, definitions);
};

export const resolveRefs = (definitions, schema) => {
  if (schema.$ref) {
    const refSchema = getSchema(definitions, schema.$ref);

    return resolveRefs(definitions, refSchema)
  }

  if (schema.allOf) {
    return reduce((acc, val) => {
      return objectAssignDeep(acc, resolveRefs(definitions, val))
    }, {}, schema.allOf)
  }

  if (schema.properties) {
    schema.$properties = schema.properties;
    schema.properties = map(prop => resolveRefs(definitions, prop), schema.properties)
  }

  if (schema.items) {
    schema.$items = schema.items;
    schema.items = resolveRefs(definitions, schema.items)
  }

  return schema;
};

export const getExamples = (body, definitions) => {
  if (body.schema) {
    const resolvedBody = resolveRefs(definitions, body.schema);

    if (resolvedBody.example) {
      return {
        'application/json': resolvedBody.example
      }
    }

    if (resolvedBody.properties) {
      const res = reduce((acc, value) => {
        if (!resolvedBody.properties[value].example) {
          return acc;
        }

        return objectAssignDeep(acc, {[value]: resolvedBody.properties[value].example || ''})
      }, {}, Object.keys(resolvedBody.properties));

      return {
        'application/json': res
      }
    }
  }

  return {};
};

export const getRequestExample = (parameters, definitions) => {
  const body = parameters.find(({'in': position}) => position === 'body');

  if (!body) {
    return '';
  }

  const examples = getExamples(body, definitions);

  if (!examples) {
    return '';
  }

  return map(type => {
    const data = examples[type];

    return getNonFormatted(data, type);
  }, Object.keys(examples)).join('')
};

export const renderParams = (path, parameters, definitions) => {
  if (!path.parameters || !path.parameters.length) {
    return '';
  }

  const header = `Position | Name | Type | Description\n--- | --- | --- | ---`;

  const params = map(parameter => {
    if (parameter.$ref) {
      const name = getRefName(parameter.$ref);

      return renderParam(parameters[name]);
    }

    return renderParam(parameter);

  }, path.parameters || [])
    .join('');

  const requestExample = getRequestExample(path.parameters, definitions);

  const exampleBlock = requestExample ? `##### Example\n\n${requestExample}` : '';

  return `##### Parameters\n\n${header}\n${params}\n\n${exampleBlock}`;
};

export const getObjectRefRow = (p, ref) => `\`${p}\`|${getRefLink(ref)}|\n`;

export const renderObjectProps = (properties, $properties = {}) => map(p => {
  if (properties[p].type === 'array' && properties[p].$items && properties[p].$items.$ref) {
    return getObjectRefRow(p, properties[p].$items.$ref);
  }

  if ($properties[p] && $properties[p].$ref) {
    return `\`${p}\`|[${$properties[p].$ref}](${$properties[p].$ref})|${properties[p].description || ''}\n`
  }

  return `\`${p}\`|_${properties[p].type}_|${properties[p].description || ''}\n`
}, Object.keys(properties)).join('');

export const renderResponseSchema = (definitions, schema) => {
  resolveRefs(definitions, schema);

  if (schema.$ref) {
    return `_Schema_: ${getRefLink(schema.$ref)}\n`;
  }

  if (schema.allOf) {
    const header = `_Schema_: \n\nName | Type | Description\n--- | --- | ---\n`;

    return `${header}${map((value) => {
      if (value.$ref) {
        return `extends|${getRefLink(value.$ref)}|Base response schema\n`
      }

      if (value.properties && value.properties.data) {
        return map(propName => {
          const t = value.properties[propName];

          if (t.type === 'object' && t.properties) {
            return `**${propName}**||\n${renderObjectProps(t.properties)}`;
          }

          if (t.type === 'array') {
            if (t.$items.$ref) {
              return `**${propName}**|[ ${getRefLink(t.$items.$ref)} ]|`;
            }

            if (t.items.type === 'object') {
              return `**${propName}**: [] | [ ${renderObjectProps(t.items.properties)} ]|${t.description || ''}`
            }

            if (t.items.type === 'array') {
              return `**${propName}**| [ ${t.items.items.type} ] | ${t.items.description} `;
            }

            return `**${propName}**| [ ${t.items.type} ] | ${t.description}`;
          }

          return `**${propName}**| ${t.type} | ${t.description}`;

        }, Object.keys(value.properties))
          .join('')
      }
    }, schema.allOf).join('')}`
  }

  if (schema.type === 'array') {
    if (schema.$items.$ref) {
      return `_Schema_: [ ${getRefLink(schema.$items.$ref)} ]`
    }

    const header = `_Schema_: array ${schema.description || ''}\n\nItems:\n\nName | Type | Description\n--- | --- | ---\n`;

    let params = '';

    if (schema.items.type === 'object') {
      params = `${renderObjectProps(schema.items.properties)}`
    }

    return `${header}${params}`

  }

  if (schema.type === 'object') {
    const header = `_Schema_:\n\nName | Type | Description\n--- | --- | ---\n`;

    return `${header}${renderObjectProps(schema.properties, schema.$properties)}`
  }

  return ``;
};

export const renderResponses = (definitions, path) => {
  const responses = map((code) => {
    const value = path.responses[code];

    return `_Code_: \`${code}\`\n
${renderResponseSchema(definitions, value.schema)}\n
##### Examples\n
${map((type) => getNonFormatted(value.examples[type], type), Object.keys(value.examples)).join('')}`;
  }, Object.keys(path.responses))
    .join('');

  return `${responses}\n`
};

export const tagIsMatched = curry((tag, path, method) => contains(tag, path[method].tags));

export const renderEndpoint = curry((resource, uri, parameters, definitions, method) => {
  const endpoint = resource[method];

  return `### ${endpoint.summary}\n
    ${method.toUpperCase()} ${uri}\n
${endpoint.description}\n
#### Request\n\n${renderParams(endpoint, parameters, definitions)}\n
#### Responses\n\n${renderResponses(definitions, endpoint)}`;
});

export function renderTagAPI(tag, definitions, doc) {
  const {
    paths,
    parameters,
    host,
    schemes: [schema],
    basePath,
  } = doc;
  return pipe(
    Object.keys,
    map(path => {
      const resource = paths[path];
      const uri = `${schema}://${host}${basePath}${path}`;

      return pipe(
        Object.keys,
        filter(tagIsMatched(tag.name, resource)),
        map(renderEndpoint(resource, uri, parameters, definitions))
      )(resource)
    }),
    filter(a => !!a.length),
    a => a.join('---\n\n')
  )(paths);
}

export const getMenuLink = name => `[${name}](#${name.toLowerCase().replace(/ /g, '-')})`;

export function renderMenu({paths, definitions}) {
  const grouped = {};

  map(route => map(method => {
    const resource = paths[route][method];
    const [mainTag] = resource.tags;

    if (!grouped[mainTag]) {
      grouped[mainTag] = []
    }

    grouped[mainTag].push(`* ${getMenuLink(resource.summary)}`)
  }, Object.keys(paths[route])), Object.keys(paths));

  const routesPart = map(key => {
      return `${getMenuLink(key)}\n\n${grouped[key].join('\n')}`
    }, Object.keys(grouped)
  ).join('\n\n');

  const definitionsPart = map(name => {
    return `* [${name}](#/definitions/${name})`
  }, Object.keys(definitions)).join('\n');

  return `${routesPart}\n
[Definitions](#definitions)
\n${definitionsPart}`;
}

export function renderAPI(swaggerDocument) {
  const {
    tags,
    definitions,
  } = swaggerDocument;

  const resolvedDefinitions = mapObjIndexed((value) => resolveRefs(definitions, value), definitions);

  return map(tag => {
    return `## ${tag.name}\n
${tag.description}\n
${renderTagAPI(tag, resolvedDefinitions, swaggerDocument)}\n`
  }, tags)
    .join('');
}

export const renderDefinitonWithTable = (definitions, name, definitionWithResolvedRefs) => {
  const header = `Name | Type | Description\n--- | --- | ---\n`;

  return `<h3 id='/definitions/${name}'>${name}</h3>\n
${definitions[name].description || name}\n
${header}${renderObjectProps(definitionWithResolvedRefs.properties)}`;
};

export const renderDefinitionSimple = (definitions, name) => `<h3 id='/definitions/${name}'>${name}</h3>\n\n${definitions[name].description || name}\n\nType: _${definitions[name].type}_`;

export const renderAnyDefinition = curry((definitions, name) => {
  const definitionWithResolvedRefs = resolveRefs(definitions, definitions[name]);

  if (definitionWithResolvedRefs.type === 'object') {
    return renderDefinitonWithTable(definitions, name, definitionWithResolvedRefs);
  }

  return renderDefinitionSimple(definitions, name);
});

export const renderDefinitions = ({definitions}) => {
  return pipe(
    Object.keys,
    map(renderAnyDefinition(definitions)),
    filter(definition => !!definition),
    mds => mds.join('\n')
  )(definitions);
};

export default function renderDocument(document) {
  return `
title: ${document.info.title}\n
description: ${document.info.description}\n
social: false\n
===
# REST API\n
${document.info.description}\n
${renderMenu(document)}\n
${renderAPI(document)}\n
## Definitions\n
${renderDefinitions(document)}`;
}
