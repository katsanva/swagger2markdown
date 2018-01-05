import {
  renderAnyParameter,
  getParametersTable,
  renderParameters,
  getExamples,
  getRequestExample,
  fillExampleByBodyField,
} from './parameters';

test('renderAnyParameter', () => {
  const renderParameter = jest.fn();
  const parameters = {};
  const parameter = {};

  renderAnyParameter(renderParameter, parameters, parameter);

  expect(renderParameter).toHaveBeenCalledWith(parameter);
});

test('renderAnyParameter: parameter is referenced', () => {
  const renderParameter = jest.fn();
  const parameters = {
    foo: {}
  };
  const parameter = {
    $ref: '#/parameters/foo'
  };

  renderAnyParameter(renderParameter, parameters, parameter);

  expect(renderParameter).toHaveBeenCalledWith(parameters.foo);
});

test('getParametersTable', () => {
  const parameters = {};
  const path = {
    parameters: [
      {
        name: 'foo',
        'in': 'bla',
        type: 'bleep',
        description: 'blop'
      }
    ]
  };

  const exdpected = 'Position|Name|Type|Description\n---|---|---|---\nbla|`foo`|_bleep_|blop';

  const result = getParametersTable(parameters, path);

  expect(result).toBe(exdpected);
});

test('renderParameters: no parameters', () => {
  const path = {
    parameters: [],
  };
  const parameters = {};
  const definitions = {};
  const expected = [];

  const result = renderParameters(path, parameters, definitions);

  expect(result).toEqual(expected);
});

test('renderParameters: no example block', () => {
  const path = {
    parameters: [
      {
        name: 'foo',
        'in': 'bla',
        type: 'bleep',
        description: 'blop'
      }
    ],
  };
  const parameters = {};
  const definitions = {};
  const expected = [
    "##### Parameters",
    "Position|Name|Type|Description\n---|---|---|---\nbla|`foo`|_bleep_|blop",
  ];

  const result = renderParameters(path, parameters, definitions);

  expect(result).toEqual(expected);
});

test('renderParameters: no example block', () => {
  const path = {
    parameters: [
      {
        name: 'foo',
        'in': 'body',
        schema:
          {
            type: 'bleep',
            description: 'blop',
            example: {blop: 'blo'}
          }
      }
    ],
  };
  const parameters = {};
  const definitions = {};
  const expected = [
    "##### Parameters",
    "Position|Name|Type|Description\n---|---|---|---\nbody|`foo`|_bleep_|",
    "##### Example",
    "```application/json\n{\n  \"blop\": \"blo\"\n}\n```"
  ];

  const result = renderParameters(path, parameters, definitions);

  expect(result).toEqual(expected);
});

test('fillExampleByBodyField: no example for field', () => {
  const body = {
    properties: {
      foo: {}
    }
  };
  const property = 'foo';
  const acc = {};
  const expected = {};

  const result = fillExampleByBodyField(body, acc, property);

  expect(result).toEqual(expected);
});

test('fillExampleByBodyField', () => {
  const body = {
    properties: {
      foo: {
        example: 111,
      }
    }
  };
  const property = 'foo';
  const acc = {};
  const expected = {
    foo: 111
  };

  const result = fillExampleByBodyField(body, acc, property);

  expect(result).toEqual(expected);
});

test('getExamples', () => {
  const body = {};
  const definitions = {};
  const expected = {};

  const result = getExamples(body, definitions);

  expect(result).toEqual(expected);
});

test('getExamples: take example from body', () => {
  const body = {
    schema: {example: {foo: 1}}
  };
  const definitions = {};
  const expected = {'application/json': {foo: 1}};

  const result = getExamples(body, definitions);

  expect(result).toEqual(expected);
});

test('getExamples: take example from body schema properties', () => {
  const body = {
    schema: {
      properties:
        {
          foo: {
            example: 123
          }
        }
    }
  };
  const definitions = {};
  const expected = {'application/json': {foo: 123}};

  const result = getExamples(body, definitions);

  expect(result).toEqual(expected);
});

test('getRequestExample: no body parameter', () => {
  const parmameters = [];
  const definitions = {};
  const expected = [];

  const result = getRequestExample(parmameters, definitions);

  expect(result).toEqual(expected);
});

test('getRequestExample: no examples', () => {
  const parmameters = [
    {
      'in': 'body'
    }
  ];
  const definitions = {};
  const expected = [];

  const result = getRequestExample(parmameters, definitions);

  expect(result).toEqual(expected);
});