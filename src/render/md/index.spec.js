import {
  code
} from './index';

test('code: default type', () => {
  const data = {};
  const expected = '```application/json\n{}\n```';

  const result = code(data);

  expect(result).toBe(expected);
});

test('code: type provided', () => {
  const data = {};
  const type = 'foo';
  const expected = '```foo\n{}\n```';

  const result = code(data, type);

  expect(result).toBe(expected);
});

test('code: type contains spaces', () => {
  const data = {};
  const type = 'foo bla';
  const expected = '```foo_bla\n{}\n```';

  const result = code(data, type);

  expect(result).toBe(expected);
});