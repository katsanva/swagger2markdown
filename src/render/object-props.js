'use strict';

import {
  map,
} from 'ramda';

import {
  pre,
  tr,
  link,
  escape,
  italics,
} from './md';

import getRefLink from "./get-ref-link";

export const getObjectRefRow = (p, ref) => tr(
  pre(p),
  getRefLink(ref),
  ''
);

export const _renderObjectProps = (properties = {}, $properties = {}) => map(property => {
  const isArray = properties[property].type === 'array';
  const arrayItemsAreRef = properties[property].$items && properties[property].$items.$ref;

  if (isArray && arrayItemsAreRef) {
    return getObjectRefRow(property, properties[property].$items.$ref);
  }

  const isRef = $properties[property] && $properties[property].$ref;

  if (isRef) {
    return tr(
      pre(property),
      link(isRef),
      escape(properties[property].description)
    );
  }

  return tr(
    pre(property),
    italics(properties[property].type),
    escape(properties[property].description)
  );
}, Object.keys(properties));

export default _renderObjectProps;