const db = require("../models/index")

const updateModel = async (type, data, key, res) => {
  if (getModel(type)) {
    const updatedSub = await getModel(type).update(data, {
      where: {
        id: key,
      },
    })
    return res.send({
      message: "Data Updated Successfully",
      data: updatedSub,
    })
  }

  return res.status(500).send({
    message: "Something went wrong",
  })
}

const getModel = (type) => {
  let MODEL = {}
  switch (type) {
    case "subsidary":
      MODEL = db.tbl_subsidary_masters
      break
    case "mattrix":
      MODEL = db.tbl_mattrix_masters
      break
    case "head":
      MODEL = db.tbl_head_masters
      break
    case "role":
      MODEL = db.tbl_role_masters
      break
    case "user":
      MODEL = db.tbl_user_masters
      break
  }

  return MODEL
}

const helper = {
  updateModel,
}

module.exports = helper
