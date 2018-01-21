'use strict';

import {
  mapObjIndexed,
  reduce,
  forEach,
  pipe
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

  mapObjIndexed((value, path) => mapObjIndexed((endpoint, method) => {
    const definition = Object.assign(endpoint, {
      path,
      method
    });

    flat.push(definition)
  }, value), paths);

  return flat;
};

export const groupRequestsByTags = pipe(
  getFlatPaths,
  reduce((acc, definition) => {
    forEach(tag => {
      if (!acc[tag]) {
        acc[tag] = []
      }

      acc[tag].push(definition);
    }, definition.tags || []);

    return acc;
  }, {})
);

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

  const groupedByTags = groupRequestsByTags(paths);
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