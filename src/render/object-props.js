'use strict';

import {
  map,
  curry,
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

export const renderProp = curry((properties, $properties, property) => {
  const value = properties[property];
  const {
    type,
    description,
    $items,
  } = properties[property];

  const isArray = value.type === 'array';
  const arrayItemsAreRef = $items && $items.$ref;

  if (isArray && arrayItemsAreRef) {
    return getObjectRefRow(property, $items.$ref);
  }

  const isRef = $properties[property] && $properties[property].$ref;

  if (isRef) {
    return tr(
      pre(property),
      link(isRef),
      escape(description)
    );
  }

  return tr(
    pre(property),
    italics(type),
    escape(description)
  );
});

export const _renderObjectProps = (properties = {}, $properties = {}) => map(renderProp(properties, $properties), Object.keys(properties));

export default _renderObjectProps;