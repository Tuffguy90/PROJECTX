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

mapSubsidaryMattrix= async (req, res) => {
  try {
      let mattrix_ids = req.body.mattrix_ids;
      let subsidary_id = req.body.subsidary_id;
      if(mattrix_ids.length<0 || !subsidary_id){
          return res.status(400).json({
              message: "Validation Error",
              error: validate?.error,
          })
      }
      let data=[];
      mattrix_ids.forEach(element => {
          data.push({
              mattrix_id:element,
              subsidary_id
          });
      });
      let resp = await SUBSIDARYMATTRIX.bulkCreate(data);
      return res.send({
          message: "mattrix Created Successfully",
          data: resp,
      })
  } catch (error) {
      console.log("error-in-mattrix-list", err)
      return res.status(500)
  }
}

remove= async (req, res) => {
  try {
      if(req.body.id == undefined || req.body.id == null){
          return res.status(400).json({
              message: "Validation Error",
              error: validate?.error,
          })
      }
      let resp = await MATTRIX.destroy({
          where:{
              id: req.body.id
          }
      });
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
  remove
}

module.exports = matrixRoutes
