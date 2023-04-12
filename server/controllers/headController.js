const db = require("../models")
const HEAD = db.tbl_head_masters
const HEADMETA = db.tbl_head_meta
const SUBSIDARY = db.tbl_subsidary_masters
const MATTRIX = db.tbl_mattrix_masters
const headSchema = require("./validators/head")
const helper = require("../helper/index")

const create = async (req, res) => {
  try {
    const body = req.body
    if (body?.key) {
      return helper.updateModel("head", body.values, body.key, res)
    }
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

const createHeadMeta = async (req, res) => {
  try {
    const body = req.body
    const validate = headSchema?.headMetaSchema.validate(body)
    if (validate?.error) {
      return res.status(400).json({
        message: "Validation Error",
        error: validate?.error,
      })
    }
    const createdMatrix = await HEADMETA.create(body)

    return res.send({
      message: "Head Meat Created Successfully",
      data: createdMatrix,
    })
  } catch (err) {
    console.log("error-in-head-meta-create", err)
    return res.status(500).send("Internal Server Error")
  }
}

const createBulkHeadMeta = async (req, res) => {
  try {
    const body = req.body
    const validate = headSchema?.headMetaBulkSchema.validate(body)
    if (validate?.error) {
      return res.status(400).json({
        message: "Validation Error",
        error: validate?.error,
      })
    }

    const createdMatrix = await HEADMETA.bulkCreate(body)

    return res.send({
      message: "Head Meat Created Successfully",
      data: createdMatrix,
    })
  } catch (err) {
    console.log("error-in-head-meta-create", err)
    return res.status(500).send("Internal Server Error")
  }
}

const list = async (req, res) => {
  try {
    const mattrix_id = req.query.mattrix_id
    const subsidary_id = req.query.subsidary_id
    var conditions = {
      include: [
        {
          model: HEADMETA,
          as: "meta",
          include: [
            {
              model: SUBSIDARY,
              as: "subsidary",
            },
            {
              model: MATTRIX,
              as: "mattrix",
            },
          ],
        },
      ],
    }
    if (mattrix_id > 0) {
      conditions["where"] = {
        mattrix_id,
      }
    }
    if (subsidary_id > 0) {
      conditions["where"] = {
        subsidary_id,
      }
    }
    const matrix = await HEAD.findAll(conditions)

    return res.send({
      message: "List of Heads with meta",
      data: matrix,
    })
  } catch (err) {
    console.log("error-in-matrix-list", err)
    return res.status(500).send("Internal Server Error")
  }
}

const listHeadMeta = async (req, res) => {
  try {
    const matx_id = req.query.id
    const matrix = await HEADMETA.findAll()

    return res.send({
      message: "List of Heads",
      data: matrix,
    })
  } catch (err) {
    console.log("error-in-matrix-list", err)
    return res.status(500).send("Internal Server Error")
  }
}

const headRoutes = {
  create,
  createHeadMeta,
  createBulkHeadMeta,
  list,
}

module.exports = headRoutes
