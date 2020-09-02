import Joi from 'joi';

export default Joi.object().keys({
  name: Joi.string().min(3).max(25)
    .required()
    .error(() => 'Enter a valid First Name. E.g: David'),
  phone_number: Joi.string().min(10)
    .required()
    .error(() => 'Enter valid phone number Ex: +250780000000'),
  address: Joi.string().min(3)
    .optional()
    .error(() => 'Enter valid address')
}).options({ allowUnknown: false });
