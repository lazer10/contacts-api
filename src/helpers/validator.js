import out from './response';
import 'joi';

export default (schema, toValidate, res, next) => {
  const { error } = schema.validate(toValidate);
  return error
    ? out(res, 422, error.details[0].message, null, 'VALIDATION_ERROR')
    : next();
};
