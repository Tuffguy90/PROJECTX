const db = require("../models")
const MATRIX = db.tbl_mattrix_masters
const SUBMATTRIXMAP = db.tbl_subsidary_mattrix_mapings
const SUBSIDARY = db.tbl_subsidary_masters
const matrixSchema = require("./validators/matrix")
const helper = require("../helper/index")

const create = async (req, res) => {
  try {
    const body = req.body
    if (body?.key) {
      return helper.updateModel("mattrix", body.values, body.key, res)
    }
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

const listOfSubsidaryMattrix = async (req, res) => {
  try {
    const matx_id = req.query.id
    const matrix = await SUBMATTRIXMAP.findAll({
      include: [
        {
          model: MATRIX,
          as: "mattrix",
        },
        {
          model: SUBSIDARY,
          as: "subsidary",
        },
      ],
    })

    return res.send({
      message: "List of matrix",
      data: matrix,
    })
  } catch (err) {
    console.log("error-in-matrix-list", err)
    return res.status(500).send("Internal Server Error")
  }
}

const mapSubsidaryMattrix = async (req, res) => {
  try {
    console.log(req.body)
    let body = req.body
    if (body?.key) {
      let subsidary_id = body?.values?.subsidary_id || undefined
      let mattrix_id = body?.values?.mattrix_id || undefined
      const data = await SUBMATTRIXMAP.findOne({
        where: {
          id: body?.key,
        },
        raw: true,
      })
      if (mattrix_id) {
        const isDupl = await SUBMATTRIXMAP.findOne({
          where: {
            mattrix_id: mattrix_id,
            subsidary_id: data.subsidary_id,
          },
        })
        if (isDupl) {
          return res.status(409).send({
            message: "Duplicate Data found",
            data: isDupl,
          })
        }
      }
      if (subsidary_id) {
        const isDupl = await SUBMATTRIXMAP.findOne({
          where: {
            mattrix_id: data.mattrix_id,
            subsidary_id: subsidary_id,
          },
        })
        if (isDupl) {
          return res.status(409).send({
            message: "Duplicate Data found",
            data: isDupl,
          })
        }
      }
      return helper.updateModel("subMat", body.values, body.key, res)
    }
    let isDupl = await SUBMATTRIXMAP.findOne({
      where: body,
    })
    if (isDupl) {
      return res.status(409).send({
        message: "Duplicate Data found",
        data: isDupl,
      })
    }
    let resp = await SUBMATTRIXMAP.create(body)
    return res.send({
      message: "mattrix mapped with subsidary Successfully",
      data: resp,
    })
  } catch (error) {
    console.log("error-in-mattrix-maping", error)
    return res.status(500)
  }
}

const remove = async (req, res) => {
  try {
    if (req.body.id == undefined || req.body.id == null) {
      return res.status(400).json({
        message: "Validation Error",
        error: validate?.error,
      })
    }
    let resp = await MATTRIX.destroy({
      where: {
        id: req.body.id,
      },
    })
    return res.send({
      message: "mattrix Created Successfully",
      data: resp,
    })
  } catch (error) {
    console.log("error-in-mattrix-list", err)
    return res.status(500)
  }
}

const matrixRoutes = {
  create,
  list,
  mapSubsidaryMattrix,
  listOfSubsidaryMattrix,
  remove,
}

module.exports = matrixRoutes
