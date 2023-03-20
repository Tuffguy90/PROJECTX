const db = require("../models")
const HEAD = db.tbl_head_masters
const headSchema = require("./validators/head")

const create = async (req, res) => {
  try {
    const body = req.body
    const validate = headSchema?.createHeadSchema.validate(body)
    if (validate?.error) {
      return res.status(400).json({
        message: "Validation Error",
        error: validate?.error,
      })
    }
    const isDupl = await HEAD.findOne({
      where: {
        head_name: body.head_name,
        sub_mat_id: body.sub_mat_id,
      },
    })

    if (isDupl) {
      return res.status(409).send({
        message: "Duplicate Data found",
        data: isDupl,
      })
    }
    const createdMatrix = await HEAD.create(body)

    return res.send({
      message: "Head Created Successfully",
      data: createdMatrix,
    })
  } catch (err) {
    console.log("error-in-head-create", err)
    return res.status(500).send("Internal Server Error")
  }
}

const list = async (req, res) => {
  try {
    const matx_id = req.query.id
    const matrix = await HEAD.findAll()

    return res.send({
      message: "List of Heads",
      data: matrix,
    })
  } catch (err) {
    console.log("error-in-matrix-list", err)
    return res.status(500).send("Internal Server Error")
  }
}

const matrixRoutes = {
  create,
  list,
}

module.exports = matrixRoutes
