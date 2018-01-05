import {
  code,
  pre,
  getFilledArray,
  link,
  italics,
  bold,
  tr,
  th,
  escape,
  table,
  li,
  heading,
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

test('pre', () => {
  const string = 'some-string';
  const expected = '`some-string`';

  const result = pre(string);

  expect(result).toBe(expected);
});

test('getFilledArray', () => {
  const length = 3;
  const content = '.';
  const expected = ['.', '.', '.'];

  const result = getFilledArray(length, content);

  expect(result).toEqual(expected)
});

test('link', () => {
  const name = 'foo';
  const url = 'bla';
  const expected = '[foo](bla)';

  const result = link(name, url);

  expect(result).toBe(expected);
});

test('link, no url provide', () => {
  const name = 'foo';
  const url = '';
  const expected = '[foo](foo)';

  const result = link(name, url);

  expect(result).toBe(expected);
});

test('italics', () => {
  const string = 'foo';
  const expected = '_foo_';

  const result = italics(string);

  expect(result).toBe(expected);
});

test('bold', () => {
  const string = 'foo';
  const expected = '**foo**';

  const result = bold(string);

  expect(result).toBe(expected);
});

test('tr', () => {
  const args = [1, 2, 3];
  const expected = '1|2|3';

  const result = tr(...args);

  expect(result).toBe(expected);
});

test('th', () => {
  const args = [1, 2, 3];
  const expected = ['1|2|3', '---|---|---'];

  const result = th(...args);

  expect(result).toEqual(expected);
});

test('escape', () => {
  const string = 'foo\n\nbla\r\nblop\n';
  const expected = 'foo bla blop\n';

  const result = escape(string);

  expect(result).toBe(expected);
});

test('escape: string missing', () => {
  const expected = '';

  const result = escape();

  expect(result).toBe(expected);
});

test('table', () => {
  const header = [
    'foo|bla',
    '---|---'
  ];
  const rows = [
    '1|2'
  ];
  const expected = 'foo|bla\n---|---\n1|2';

  const result = table(header, rows);

  expect(result).toBe(expected);
});

test('li', () => {
  const string = 'foo';
  const expected = '* foo';

  const result = li(string);

  expect(result).toBe(expected);
});

test('heading', () => {
  const length = 3;
  const string = 'foo';
  const expected = '### foo';

  const result = heading(string, length);

  expect(result).toBe(expected)
});

test('heading: no level provided', () => {
  const string = 'foo';
  const expected = '# foo';

  const result = heading(string);

  expect(result).toBe(expected)
});