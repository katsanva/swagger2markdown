import getRefName from "./get-ref-name";

test('getRefName', () => {
  const ref = '#/foo/blop/bla';
  const expected = 'bla';

  const result = getRefName(ref);

  expect(result).toBe(expected);
});