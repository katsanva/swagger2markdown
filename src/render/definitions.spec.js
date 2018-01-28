import {
  _getRenderer, 
  addValue, 
  getType, 
  isTruthy, 
  renderAnyDefinition, 
  renderDefinitionSimple,
  renderDefinitionWithTable
} from "./definitions";
import {identity} from 'ramda';
import renderDefinitions from "./definitions";

test('renderDefinitions: isTruthy', () => {
  const value = '';
  const expected = false;

  expect(isTruthy(value)).toBe(expected)
});

test('renderDefinitions: isTruthy, true', () => {
  const value = 'asdasd';
  const expected = true;

  expect(isTruthy(value)).toBe(expected)
});

test('renderDefinitions: addDefinition', () => {
  const render = jest.fn(identity);
  const acc = [];
  const name = 'name';
  const expected = ['name'];
  const result = addValue(render, acc, name);

  expect(result).toEqual(expected);
});

test('renderDefinitionWithTable', () => {
  const definition = {
    properties: {
      bla: {
        type: 'string'
      }
    },
    description: 'description',
  };
  const name = 'foo';
  const expected = [
    "<h3 id='/definitions/foo'>foo</h3>",
    "description",
    "|Name|Type|Description|\n|---|---|---|\n|`bla`|_string_||"
  ];
  const result = renderDefinitionWithTable(definition, name);

  expect(result).toEqual(expected);
});

test('renderDefinitionWithTable: no description', () => {
  const definition = {
    properties: {
      bla: {
        type: 'string'
      }
    },
  };
  const name = 'name';
  const expected = [
    "<h3 id='/definitions/name'>name</h3>",
    "name",
    "|Name|Type|Description|\n|---|---|---|\n|`bla`|_string_||"
  ];
  const result = renderDefinitionWithTable(definition, name);

  expect(result).toEqual(expected);
});

test('getType', () => {
  const definition = {
    type: 'bla',
  };
  const expected = `_bla_`;
  const result = getType(definition);

  expect(result).toEqual(expected);
});

test('getType: array', () => {
  const definition = {
    type: 'array',
    items: {
      type: 'foo'
    }
  };
  const expected = `[&nbsp;foo&nbsp;]`;
  const result = getType(definition);

  expect(result).toEqual(expected);
});

test('getType: array, no items', () => {
  const definition = {
    type: 'array',
  };
  const expected = `[ ]`;
  const result = getType(definition);

  expect(result).toEqual(expected);
});

test('renderDefinitionSimple', () => {
  const definition = {
    type: 'type',
    description: 'description',
    properties: {
      bla: {
        type: 'type'
      }
    }
  };
  const name = 'name';
  const expected = [
    "<h3 id='/definitions/name'>name</h3>",
    "description",
    "Type: _type_"
  ];
  const result = renderDefinitionSimple(definition, name);

  expect(result).toEqual(expected);
});

test('renderDefinitionSimple: no description', () => {
  const definition = {
    type: 'type',
    properties: {
      bla: {
        type: 'type'
      }
    }
  };
  const name = 'name';
  const expected = [
    "<h3 id='/definitions/name'>name</h3>",
    "name",
    "Type: _type_"
  ];
  const result = renderDefinitionSimple(definition, name);

  expect(result).toEqual(expected);
});

test('_getRenderer', () => {
  const definition = {
    type: 'type',
    description: 'description',
    properties: {
      bla: {
        type: 'type'
      }
    }
  };
  const tableRenderer = jest.fn();
  const simpleRenderer = jest.fn();

  _getRenderer(tableRenderer, simpleRenderer, definition);

  expect(simpleRenderer).toHaveBeenCalledWith(definition);
});

test('_getRenderer: object', () => {
  const definition = {
    type: 'object',
    description: 'description',
    properties: {
      bla: {
        type: 'type'
      }
    }
  };
  const tableRenderer = jest.fn();
  const simpleRenderer = jest.fn();

  _getRenderer(tableRenderer, simpleRenderer, definition);

  expect(tableRenderer).toHaveBeenCalledWith(definition);
});

test('renderAnyDefinition: object', () => {
  const definitions = {
    name: {
      type: 'type',
      description: 'description',
      properties: {
        bla: {
          type: 'type'
        }
      }
    }
  };
  const name = 'name';
  const expected = [
    "<h3 id='/definitions/name'>name</h3>",
    "description",
    "Type: _type_",
  ];
  const result = renderAnyDefinition(definitions, name);

  expect(result).toEqual(expected);
});

test('renderAnyDefinition: object', () => {
  const definitions = {
    name: {
      type: 'object',
      description: 'description',
      properties: {
        bla: {
          type: 'type'
        }
      }
    }
  };
  const name = 'name';
  const expected = [
    "<h3 id='/definitions/name'>name</h3>",
    "description",
    "|Name|Type|Description|\n|---|---|---|\n|`bla`|_type_||"
  ];
  const result = renderAnyDefinition(definitions, name);

  expect(result).toEqual(expected);
});

test('renderDefinitions', () => {
  const definitions = {
    name: {
      type: 'object',
      description: 'description',
      properties: {
        bla: {
          type: 'type'
        }
      }
    }
  };
  const expected = [
    "<h3 id='/definitions/name'>name</h3>",
    "description",
    "|Name|Type|Description|\n|---|---|---|\n|`bla`|_type_||"
  ];
  const result = renderDefinitions({definitions});

  expect(result).toEqual(expected);
});