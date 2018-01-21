'use strict';

import {
  lensPath,
  view,
  map,
  curry,
  reduce,
} from 'ramda';
import objectAssignDeep from 'object-assign-deep';

export const getSchema = (definitions, $ref) => {
  const path = $ref
    .split('/')
    .slice(2);

  const lens = lensPath(path);

  return view(lens, definitions) || {};
};

export const resolvePropertiesRefs = (definitions, schema) => {
  if (schema.properties && !schema.$properties) {
    schema.$properties = schema.properties;
    schema.properties = map(resolveRefs(definitions), schema.properties)
  }
};

export const resolveItemsRefs = (definitions, schema) => {
  if (schema.items && !schema.$items) {
    schema.$items = schema.items;
    schema.items = resolveRefs(definitions, schema.items)
  }
};

export const resolveRefs = curry((definitions, schema) => {
  if (schema.$ref) {
    const refSchema = getSchema(definitions, schema.$ref);

    return resolveRefs(definitions, refSchema)
  }

  if (schema.allOf) {
    return reduce((acc, val) => {
      return objectAssignDeep(acc, resolveRefs(definitions, val))
    }, {}, schema.allOf)
  }

  resolvePropertiesRefs(definitions, schema);
  resolveItemsRefs(definitions, schema);

  return schema;
});

export default resolveRefs;