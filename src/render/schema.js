import {curry} from 'ramda';

import {code, italics} from "./md";
import getRefLink from "./get-ref-link";

export const renderSchema = curry((getRefLink, code, schema) => {
  if (schema.$ref) {
    return getRefLink(schema.$ref)
  }

  if (schema.type === 'object') {
    return code(schema);
  }

  return italics(schema.type);
});

export default renderSchema(getRefLink, code);
