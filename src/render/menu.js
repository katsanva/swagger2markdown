'use strict';

import {
  map,
  reduce,
} from 'ramda';

import {li, link} from "./md";

export const transformToHashURL = name => '#' + name
  .toLowerCase()
  .replace(/[?*+\/\\.^-]/g, '')
  .replace(/\s|_/g, '-');

export const getMenuLink = name => link(name, transformToHashURL(name));

export function renderMenu({paths, definitions}, grouped) {
  const routesPart = reduce((acc, tag) => {
    const routes = reduce((acc, resource) => {
      acc.push(li(getMenuLink(resource.summary)));

      return acc;
    }, [], grouped[tag]);

    acc.push(`Tag: ${getMenuLink(tag)}`);
    acc.push(routes.join('\n'));

    return acc;
  }, [], Object.keys(grouped));

  const definitionsPart = map(name => li(link(name, `#/definitions/${name}`)), Object.keys(definitions)).join('\n');

  return [
    ...routesPart,
    getMenuLink(`Definitions`, '#definitions'),
    definitionsPart
  ];
}

export default renderMenu;