'use strict';

import {
  reduce,
  curry,
  find,
} from 'ramda';

import {heading} from "./md";
import renderEndpoint from "./endpoint";

export const renderWithTags = curry((swaggerDocument, groupedByTags, acc, tagName) => {
  const tagObj = find(a => a.name === tagName, swaggerDocument.tags || []);
  const tagView = [];

  tagView.push(heading(tagName, 2));

  if (tagObj && tagObj.description) {
    tagView.push(`${tagObj.description}`)
  }

  const rendered = reduce(renderEndpoint(swaggerDocument), [], groupedByTags[tagName]);

  return acc.concat(
    tagView,
    rendered
  );
});

export function renderAPI(swaggerDocument, groupedByTags) {
  return reduce(renderWithTags(swaggerDocument, groupedByTags), [], Object.keys(groupedByTags));
}

export default renderAPI;