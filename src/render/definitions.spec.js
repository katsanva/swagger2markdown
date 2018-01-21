import {addValue, isTruthy} from "./definitions";
import {identity} from 'ramda';

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