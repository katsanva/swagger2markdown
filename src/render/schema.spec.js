import {renderSchema} from "./schema";

test('renderSchema: any type', () => {
  const schema = {
    type: 'string'
  };
  const getRefLink = jest.fn();
  const getNonFormatted = jest.fn();
  const expected = '_string_';

  const result = renderSchema(getRefLink, getNonFormatted, schema);

  expect(getNonFormatted).not.toHaveBeenCalled();
  expect(getRefLink).not.toHaveBeenCalled();
  expect(result).toBe(expected);
});

test('renderSchema: type object', () => {
  const schema = {
    type: 'object'
  };
  const getRefLink = jest.fn();
  const getNonFormatted = jest.fn();

  renderSchema(getRefLink, getNonFormatted, schema);

  expect(getNonFormatted).toHaveBeenCalled();
});

test('renderSchema: ref provided', () => {
  const schema = {
    $ref: 123
  };
  const getRefLink = jest.fn();
  const getNonFormatted = jest.fn();

  renderSchema(getRefLink, getNonFormatted, schema);

  expect(getRefLink).toHaveBeenCalled();
  expect(getNonFormatted).not.toHaveBeenCalled();
});