'use strict';

import {
  curry,
} from 'ramda';

import {heading} from "./md";
import renderParameters from "./parameters";
import renderResponses from "./responses";

export const _getURI = curry((swaggerDocument, path) => {
  const {
    host,
    basePath,
    schemes: [schema],
  } = swaggerDocument;
  const uriParts = [
    host,
    basePath,
    path,
  ];

  if (!host) {
    return `${basePath}${path}`;
  }

  return `${schema}://${uriParts.join('')}`;
});

export const getEndpointHeader = (getURI, endpoint) => {
  const {
    path,
    method,
    summary,
  } = endpoint;

  const uri = getURI(path);

  return [
    heading(summary, 3),
    `    ${method.toUpperCase()} ${uri}`,
  ];
};

export const getEndpointBody = (swaggerDocument, endpoint) => {
  const {
    parameters,
    definitions
  } = swaggerDocument;

  return []
    .concat(
      heading(`Request`, 4),
      renderParameters(endpoint, parameters, definitions),
      heading(`Responses`, 4),
      renderResponses(definitions, endpoint)
    );
};

export const renderEndpoint = curry((swaggerDocument, acc, endpoint) => {
  const getURI = _getURI(swaggerDocument);
  const endpointView = getEndpointHeader(getURI, endpoint)
    .concat(
      getEndpointBody(swaggerDocument, endpoint)
    );

  return acc.concat(endpointView);
});

export default renderEndpoint;