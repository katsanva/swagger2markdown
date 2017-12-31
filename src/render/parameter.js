import {curry} from 'ramda';

import {escape, italics, pre, tr} from "./md";
import renderSchema from "./schema";

export const getRowByParameterSchema = parameter => tr(
  parameter.in,
  pre(parameter.name),
  renderSchema(parameter.schema),
  ''
);

export const getRowByParameterType = parameter => tr(
  parameter.in,
  pre(parameter.name),
  italics(parameter.type),
  escape(parameter.description)
);

export const renderParameter = curry((getRowByParameterSchema, getRowByParameterType, parameter) => {
  if (parameter.schema) {
    return getRowByParameterSchema(parameter);
  }

  return getRowByParameterType(parameter);
});

export default renderParameter(getRowByParameterSchema, getRowByParameterType);
