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
    var conditions = {
      include: [
        {
          model: db.tbl_user_masters,
          as: "user",
        },
      ],
    }

    if (req.body.createdBy !== 1) {
      conditions["include"][0]["where"] = {
        id: req.body.createdBy,
      }
      conditions["include"][0]["required"] = true
    }

    const subs = await SUBSIDARY.findAll(conditions)

    return res.send({
      message: "List of Subsidaries",
      data: subs,
    })
  } catch (err) {
    return res.status(500).send(err?.message)
  }
}

const subsidaryRoutes = {
  create,
  list,
}

module.exports = subsidaryRoutes
