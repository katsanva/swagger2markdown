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

export const fillExampleByBodyField = curry((body, acc, property) => {
  const example = body.properties[property].example;

  if (!example) {
    return acc;
  }

  return objectAssignDeep(acc, {
    [property]: example
  })
});

export const getExamples = (body, definitions) => {
  if (!body.schema) {
    return {};
  }

  const resolvedBody = resolveRefs(definitions, body.schema);

  if (resolvedBody.example) {
    return {
      'application/json': resolvedBody.example
    }
  }

  if (resolvedBody.properties) {
    const res = reduce(fillExampleByBodyField(resolvedBody), {}, Object.keys(resolvedBody.properties));

    return {
      'application/json': res
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

  if (!examples['application/json']) {
    return [];
  }

  return map(type => {
    const data = examples[type];

    return code(data, type);
  }, Object.keys(examples))
};

export const renderAnyParameter = curry((renderParameter, parameters, parameter) => {
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

  if (!ownParameters.length) {
    return '';
  }

  return table(
    th(`Position`, `Name`, `Type`, `Description`),
    map(renderAnyParameter(renderParameter, parameters), ownParameters),
  )
};

export const renderParameters = (path, parameters, definitions) => {
  if (!path.parameters || !path.parameters.length) {
    return [];
  }

  const parametersBlock = [
    heading('Parameters', 5),
    getParametersTable(parameters, path)
  ];

  const requestExample = getRequestExample(path.parameters, definitions);

  if (!requestExample.length) {
    return parametersBlock;
  }

  return parametersBlock
    .concat(
      heading('Example', 5),
      requestExample,
    );
};

export default renderParameters;