'use strict';

import {
  reduce,
  curry,
  find,
} from 'ramda';

import {heading} from "./md";
import renderEndpoint from "./endpoint";

export const nameFilter = curry((tagName, tag) => tag.name === tagName);

export const getTagViewHeader = (tagName, {tags = []}) => {
  const tagObj = find(nameFilter(tagName), tags);
  const tagView = [];

  tagView.push(heading(tagName, 2));

  if (tagObj && tagObj.description) {
    tagView.push(`${tagObj.description}`);
  }

  return tagView;
};

export const renderByTag = curry((renderEndpoint, swaggerDocument, groupedByTags, acc, tagName) => {
  const tagView = getTagViewHeader(tagName, swaggerDocument);

  const rendered = reduce(renderEndpoint(swaggerDocument), [], groupedByTags[tagName]);

  return acc.concat(
    tagView,
    rendered
  );
});

export const renderAPI = curry((renderByTag, swaggerDocument, groupedByTags) => {
  return reduce(renderByTag(swaggerDocument, groupedByTags), [], Object.keys(groupedByTags));
});

export default renderAPI(renderByTag(renderEndpoint));