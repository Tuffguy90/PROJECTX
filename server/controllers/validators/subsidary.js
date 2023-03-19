const Joi = require("joi")

const subsidarySchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(90).required(),
  code: Joi.string().alphanum().min(3).max(90).required(),
  email: Joi.string().email().min(3).max(90).required(),
  mobile: Joi.number().required(),
  created_by: Joi.number(),
})

module.exports = subsidarySchema
