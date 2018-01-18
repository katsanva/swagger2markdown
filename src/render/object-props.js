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
import renderArrayType from "./array-with-type";

export const getArrayItemRefRow = (p, ref) => tr(
  pre(p),
  renderArrayType(getRefLink(ref)),
  ''
);

export const getArrayItemRow = (p, type) => tr(
  pre(p),
  renderArrayType(type),
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

  if (isArray) {
    if (!arrayItemsAreRef) {
      return getArrayItemRow(property, value.items.type)
    }

    return getArrayItemRefRow(property, $items.$ref);
  }

  const isRef = $properties[property] && $properties[property].$ref;

  if (isRef) {
    return tr(
      pre(property),
      getRefLink(isRef),
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