import {getMenuLink, transformToHashURL} from "./menu";
import renderMenu from "./menu";

test('menu: transformToHashURL', () => {
  const name = 'foo-bla_bop/bar';
  const expected = '#foobla-bopbar';
  const result = transformToHashURL(name);

  expect(result).toBe(expected);
});

test('menu: getMenuLink', () => {
  const name = 'foo-bla_bop/bar';
  const expected = '[foo-bla_bop/bar](#foobla-bopbar)';
  const result = getMenuLink(name);

  expect(result).toBe(expected);
});

test('menu: renderMenu', () => {
  const swaggerDocument = {
    paths: {},
    definitions: {
      foo:{},
      bla: {}
    }
  };
  const grouped = {
    tag1: [
      {
        summary: 'some path'
      },
      {
        summary: 'some other path'
      }
    ]
  };
  const expected = [
    "Tag: [tag1](#tag1)",
    "* [some path](#some-path)\n* [some other path](#some-other-path)",
    "[Definitions](#definitions)",
    "* [foo](#/definitions/foo)\n* [bla](#/definitions/bla)"];
  const result = renderMenu(swaggerDocument, grouped);

  expect(result).toEqual(expected);
});