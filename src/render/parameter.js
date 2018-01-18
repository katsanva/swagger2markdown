import {curry} from 'ramda';

import {escape, italics, pre, tr} from "./md";
import renderSchema from "./schema";
import {getType} from "./definitions";

export const getRowByParameterSchema = ({'in': $in, name, schema}) => tr(
  $in,
  pre(name),
  renderSchema(schema),
  ''
);

export const getRowByParameterType = ({'in': $in, name, type, description, items}) => tr(
  $in,
  pre(name),
  getType({type, items}),
  escape(description)
);

export const renderParameter = curry((getRowByParameterSchema, getRowByParameterType, parameter) => {
  if (parameter.schema) {
    return getRowByParameterSchema(parameter);
  }

  return getRowByParameterType(parameter);
});

export default renderParameter(getRowByParameterSchema, getRowByParameterType);
