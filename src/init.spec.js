import {init} from './init';
import yargs from 'yargs';

test('init, file read', () => {
  const y = yargs('-m foo --swagger bla');
  const fs = {
    writeFileSync: jest.fn(),
    readFileSync: jest.fn(() => 'test'),
  };
  const console = {
    error: jest.fn()
  };
  const transform = jest.fn();

  init(fs, transform, console, y);
  const expected = 'bla';

  expect(fs.readFileSync).toHaveBeenCalledWith(expected)
});

test('init, file read, shortcut for source', () => {
  const y = yargs('-m foo -s bla');
  const fs = {
    writeFileSync: jest.fn(),
    readFileSync: jest.fn(() => 'test'),
  };
  const console = {
    error: jest.fn()
  };
  const transform = jest.fn();

  init(fs, transform, console, y);
  const expected = 'bla';

  expect(fs.readFileSync).toHaveBeenCalledWith(expected)
});

test('init, transforms', () => {
  const y = yargs('-m foo -s bla');
  const fs = {
    writeFileSync: jest.fn(),
    readFileSync: jest.fn(() => 'test'),
  };
  const console = {
    error: jest.fn()
  };

  const transform = jest.fn();

  init(fs, transform,console, y);
  const expected = 'test';

  expect(transform).toHaveBeenCalledWith(expected, {prependHeader: true})
});

test('init, writes file', () => {
  const y = yargs('-m foo -s bla');
  const fs = {
    writeFileSync: jest.fn(),
    readFileSync: jest.fn(() => 'test'),
  };
  const console = {
    error: jest.fn()
  };

  const transform = jest.fn(() => ({result: 123}));

  init(fs, transform, console, y);
  const expected = ['foo', {result: 123}];

  expect(fs.writeFileSync).toHaveBeenCalledWith(...expected)
});

test('init, handles errors', () => {
  const y = yargs('-m foo -s bla');
  const fs = {
    writeFileSync: jest.fn(),
    readFileSync: jest.fn(() => 'test'),
  };
  const console = {
    error: jest.fn()
  };

  const transform = jest.fn(() => {throw Error()});

  init(fs, transform, console, y);

  expect(console.error).toHaveBeenCalledTimes(2)
});

