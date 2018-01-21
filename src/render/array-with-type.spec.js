import renderArrayType from "./array-with-type";

test('renderArrayType', () => {
  const type = 'foo';
  const expected = '[&nbsp;foo&nbsp;]';

  expect(renderArrayType(type)).toBe(expected);
});