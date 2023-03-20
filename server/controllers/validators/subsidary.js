const Joi = require("joi")

const createSubsidarySchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(90).required(),
  code: Joi.string().alphanum().min(3).max(90).required(),
  email: Joi.string().email().min(3).max(90).required(),
  mobile: Joi.number().required(),
  created_by: Joi.number(),
})

const mapSubMatrixSchema = Joi.object({
  subsidary_id: Joi.string().alphanum().min(3).max(90).required(),
  mattrix_id: Joi.string().alphanum().min(3).max(90).required(),
})

const subsidarySchema = {
  createSubsidarySchema,
  mapSubMatrixSchema,
}

module.exports = subsidarySchema
