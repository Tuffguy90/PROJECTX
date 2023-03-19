const db = require("../models")
const MATRIX = db.tbl_mattrix_masters
const matrixSchema = require("./validators/matrix")

const create = async (req, res) => {
  try {
    const body = req.body
    const validate = matrixSchema.validate(body)
    if (validate?.error) {
      return res.status(400).json({
        message: "Validation Error",
        error: validate?.error,
      })
    }
    const isDupl = await MATRIX.findOne({
      where: {
        name: body.name,
      },
    })

    if (isDupl) {
      return res.status(409).send({
        message: "Duplicate Data found",
        data: isDupl,
      })
    }
    const createdMatrix = await MATRIX.create(body)

    return res.send({
      message: "Matrix Created Successfully",
      data: createdMatrix,
    })
  } catch (err) {
    console.log("error-in-matrix-create", err)
    return res.status(500).send("Internal Server Error")
  }
}

const list = async (req, res) => {
  try {
    const matx_id = req.query.id
    const matrix = await MATRIX.findAll()

    return res.send({
      message: "List of matrix",
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
