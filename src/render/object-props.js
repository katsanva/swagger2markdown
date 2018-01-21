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

export const getReference = (properties, property) => {
  const referencePath = [
    property,
    '$ref',
  ];
  return view(
    lensPath(referencePath),
    properties
  );
};

export const renderRefRow = (property, reference, description) => tr(
  pre(property),
  getRefLink(reference),
  escape(description)
);

export const renderTypeRow = (property, type, description) => tr(
  pre(property),
  italics(type),
  escape(description)
);

export const renderProp = curry((properties, $properties, property) => {
  const value = properties[property];
  const {
    type,
    description,
    $items,
  } = properties[property];

  if (type === 'array') {
    return renderArray(property, $items, value);
  }

  const reference = getReference($properties, property);

  if (reference) {
    return renderRefRow(property, reference, description);
  }

  return renderTypeRow(property, type, description);
});

export const _renderObjectProps = (properties = {}, $properties = {}) => map(renderProp(properties, $properties), Object.keys(properties));

export default _renderObjectProps;