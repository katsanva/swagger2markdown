'use strict';

import yaml from 'js-yaml';
import render from './render/index';
import {curry} from 'ramda';

export const transform = curry(({yaml, render}, swagger, config) => {
  const swaggerDocument = yaml.safeLoad(swagger);

  if (swaggerDocument.swagger !== '2.0') {
    throw Error('Only swagger 2.0 is currently supported');
  }

  return render(swaggerDocument, config);
});

export default transform({yaml, render});