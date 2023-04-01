const Joi = require("joi");

const createUserSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().required(),
  mobile: Joi.string().required(),
  address: Joi.string().required(),
  subsidary_id: Joi.number().required(),
  status: Joi.number().required(),
  createdBy: Joi.number().required(),
  password: Joi.string().required(),
  password_value: Joi.string().required(),
  is_add: Joi.number().required(),
  is_edit: Joi.number().required(),
  is_delete: Joi.number().required(),
  role_id: Joi.number(),
});

const createRoleSchema = Joi.object({
  name: Joi.string().required(),
  short_name: Joi.string().required(),
  status: Joi.number().required(),
  createdBy: Joi.number().required(),
});

const userSubsidary = Joi.object({
  user_id: Joi.number().required(),
  subsidary_id: Joi.number().required(),
  createdBy: Joi.number().required(),
});

const userSchema = { createUserSchema, createRoleSchema,userSubsidary };
module.exports = userSchema;
