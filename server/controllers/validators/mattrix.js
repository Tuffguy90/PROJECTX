const Joi = require("joi")

const mattrixSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(90).required(),
})

module.exports = subsidarySchema