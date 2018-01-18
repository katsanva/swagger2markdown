`use strict`;

import {
  map,
  curry,
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

export const renderRef = ref => tr(
  `extends`,
  getRefLink(ref),
  `Base response schema`
);

export const renderObject = (propName, properties) => [
  renderRow(propName),
  ...renderObjectProps(properties)
].join('\n');

export const renderArray = (propName, property) => {
  if (property.$items.$ref) {
    return renderRow(propName, renderArrayType(getRefLink(property.$items.$ref)));
  }

  if (property.items.type === 'object') {
    return tr(
      `${bold(propName)}: [] `,
      renderArrayType(renderObjectProps(property.items.properties)),
      escape(property.description)
    );
  }

  if (property.items.type === 'array') {
    return renderRow(propName, renderArrayType(property.items.items.type), property.items.description);
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

export default () => (value) => {
  if (value.$ref) {
    return renderRef(value.$ref);
  }

  if (value.properties) {
    return map(renderProperty(value), Object.keys(value.properties))
      .join('\n')
  }
};