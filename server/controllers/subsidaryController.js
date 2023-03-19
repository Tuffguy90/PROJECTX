const db = require("../models")
const SUBSIDARY = db.tbl_subsidary_masters
const subsidarySchema = require("./validators/subsidary")

const create = async (req, res) => {
  try {
    const body = req.body
    const validate = subsidarySchema.validate(body)
    if (validate?.error) {
      return res.status(400).json({
        message: "Validation Error",
        error: validate?.error,
      })
    }
    const createSub = await SUBSIDARY.create(body)

    return res.send({
      message: "Subsidary Created Successfully",
      data: createSub,
    })
  } catch (err) {
    console.log("error-in-subsidary-create", err)
    return res.status(500)
  }
}

const list = async (req, res) => {
  try {
    const sub_id = req.query.id
    const subs = await SUBSIDARY.findAll()

    return res.send({
      message: "List of Subsidaries",
      data: subs,
    })
  } catch (err) {
    console.log("error-in-subsidary-list", err)
    return res.status(500)
  }
}

const subsidaryRoutes = {
  create,
  list,
}

module.exports = subsidaryRoutes
