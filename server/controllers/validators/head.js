const Joi = require("joi")

const createHeadSchema = Joi.object({
  subsidary_id: Joi.number().required(),
  mattrix_id: Joi.number().required(),
  head_name: Joi.string().required(),
  target: Joi.number().required(),
  sub_mat_id: Joi.number(),
  status: Joi.number().required(),
  createdBy: Joi.number().required(),
})

const headMetaSchema = Joi.object({
  subsidary_id: Joi.number().max(90).required(),
  mattrix_id: Joi.number().required(),
  head_id: Joi.number().required(),
  head_value: Joi.number().required(),
  financial_year: Joi.string().required(),
  month: Joi.number().required(),
})

const headTargetSchema = Joi.object({
  head_id: Joi.number().max(90).required(),
  target_value: Joi.number().required(),
})

const headMetaBulkSchema = Joi.array().items(headMetaSchema)

const headSchema = {
  createHeadSchema,
  headMetaSchema,
  headMetaBulkSchema,
  headTargetSchema,
}
module.exports = headSchema
