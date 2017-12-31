'use strict';

import {
  link,
  italics,
} from './md';
import getRefName from './get-ref-name';

export default ref => {
  const name = getRefName(ref);

  return link(italics(name), ref);
};
