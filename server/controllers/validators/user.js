const Joi = require("joi")

const createUserSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().required(),
  mobile: Joi.string().required(),
  address: Joi.string().required(),
  subsidary_id: Joi.number().required(),
  status: Joi.number().required(),
  password: Joi.string().required(),
  created_by: Joi.number().required(),
})

const userSchema = { createUserSchema }
module.exports = userSchema
