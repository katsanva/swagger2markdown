import {renderArray, renderArrayTypeWithRef, renderObject, renderRef, renderRow} from "./mixins";

test('mixins: renderRow', () => {
  const name = 'name';
  const type = 'type';
  const description = 'description';
  const expected = '|**name**|type|description|';
  const result = renderRow(name, type, description);

  expect(result).toBe(expected);
});

test('mixins: renderRow, no description', () => {
  const name = 'name';
  const type = 'type';
  const expected = '|**name**|type||';

  const result = renderRow(name, type);

  expect(result).toBe(expected);
});

test('mixins: renderRow, no description, no type', () => {
  const name = 'name';
  const expected = '|**name**|||';

  const result = renderRow(name);

  expect(result).toBe(expected);
});

test('mixins: renderRef', () => {
  const $ref = '#/definitions/Reference';
  const expected = '|extends|[_Reference_](#/definitions/Reference)|Base response schema|';
  const result = renderRef({$ref});

  expect(result).toBe(expected);
});

test('mixins: renderObject', () => {
  const propName = 'propName';
  const properties = {
    property1: {
      type: 'type'
    },
    property2: {
      type: 'type'
    }
  };
  const expected = "|**propName**|||\n|`property1`|_type_||\n|`property2`|_type_||";
  const result = renderObject(propName, properties);

  expect(result).toBe(expected);
});

test('renderArrayTypeWithRef', () => {
  const array = {
    type: 'array',
    $items: {
      $ref: '#/definitions/foo'
    }
  };
  const expected = '[&nbsp;[_foo_](#/definitions/foo)&nbsp;]';
  const result = renderArrayTypeWithRef(array);

  expect(result).toBe(expected);
});

test('renderArray, will render items ref', () => {
  const propName = 'foo';
  const property = {
    $items: {
      $ref: '#/definitions/bla'
    }
  };
  const expected = '|**foo**|[&nbsp;[_bla_](#/definitions/bla)&nbsp;]||';
  const result = renderArray(propName, property);

  expect(result).toBe(expected);
});

test('renderArray, will render full items type', () => {
  const propName = 'foo';
  const property = {
    $items: {},
    items: {
      type: 'object',
      properties: {
        foo: {
          type: 'string',
          description: 'bla'
        }
      }
    }
  };
  const expected = '|**foo**: [] |[&nbsp;|`foo`|_string_|bla|&nbsp;]||';
  const result = renderArray(propName, property);

  expect(result).toBe(expected);
});

test('renderArray, will render array items type', () => {
  const propName = 'foo';
  const property = {
    $items: {},
    items: {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  };
  const expected = '|**foo**|[&nbsp;[&nbsp;string&nbsp;]&nbsp;]||';
  const result = renderArray(propName, property);

  expect(result).toBe(expected);
});

test('renderArray, will render array items type', () => {
  const propName = 'foo';
  const property = {
    $items: {},
    items: {
      type: 'string',
    }
  };
  const expected = '|**foo**|[&nbsp;string&nbsp;]||';
  const result = renderArray(propName, property);

  expect(result).toBe(expected);
});