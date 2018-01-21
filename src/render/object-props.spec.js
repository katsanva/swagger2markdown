import {getArrayItemRefRow, getArrayItemRow, renderArray, renderProp} from "./object-props";
import _renderObjectProps from "./object-props";

test('getArrayItemRefRow', () => {
  const name = 'name';
  const ref = '#/definitions/name';
  const expected = '|`name`|[&nbsp;[_name_](#/definitions/name)&nbsp;]||';
  const result = getArrayItemRefRow(name, ref);

  expect(result).toBe(expected);
});

test('getArrayItemRow', () => {
  const name = 'name';
  const type = 'type';
  const expected = '|`name`|[&nbsp;type&nbsp;]||';
  const result = getArrayItemRow(name, type);

  expect(result).toBe(expected);
});

test('renderArray', () => {
  const property = 'name';
  const $items = {
    type: 'string'
  };
  const value = {
    items: {
      type: 'string'
    }
  };
  const expected = '|`name`|[&nbsp;string&nbsp;]||';
  const result = renderArray(property, $items, value);

  expect(result).toBe(expected);
});

test('renderArray, referenced items', () => {
  const property = 'name';
  const $items = {
    $ref: '#/definitions/name'
  };
  const value = {
    items: {
      type: 'string'
    }
  };
  const expected = '|`name`|[&nbsp;[_name_](#/definitions/name)&nbsp;]||';
  const result = renderArray(property, $items, value);

  expect(result).toBe(expected);
});

test('renderProp', () => {
  const properties = {
    name: {}
  };
  const $properties = {};
  const property = 'name';
  const expected = '|`name`|_undefined_||';
  const result = renderProp(properties, $properties, property);

  expect(result).toBe(expected);
});

test('renderProp, array, items not defined', () => {
  const properties = {
    name: {
      type: 'array',
    }
  };
  const $properties = {};
  const property = 'name';
  const expected = '|`name`|[&nbsp;any&nbsp;]||';
  const result = renderProp(properties, $properties, property);

  expect(result).toBe(expected);
});

test('renderProp, array, value is referenced', () => {
  const properties = {
    name: {
    }
  };
  const $properties = {
    name: {
      $ref: '#/definitions/name'
    }
  };
  const property = 'name';
  const expected = '|`name`|[_name_](#/definitions/name)||';
  const result = renderProp(properties, $properties, property);

  expect(result).toBe(expected);
});

test('_renderObjectProps', () => {
  const properties = {};
  const $properties = {};
  const expected = [];
  const result = _renderObjectProps(properties, $properties);

  expect(result).toEqual(expected);
});

test('_renderObjectProps, $properties not defined', () => {
  const properties = {};
  const expected = [];
  const result = _renderObjectProps(properties);

  expect(result).toEqual(expected);
});

test('_renderObjectProps, $properties not defined, properties not defined', () => {
  const expected = [];
  const result = _renderObjectProps();

  expect(result).toEqual(expected);
});