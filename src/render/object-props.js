'use strict';

import {
  map,
  curry,
  view,
  lensPath,
} from 'ramda';

import {
  pre,
  tr,
  escape,
  italics,
} from './md';

import getRefLink from './get-ref-link';
import renderArrayType from './array-with-type';

export const getArrayItemRefRow = (name, ref) => tr(
  pre(name),
  renderArrayType(getRefLink(ref)),
  ''
);

export const getArrayItemRow = (name, type) => tr(
  pre(name),
  renderArrayType(type),
  ''
);

export const renderArray = (property, $items, value) => {
  const arrayItemsAreRef = $items && $items.$ref;

  if (arrayItemsAreRef) {
    return getArrayItemRefRow(property, $items.$ref);
  }

  const type = view(lensPath(['items', 'type']), value) || 'any';

  return getArrayItemRow(property, type)
};

export const renderProp = curry((properties, $properties, property) => {
  const value = properties[property];
  const {
    type,
    description,
    $items,
  } = properties[property];

  if (value.type === 'array') {
    return renderArray(property, $items, value);
  }

  const referencePath = [
    property,
    '$ref',
  ];
  const reference = view(
    lensPath(referencePath),
    $properties
  );

  if (reference) {
    return tr(
      pre(property),
      getRefLink(reference),
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