'use strict';

import {
  map,
  mapObjIndexed,
  pipe,
  reduce,
  forEach,
  curry,
} from 'ramda';

import {
  heading,
} from './md/index';

import resolveRefs from './resolve-refs';

import renderMenu from './menu';
import renderAPI from './api';
import renderDefinitions from './definitions';

export const getFlatPaths = (paths) => {
  const flat = [];

  pipe(
    Object.keys,
    map(path => map(method => {
        const definition = {
          ...paths[path][method],
          path,
          method
        };

        flat.push(definition)
      }, Object.keys(paths[path])
    )))(paths);

  return flat;
};

export const groupRequestsByTags = curry((getFlatPaths, paths) => {
 const flat = getFlatPaths(paths);

  return reduce((acc, definition) => {
    forEach(tag => {
      if (!acc[tag]) {
        acc[tag] = []
      }

      acc[tag].push(definition);
    }, definition.tags || []);

    return acc;
  }, {}, flat);
});

export const getBase = (document, {prependHeader}) => {
  const {
    info: {
      description = '',
      title = 'REST API'
    }
  } = document;
  const defaultBase = [
    heading(title, 1),
    description,
  ];

  if (!prependHeader) {
    return defaultBase;
  }

  const header = [
    `title: ${title}`,
    `description: ${description}`,
    `social: false`,
    `===`,
  ];

  return header.concat(defaultBase);
};

export default function renderDocument(document, config) {
  const {
    paths,
    definitions,
  } = document;

  mapObjIndexed((value) => resolveRefs(definitions, value), definitions);

  const groupedByTags = groupRequestsByTags(getFlatPaths, paths);
  const base = getBase(document, config);

  return base
    .concat(
      heading(`Content`, 2),
      renderMenu(document, groupedByTags),
      renderAPI(document, groupedByTags),
      heading(`Definitions`, 2),
      renderDefinitions(document)
    )
    .join('\n\n');
}