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

export const renderDefinitionSimple = (definitions, name) => [
  `<h3 id='/definitions/${name}'>${name}</h3>`,
  `${definitions[name].description || name}`,
  `Type: ${italics(definitions[name].type)}`
];

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