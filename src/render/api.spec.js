import {
  getTagViewHeader,
  nameFilter,
  renderByTag,
  renderAPI,
} from "./api";

test('nameFilter', () => {
  const tagName = 'foo';
  const tag = {
    name: 'foo'
  };
  const expected = true;
  const result = nameFilter(tagName, tag);

  expect(result).toBe(expected);
});

test('nameFilter: tag is not mathced', () => {
  const tagName = 'foo';
  const tag = {
    name: 'bla'
  };
  const expected = false;
  const result = nameFilter(tagName, tag);

  expect(result).toBe(expected);
});

test('getTagViewHeader', () => {
  const tagName = 'foo';
  const swaggerDoc = {
    tags: [
      {
        name: 'bla',
        description: 'foo'
      }
    ]
  };
  const expected = [
    '## foo'
  ];
  const result = getTagViewHeader(tagName, swaggerDoc);

  expect(result).toEqual(expected);
});

test('getTagViewHeader: tag exist in swagger', () => {
  const tagName = 'foo';
  const swaggerDoc = {
    tags: [
      {
        name: 'foo',
        description: 'bla'
      }
    ]
  };
  const expected = [
    '## foo',
    'bla'
  ];
  const result = getTagViewHeader(tagName, swaggerDoc);

  expect(result).toEqual(expected);
});

test('renderByTag', () => {
  const swaggerDocument = {};
  const groupedByTags = {
    foo: [
      {}
    ]
  };
  const acc = [];
  const tagName = 'foo';
  const renderEndpoint = jest.fn(() => () => ['endpoint']);
  const expected = [
    '## foo',
    'endpoint'
  ];
  const result = renderByTag(renderEndpoint, swaggerDocument, groupedByTags, acc, tagName);

  expect(result).toEqual(expected)
});

test('renderAPI', () => {
  const swaggerDocument = {};
  const renderEndprenderByTags = jest.fn(() => () => ['## foo', 'endpoint']);
  const groupedByTags = {
    foo: [
      {}
    ]
  };
  const expected = ['## foo', 'endpoint'];
  const result = renderAPI(renderEndprenderByTags, swaggerDocument, groupedByTags);

  expect(result).toEqual(expected);
});