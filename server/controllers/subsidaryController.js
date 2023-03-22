const db = require("../models")
const SUBSIDARY = db.tbl_subsidary_masters
const SUBMATTRIX = db.tbl_subsidary_mattrix_mapings
const subsidarySchema = require("./validators/subsidary")
const helper = require("../helper/index")
const create = async (req, res) => {
  try {
    const body = req.body
    if (body?.key) {
      return helper.updateModel("subsidary", body.values, body.key, res)
    }
    const validate = subsidarySchema?.createSubsidarySchema.validate(body)
    if (validate?.error) {
      return res.status(400).json({
        message: "Validation Error",
        error: validate?.error,
      })
    }
    const isDupl = await SUBSIDARY.findOne({
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
    const createSub = await SUBSIDARY.create(body)

    return res.send({
      message: "Subsidary Created Successfully",
      data: createSub,
    })
  } catch (err) {
    console.log("error-in-subsidary-create", err)
    return res.status(500).send("Internal Server Error")
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
    return res.status(500).send("Internal Server Error")
  }
}

const mapSubMatrix = async (req, res) => {
  try {
    const body = req.body
    const validate = subsidarySchema?.mapSubMatrixSchema.validate(body)
    if (validate?.error) {
      return res.status(400).json({
        message: "Validation Error",
        error: validate?.error,
      })
    }
    const isDupl = await SUBSIDARY.findOne({
      where: {
        mattrix_id: body.mattrix_id,
        subsidary_id: body.subsidary_id,
      },
    })
    console.log("isdup", isDupl)
    if (isDupl) {
      return res.status(409).send({
        message: "Duplicate Data found",
        data: isDupl,
      })
    }
    const createSub = await SUBMATTRIX.create(body)

    return res.send({
      message: "Subsidary Matrix Mapped Successfully",
      data: createSub,
    })
  } catch (err) {
    console.log("error-in-subsidary-create", err)
    return res.status(500).send("Internal Server Error")
  }
}

const subsidaryRoutes = {
  create,
  list,
  mapSubMatrix,
}

module.exports = subsidaryRoutes
