'use strict';

import {
  reduce,
} from 'ramda';

import {heading} from "./md";
import renderParameters from "./parameters";
import renderResponses from "./responses";

export function renderAPI(swaggerDocument, groupedByTags) {
  const {
    tags = [],
    definitions,
  } = swaggerDocument;

  return reduce((acc, tagName) => {
    const tagObj = tags.find(a => a.name === tagName);
    const tagtView = [];

    tagtView.push(heading(2, tagName));

    if (tagObj && tagObj.description) {
      tagtView.push(`${tagObj.description}`)
    }

    const rendered = reduce((acc, endpoint) => {
      const {
        parameters,
        host,
        basePath,
        schemes: [schema]
      } = swaggerDocument;
      const uriParts = [
        host,
        basePath,
        endpoint.path,
      ];

      const uri = host ? `${schema}://${uriParts.join('')}` : endpoint.path;
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
    }, [], groupedByTags[tagName]);

    return acc.concat(
      tagtView,
      rendered
    );
  }, [], Object.keys(groupedByTags));
}

export default renderAPI;