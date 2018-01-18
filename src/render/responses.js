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
import renderArrayType from "./array-with-type";

export const renderResponseSchema = (definitions, schema) => {
  if (!schema) {
    return [];
  }

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
        `${italics('Schema')}: ${renderArrayType(getRefLink(schema.$items.$ref))}`
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
  isNaN(type) ? bold(type) : '',
  code(examples[type], type),
], [], Object.keys(examples));


export const getResponseCodeHeader = (responseCode, description) => {
  const header = `${italics(`Code`)} ${pre(responseCode)}`;

  if (!description) {
    return header;
  }

  return `${header}: ${description}`
};

export const renderResponses = (definitions, path) => {
  return reduce((acc, responseCode) => {
    const value = path.responses[responseCode];
    const header = getResponseCodeHeader(responseCode, value.description);

    const keys = Object.keys(value.examples || {});
    const result = acc.concat(
      header,
      renderResponseSchema(definitions, value.schema)
    );

    if (keys.length) {
      return result.concat(
        heading(`Examples`, 5),
        renderResponseExamples(value.examples)
      )
    }

    return result;
  }, [], Object.keys(path.responses));
};

export default renderResponses;