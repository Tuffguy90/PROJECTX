const Joi = require("joi")

const createHeadSchema = Joi.object({
  subsidary_id: Joi.string().min(3).max(90).required(),
  mattrix_id: Joi.number().required(),
  head_name: Joi.string().required(),
  sub_mat_id: Joi.number().required(),
})

const headMetaSchema = Joi.object({
  subsidary_id: Joi.string().min(3).max(90).required(),
  mattrix_id: Joi.number().required(),
  head_id: Joi.number().required(),
  head_value: Joi.string().required(),
  financial_year: Joi.string().required(),
  month: Joi.number().required(),
})

const headMetaBulkSchema = Joi.array({
  subsidary_id: Joi.string().min(3).max(90).required(),
  mattrix_id: Joi.number().required(),
  head_id: Joi.number().required(),
  head_value: Joi.string().required(),
  financial_year: Joi.string().required(),
  month: Joi.number().required(),
})

const headSchema = {
  createHeadSchema,
  headMetaSchema,
  headMetaBulkSchema,
}
module.exports = headSchema
