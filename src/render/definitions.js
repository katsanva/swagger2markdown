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

export const renderDefinitionWithTable = (definitions, name, definitionWithResolvedRefs) => {
  const definitionsTable = table(
    th(`Name`, `Type`, `Description`),
    renderObjectProps(definitionWithResolvedRefs.properties)
  );

  return [
    `<h3 id='/definitions/${name}'>${name}</h3>`,
    `${definitions[name].description || name}`,
    definitionsTable
  ];
};

export const getType = (definition) => {
  if (definition.type === 'array') {
    return definition.items ? renderArrayType(definition.items.type) : `[ ]`;
  }

  return italics(definition.type);
};

export const renderDefinitionSimple = (definitions, name) => {
  const type = getType(definitions[name]);

  return [
    `<h3 id='/definitions/${name}'>${name}</h3>`,
    `${definitions[name].description || name}`,
    `Type: ${type}`
  ]
};

export const renderAnyDefinition = curry((definitions, name) => {
  const definitionWithResolvedRefs = resolveRefs(definitions, definitions[name]);

  if (definitionWithResolvedRefs.type === 'object') {
    return renderDefinitionWithTable(definitions, name, definitionWithResolvedRefs);
  }

  return renderDefinitionSimple(definitions, name);
});

export const renderDefinitions = ({definitions}) => {
  return pipe(
    Object.keys,
    reduce((acc, name) => acc.concat(renderAnyDefinition(definitions, name)), []),
    filter(definition => !!definition),
  )(definitions);
};

export default renderDefinitions;