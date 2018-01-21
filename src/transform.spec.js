import {transform} from './transform';

test('transform', () => {
  const yaml = {
    safeLoad: jest.fn(() => ({
      swagger: '2.0'
    }))
  };
  const render = jest.fn(() => 'test');
  const swagger = 'foo';
  const config = 'bla';
  const expected = 'test';

  const result = transform({yaml, render}, swagger, config);

  expect(result).toBe(expected);
});

test('transform', () => {
  const yaml = {
    safeLoad: jest.fn(() => ({
      swagger: '3.0'
    }))
  };
  const render = jest.fn(() => 'test');
  const swagger = 'foo';
  const config = 'bla';
  const expected = Error('Only swagger 2.0 is currently supported');

  expect(() => transform({yaml, render}, swagger, config)).toThrow(expected);
});