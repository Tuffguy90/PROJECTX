const Joi = require("joi")

const matrixSchema = Joi.object({
  name: Joi.string().min(3).max(90).required(),
  status: Joi.number(),
  created_by: Joi.number(),
})

module.exports = matrixSchema
