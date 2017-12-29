import {
    getRefLink,
    getRefName,
    getNonFormatted,
    _renderSchema,
    getRowByParameterSchema,
    getRowByParameterType,
    _renderParam,
    getSchema,
} from './render';

test('getRefLink', () => {
    const ref = '#/foo/bla';
    const expected = '[_bla_](#/foo/bla)';

    const result = getRefLink(ref);

    expect(result).toBe(expected);
})

test('getRefName', () => {
    const ref = '#/foo/blop/bla';
    const expected = 'bla';

    const result = getRefName(ref);

    expect(result).toBe(expected);
})

test('getNonFormatted: default type', () => {
    const data = {};
    const expected = '```application/json\n{}\n```';

    const result = getNonFormatted(data);

    expect(result).toBe(expected);
});

test('getNonFormatted: type provided', () => {
    const data = {};
    const type = 'foo'
    const expected = '```foo\n{}\n```';

    const result = getNonFormatted(data, type);

    expect(result).toBe(expected);
});

test('getNonFormatted: type contains spaces', () => {
    const data = {};
    const type = 'foo bla'
    const expected = '```foo_bla\n{}\n```';

    const result = getNonFormatted(data, type);

    expect(result).toBe(expected);
});

test('_renderSchema: any type', () => {
    const schema = {
        type: 'string'
    };
    const getRefLink = jest.fn();
    const getNonFormatted = jest.fn();
    const expected = '_string_'

    const result = _renderSchema(getRefLink, getNonFormatted, schema);

    expect(getNonFormatted).not.toHaveBeenCalled();
    expect(getRefLink).not.toHaveBeenCalled();
    expect(result).toBe(expected);
});

test('_renderSchema: type object', () => {
    const schema = {
        type: 'object'
    };
    const getRefLink = jest.fn();
    const getNonFormatted = jest.fn();

    _renderSchema(getRefLink, getNonFormatted, schema);

    expect(getNonFormatted).toHaveBeenCalled();
});

test('_renderSchema: ref provided', () => {
    const schema = {
        $ref: 123
    };
    const getRefLink = jest.fn();
    const getNonFormatted = jest.fn();

    _renderSchema(getRefLink, getNonFormatted, schema);

    expect(getRefLink).toHaveBeenCalled();
    expect(getNonFormatted).not.toHaveBeenCalled();
});

test('getRowByParameterSchema', () => {
    const parameter = { in: 'foo',
        name: 'bla',
        schema: {
            type: 'string'
        },
        descritpion: '111'
    };
    const expected = 'foo|`bla`|_string_|\n'

    const result = getRowByParameterSchema(parameter);

    expect(result).toBe(expected);
});

test('getRowByParameterType', () => {
    const parameter = { in: 'foo',
        name: 'bla',
        type: 'string',
        description: '111'
    };

    const expected = 'foo|`bla`|_string_|111\n'

    const result = getRowByParameterType(parameter);

    expect(result).toBe(expected);
});

test('_renderParam: no schema', () => {
    const parameter = {};
    const getRowByParameterSchema = jest.fn();
    const getRowByParameterType = jest.fn();

    _renderParam(getRowByParameterSchema, getRowByParameterType, parameter);

    expect(getRowByParameterSchema).not.toHaveBeenCalled();
    expect(getRowByParameterType).toHaveBeenCalled();
});

test('_renderParam: schema provided', () => {
    const parameter = {
        schema: 123
    };
    const getRowByParameterSchema = jest.fn();
    const getRowByParameterType = jest.fn();

    _renderParam(getRowByParameterSchema, getRowByParameterType, parameter);

    expect(getRowByParameterSchema).toHaveBeenCalled();
    expect(getRowByParameterType).not.toHaveBeenCalled();
});

test('getSchema: easy path', () => {
    const definitions = {
        a: {
            type: 'string'
        }
    };
    const ref = '#/definitions/a';
    const expected = definitions.a;

    const result = getSchema(definitions, ref);

    expect(result).toBe(expected);
})

test('getSchema: deep path', () => {
    const definitions = {
        a: {
            b: {
                id: {
                    type: 'string'
                }
            }
        }
    };
    const ref = '#/definitions/a/b/id';
    const expected = definitions.a.b.id;

    const result = getSchema(definitions, ref);

    expect(result).toBe(expected);
});

