const Joi = require("joi")

const subsidarySchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
})

module.exports = subsidarySchema
