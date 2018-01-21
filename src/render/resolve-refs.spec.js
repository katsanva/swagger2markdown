import {getSchema, resolveItemsRefs, resolvePropertiesRefs} from "./resolve-refs";
import resolveRefs from "./resolve-refs";

test('getSchema: nothing found', () => {
  const definitions = {
    a: {
      type: 'string'
    }
  };
  const ref = '#/definitions/foo';
  const expected = {};

  const result = getSchema(definitions, ref);

  expect(result).toEqual(expected);
});

test('getSchema: easy path', () => {
  const definitions = {
    a: {
      type: 'string'
    }
  };
  const ref = '#/definitions/a';
  const expected = definitions.a;

  const result = getSchema(definitions, ref);

  expect(result).toBe(expected);
});

test('getSchema: deep path', () => {
  const definitions = {
    a: {
      b: {
        id: {
          type: 'string'
        }
      }
    }
  };
  const ref = '#/definitions/a/b/id';
  const expected = definitions.a.b.id;

  const result = getSchema(definitions, ref);

  expect(result).toBe(expected);
});

test('resolvePropertiesRefs', () => {
  const definitions = {};
  const schema = {};

  resolvePropertiesRefs(definitions, schema);

  expect(schema.$properties).not.toBeDefined();
});

test('resolvePropertiesRefs, properties provided, should copy properties', () => {
  const definitions = {
    foo: {a: 1}
  };
  const properties = {
    foo: {
      $ref: '#/definitions/foo'
    },
    bla: {
      type: 'object'
    }
  };
  const schema = {
    properties,
  };

  resolvePropertiesRefs(definitions, schema);

  expect(schema.$properties).toEqual(properties);
});

test('resolvePropertiesRefs, properties provided, should resolve properties', () => {
  const definitions = {
    foo: {a: 1}
  };
  const properties = {
    foo: {
      $ref: '#/definitions/foo'
    },
    bla: {
      type: 'object'
    }
  };
  const schema = {
    properties,
  };
  const expected = {
    foo: {a: 1},
    bla: {
      type: 'object'
    }
  };

  resolvePropertiesRefs(definitions, schema);

  expect(schema.properties).toEqual(expected);
});

test('resolveItemsRefs', () => {
  const definitions = {};
  const schema = {};

  resolveItemsRefs(definitions, schema);

  expect(schema.$items).not.toBeDefined();
});

test('resolveItemsRefs, items provided, should copy items', () => {
  const definitions = {
    foo: {a: 1}
  };
  const items = {
    $ref: '#/definitions/foo'
  };
  const schema = {
    items,
  };

  resolveItemsRefs(definitions, schema);

  expect(schema.$items).toEqual(items);
});

test('resolveItemsRefs, items provided, should resolve items', () => {
  const definitions = {
    foo: {a: 1}
  };
  const items = {
    $ref: '#/definitions/foo'
  };
  const schema = {
    items,
  };
  const expected = {
    a: 1
  };

  resolveItemsRefs(definitions, schema);

  expect(schema.items).toEqual(expected);
});

test('resolveRefs', () => {
  const definitions = {
    foo: {a: 1}
  };
  const schema = {
    foo: 'bla'
  };
  const expected = {
    foo: 'bla'
  };

  const result = resolveRefs(definitions, schema);

  expect(result).toEqual(expected)
});

test('resolveRefs, schema with reference', () => {
  const definitions = {
    foo: {a: 1}
  };
  const schema = {
    $ref: '#/definitions/foo'
  };
  const expected = {a: 1};

  const result = resolveRefs(definitions, schema);

  expect(result).toEqual(expected)
});


test('resolveRefs, schema with merging', () => {
  const definitions = {
    foo: {a: 1}
  };
  const schema = {
    allOf: [
      {
        $ref: '#/definitions/foo'
      },
      {
        bla: 'blop'
      }
    ]
  };
  const expected = {
    a: 1,
    bla: 'blop'
  };

  const result = resolveRefs(definitions, schema);

  expect(result).toEqual(expected)
});
