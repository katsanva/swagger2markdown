import renderEndpoint, {_getURI, getEndpointBody, getEndpointHeader} from "./endpoint";

test('renderEndpoint: _getURI', () => {
  const swaggerDocument = {
    host: 'a.com',
    basePath: '/foo',
    schemes: ['blop']
  };
  const path = '/123';
  const expected = 'blop://a.com/foo/123';
  const result = _getURI(swaggerDocument, path);

  expect(result).toBe(expected);
});

test('renderEndpoint: _getURI, no host provided', () => {
  const swaggerDocument = {
    basePath: '/foo',
    schemes: ['blop']
  };
  const path = '/123';
  const expected = '/foo/123';
  const result = _getURI(swaggerDocument, path);

  expect(result).toBe(expected);
});

test('renderEndpoint: getEndpointHeader', () => {
  const getURI = jest.fn(() => 'uri');
  const endpoint = {
    summary: 'summary',
    method: 'method'
  };
  const expected = ["### summary", "    METHOD uri"];
  const result = getEndpointHeader(getURI, endpoint);

  expect(result).toEqual(expected);
});

test('renderEndpoint: getEndpointBody, no responses, no requests', () => {
  const swaggerDocument = {
    parameters: [],
    definitions: {}
  };
  const endpoint = {
    summary: 'summary',
    method: 'method',
    responses: {}
  };
  const expected = ["#### Request", "#### Responses"];
  const result = getEndpointBody(swaggerDocument, endpoint);

  expect(result).toEqual(expected);
});

test('renderEndpoint: getEndpointBody, no responses, no requests', () => {
  const swaggerDocument = {
    parameters: [],
    definitions: {},
    schemes: [],
    basePath: ''
  };
  const acc = [];
  const endpoint = {
    path: 'foo',
    summary: 'summary',
    method: 'method',
    responses: {}
  };
  const expected = ["### summary", "    METHOD foo", "#### Request", "#### Responses"];
  const result = renderEndpoint(swaggerDocument, acc, endpoint);

  expect(result).toEqual(expected);
});



