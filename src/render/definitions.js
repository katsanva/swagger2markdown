'use strict';

import {
  pipe,
  reduce,
  filter,
  curry,
} from 'ramda';

import renderObjectProps from "./object-props";
import resolveRefs from "./resolve-refs";
import {italics, table, th} from "./md";
import renderArrayType from "./array-with-type";

export const renderDefinitionWithTable = curry((definition, name) => {
  const properties = table(
    th(`Name`, `Type`, `Description`),
    renderObjectProps(definition.properties)
  );

  return [
    `<h3 id='/definitions/${name}'>${name}</h3>`,
    `${definition.description || name}`,
    properties
  ];
});

export const getType = (definition) => {
  if (definition.type === 'array') {
    return definition.items ? renderArrayType(definition.items.type) : `[ ]`;
  }

  return italics(definition.type);
};

export const renderDefinitionSimple = curry((definition, name) => {
  const type = getType(definition);

  return [
    `<h3 id='/definitions/${name}'>${name}</h3>`,
    `${definition.description || name}`,
    `Type: ${type}`
  ]
});

export const _getRenderer = curry((tableRenderer, simpleRenderer, definition) => {
  if (definition.type === 'object') {
    return tableRenderer(definition);
  }

  return simpleRenderer(definition);
});

const getRenderer = _getRenderer(renderDefinitionWithTable, renderDefinitionSimple);

export const renderAnyDefinition = curry((definitions, name) => {
  const definition = resolveRefs(definitions, definitions[name]);
  const renderer = getRenderer(definition);

  return renderer(name);
});

export const isTruthy = value => !!value;
export const addValue = curry((render, acc, name) => acc.concat(render(name)));

export const renderDefinitions = ({definitions}) => {
  return pipe(
    Object.keys,
    reduce(addValue(renderAnyDefinition(definitions)), []),
    filter(isTruthy),
  )(definitions);
};

export default renderDefinitions;