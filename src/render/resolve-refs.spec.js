import {getSchema} from "./resolve-refs";

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

