const Joi = require("joi");

const createUserSchema = Joi.object({
  first_name: Joi.number().required(),
  last_name: Joi.number().required(),
  password: Joi.string().required(),
  email: Joi.number().required(),
  mobile: Joi.number().required(),
  address: Joi.number().required(),
  role_id: Joi.number().required(),
});

const userSchema = { createUserSchema };
module.exports = userSchema;
