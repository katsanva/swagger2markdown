'use strict';

import {
  curry,
} from 'ramda';

import {heading} from "./md";
import renderParameters from "./parameters";
import renderResponses from "./responses";

export const getURI = (swaggerDocument, path) => {
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
    return path;
  }

  return `${schema}://${uriParts.join('')}`;
};

export const renderEndpoint = curry((swaggerDocument, acc, endpoint) => {
  const {
    parameters,
    definitions
  } = swaggerDocument;

  const uri = getURI(swaggerDocument, endpoint.path);
  const endpointSummary = [
    heading(3, endpoint.summary),
    `    ${endpoint.method.toUpperCase()} ${uri}`,
  ];

  const endpointView = endpointSummary
    .concat(
      heading(4, `Request`),
      renderParameters(endpoint, parameters, definitions),
      heading(4, `Responses`),
      renderResponses(definitions, endpoint)
    );

  return acc.concat(endpointView);
});

export default renderEndpoint;