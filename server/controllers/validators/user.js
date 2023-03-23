const Joi = require("joi");

const createUserSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
  mobile: Joi.string().required(),
  address: Joi.string().required(),
  subsidary_id: Joi.number().required(),
  status: Joi.number().required(),
  created_by: Joi.number().required(),
});

const createRoleSchema = Joi.object({
  name: Joi.string().required(),
  short_name: Joi.string().required(),
  status: Joi.number().required(),
  created_by: Joi.number().required(),
});

const userSchema = { createUserSchema, createRoleSchema };
module.exports = userSchema;
