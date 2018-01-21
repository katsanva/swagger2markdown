'use strict';

import {
  map,
  reduce,
  compose,
  ifElse,
  identity,
  pipe,
  curry,
  join,
  keys,
} from 'ramda';

import {li, link} from "./md";

export const transformToHashURL = name => '#' + name
  .toLowerCase()
  .replace(/[?*+\/\\.^-]/g, '')
  .replace(/\s|_/g, '-');


export const getMenuLink = name => link(name, transformToHashURL(name));

export const concatLink = curry((acc, link) => `${acc}\n${link}`);

export const addMenuLink = (acc, resource) => compose(
  ifElse(
    () => !!acc,
    concatLink(acc),
    identity
  ),
  li,
  getMenuLink,
  ({summary}) => summary
)(resource);

export const getDefinitionsLinks = pipe(
  keys,
  map(
    compose(
      li,
      name => link(name, `#/definitions/${name}`),
    )
  ),
  join('\n')
);

export function renderMenu({paths, definitions}, grouped) {
  const routesLinks = reduce((acc, tag) => {
    const routes = reduce(addMenuLink, '', grouped[tag]);

    acc.push(`Tag: ${getMenuLink(tag)}`);
    acc.push(routes);

    return acc;
  }, [], Object.keys(grouped));

  const definitionsLinks = getDefinitionsLinks(definitions);

  return routesLinks.concat(
    getMenuLink(`Definitions`, '#definitions'),
    definitionsLinks
  );
}

export default renderMenu;