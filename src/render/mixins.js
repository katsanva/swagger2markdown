`use strict`;

import {
  map,
  curry,
  compose,
  pipe,
  join,
  keys,
} from 'ramda';
import {
  bold,
  tr,
  escape,
} from './md/index';
import getRefLink from './get-ref-link';
import renderObjectProps from './object-props';
import renderArrayType from "./array-with-type";

export const renderRow = (name, type = '', description = '') => tr(bold(name), type, escape(description));

export const renderRef = ({$ref}) => tr(
  `extends`,
  getRefLink($ref),
  `Base response schema`
);

export const renderObject = (propName, properties) => [
  renderRow(propName),
  ...renderObjectProps(properties)
].join('\n');

export const renderArrayTypeWithRef = compose(
  renderArrayType,
  getRefLink,
  ({$items}) => $items.$ref
);

export const renderArray = (propName, property) => {
  if (property.$items.$ref) {
    return renderRow(propName, renderArrayTypeWithRef(property));
  }

  if (property.items.type === 'object') {
    return tr(
      `${bold(propName)}: [] `,
      renderArrayType(renderObjectProps(property.items.properties)),
      escape(property.description)
    );
  }

  if (property.items.type === 'array') {
    return renderRow(propName, renderArrayType(renderArrayType(property.items.items.type)), property.items.description);
  }

  return renderRow(propName, renderArrayType(property.items.type), property.description);
};

export const renderProperty = curry((value, propName) => {
  const property = value.properties[propName];

  if (property.type === 'object' && property.properties) {
    return renderObject(propName, property.properties)
  }

  if (property.type === 'array') {
    return renderArray(propName, property)
  }

  return tr(
    bold(propName),
    property.type,
    escape(property.description)
  );
});

export const renderProperties = value => pipe(
  ({properties}) => properties,
  keys,
  map(renderProperty(value)),
  join('\n')
)(value);

export default () => (value) => {
  if (value.$ref) {
    return renderRef(value);
  }

  if (value.properties) {
    return renderProperties(value);
  }

  return '';
};