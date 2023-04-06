const Joi = require("joi")

const createSubsidarySchema = Joi.object({
  parent_id: Joi.number().max(5).required(),
  name: Joi.string().max(90).required(),
  code: Joi.string().alphanum().max(90).required(),
  email: Joi.string().email().max(90).required(),
  mobile: Joi.number().required(),
  short_name: Joi.string(),
  status: Joi.number(),
  createdBy: Joi.number(),
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
