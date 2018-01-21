import {getFlatPaths, groupRequestsByTags} from "./index";

test('getFlatPaths', () => {
  const paths = {
    '/foo': {
      'PUT': {
        field: 'value'
      }
    }
  };
  const expected = [
    {
      field: 'value',
      path: '/foo',
      method: 'PUT'
    }
  ];

  const result = getFlatPaths(paths);

  expect(result).toEqual(expected);
});

test('groupRequestsByTags', () => {
  const paths = {
    '/foo': {
      'PUT': {
        tags: ['foo'],
        field: 'value'
      },
      'GET': {
        tags: ['foo1'],
        field: 'value1'
      }
    },
    '/bla': {
      'PUT': {
        tags: ['foo2'],
        field: 'value'
      },
      'GET': {
        tags: ['foo1'],
        field: 'value1'
      }
    }
  };
  const expected = {
    "foo": [
      {
        "field": "value",
        "method": "PUT",
        "path": "/foo",
        "tags": ["foo"]
      }],
    "foo1": [
      {
        "field": "value1",
        "method": "GET",
        "path": "/foo",
        "tags": ["foo1"]
      },
      {
        "field": "value1",
        "method": "GET",
        "path": "/bla",
        "tags": ["foo1"]
      }
    ],
    "foo2": [
      {
        "field": "value",
        "method": "PUT",
        "path": "/bla",
        "tags": ["foo2"]
      }
    ]
  };

  const result = groupRequestsByTags(paths);

  expect(result).toEqual(expected);
});