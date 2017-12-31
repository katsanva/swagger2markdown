'use strict';

import {
  find,
  propEq,
  map,
  reduce,
  curry,
} from 'ramda';
import objectAssignDeep from 'object-assign-deep';

import {code, heading, table, th} from "./md";
import resolveRefs from "./resolve-refs";
import renderParameter from "./parameter";
import getRefName from "./get-ref-name";

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

        return objectAssignDeep(acc, {
          [value]: resolvedBody.properties[value].example || ''
        })
      }, {}, Object.keys(resolvedBody.properties));

      return {
        'application/json': res
      }
    }
  }

  return {};
};

export const getRequestExample = (parameters, definitions) => {
  const body = find(propEq('in', 'body'), parameters);

  if (!body) {
    return [];
  }

  const examples = getExamples(body, definitions);

  if (!examples) {
    return [];
  }

  return map(type => {
    const data = examples[type];

    return code(data, type);
  }, Object.keys(examples))
};

export const renderAnyParameter = curry((parameters, parameter) => {
  if (parameter.$ref) {
    const name = getRefName(parameter.$ref);

    return renderParameter(parameters[name]);
  }

  return renderParameter(parameter);
});

export const getParametersTable = (parameters, path) => {
  const {
    parameters: ownParameters = []
  } = path;

  return table(
    th(`Position`, `Name`, `Type`, `Description`),
    map(renderAnyParameter(parameters), ownParameters),
  )
};

export const renderParameters = (path, parameters, definitions) => {
  if (!path.parameters || !path.parameters.length) {
    return [];
  }

  const parametersBlock = [
    heading(5, 'Parameters'),
    getParametersTable(parameters, path)
  ];

  const requestExample = getRequestExample(path.parameters, definitions);

  if (!requestExample) {
    return parametersBlock;
  }

  return parametersBlock
    .concat(
      heading(5, 'Example'),
      requestExample,
    );
};

export default renderParameters;