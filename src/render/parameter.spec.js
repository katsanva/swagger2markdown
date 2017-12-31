import {renderParameter, getRowByParameterSchema, getRowByParameterType} from "./parameter";

test('getRowByParameterSchema', () => {
  const parameter = { in: 'foo',
    name: 'bla',
    schema: {
      type: 'string'
    },
    descritpion: '111'
  };
  const expected = 'foo|`bla`|_string_|';

  const result = getRowByParameterSchema(parameter);

  expect(result).toBe(expected);
});

test('getRowByParameterType', () => {
  const parameter = { in: 'foo',
    name: 'bla',
    type: 'string',
    description: '111'
  };

  const expected = 'foo|`bla`|_string_|111';

  const result = getRowByParameterType(parameter);

  expect(result).toBe(expected);
});

test('renderParameter: no schema', () => {
  const parameter = {};
  const getRowByParameterSchema = jest.fn();
  const getRowByParameterType = jest.fn();

  renderParameter(getRowByParameterSchema, getRowByParameterType, parameter);

  expect(getRowByParameterSchema).not.toHaveBeenCalled();
  expect(getRowByParameterType).toHaveBeenCalled();
});

test('renderParameter: schema provided', () => {
  const parameter = {
    schema: 123
  };
  const getRowByParameterSchema = jest.fn();
  const getRowByParameterType = jest.fn();

  renderParameter(getRowByParameterSchema, getRowByParameterType, parameter);

  expect(getRowByParameterSchema).toHaveBeenCalled();
  expect(getRowByParameterType).not.toHaveBeenCalled();
});