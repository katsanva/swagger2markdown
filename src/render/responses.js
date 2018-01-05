'use strict';

import {
  map,
  reduce,
} from 'ramda';

import {bold, code, escape, heading, italics, pre, table, th} from "./md";
import resolveRefs from "./resolve-refs";
import renderMixins from "./mixins";
import getRefLink from "./get-ref-link";
import renderObjectProps from './object-props';

export const renderResponseSchema = (definitions, schema = {}) => {
  resolveRefs(definitions, schema);

  if (schema.$ref) {
    return [`${italics(`Schema`)}: ${getRefLink(schema.$ref)}`];
  }

  if (schema.allOf) {
    return [
      `${italics(`Schema`)}:`,
      table(
        th(`Name`, `Type`, `Description`),
        map(renderMixins(), schema.allOf)
      )
    ];
  }

  if (schema.type === 'array') {
    if (schema.$items.$ref) {
      return [
        `${italics('Schema')}: [ ${getRefLink(schema.$items.$ref)} ]`
      ];
    }

    const header = `${italics('Schema')}: array ${escape(schema.description)}`;

    if (schema.items.type !== 'object') {
      return [header];
    }

    return [
      header,
      `Items:`,
      table(
        th(`Name`, `Type`, `Description`),
        renderObjectProps(schema.items.properties)
      )
    ];
  }

  if (schema.type === 'object') {
    return [
      `${italics('Schema')}:`,
      table(
        th(`Name`, `Type`, `Description`),
        renderObjectProps(schema.properties, schema.$properties)
      )
    ];
  }

  return [];
};

export const renderResponseExamples = (examples = {}) => reduce((acc, type) => [
  ...acc,
  bold(type),
  code(examples[type], type),
], [], Object.keys(examples));


export const renderResponses = (definitions, path) => {
  return reduce((acc, responseCode) => {
    const value = path.responses[responseCode];

    const keys = Object.keys(value.examples || {});

    if (!keys.length) {
      return [
        ...acc,
        `${italics(`Code`)} ${pre(responseCode)}: ${value.description}`,
        ...renderResponseSchema(definitions, value.schema),
      ]
    }

    return [
      ...acc,
      `${italics(`Code`)} ${pre(responseCode)}: ${value.description}`,
      ...renderResponseSchema(definitions, value.schema),
      heading(`Examples`, 5),
      ...renderResponseExamples(value.examples)
    ];
  }, [], Object.keys(path.responses));
};

export default renderResponses;