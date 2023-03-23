const db = require("../models")
const HEADS = db.tbl_head_masters
const HEADMETAS = db.tbl_head_meta
const USERS = db.tbl_user_masters
const MATRIX = db.tbl_mattrix_masters
const SUBSIDIARY = db.tbl_subsidary_masters
const subsidarySchema = require("./validators/subsidary")
const helper = require("../helper/index")
const { Op } = require("sequelize")

const list = async (req, res) => {
  try {
    const financial_year = req.query?.financial_year || 2023
    const subsidary_id = req.query?.subsidary_id || 1
    const mattrix_id = req.query?.mattrix_id || 1

    var heads = [
      {
        month_name: "April",
        month_value: 0,
        month_id: 1,
      },
      {
        month_name: "May",
        month_value: 0,
        month_id: 2,
      },
      {
        month_name: "June",
        month_value: 0,
        month_id: 3,
      },
      {
        month_name: "July",
        month_value: 0,
        month_id: 4,
      },
      {
        month_name: "Aug",
        month_value: 0,
        month_id: 5,
      },
      {
        month_name: "Sept",
        month_value: 0,
        month_id: 6,
      },
      {
        month_name: "Oct",
        month_value: 0,
        month_id: 7,
      },
      {
        month_name: "Nov",
        month_value: 0,
        month_id: 8,
      },
      {
        month_name: "Dec",
        month_value: 0,
        month_id: 9,
      },
      {
        month_name: "Jan",
        month_value: 0,
        month_id: 10,
      },
      {
        month_name: "Feb",
        month_value: 0,
        month_id: 11,
      },
      {
        month_name: "March",
        month_value: 0,
        month_id: 12,
      },
    ]
    const head = await HEADS.findAll({
      attributes: ["id", "head_name"],
      include: [
        {
          required: false,
          model: HEADMETAS,
          as: "meta",
          where: {
            financial_year,
          },
        },
      ],
      where: {
        mattrix_id,
        subsidary_id,
      },
    })

    var modified_array = []

    head.map((each_head) => {
      modified_array.push({
        id: each_head.id,
        head_name: each_head.head_name,
        data: heads.map((month_heads) => {
          return {
            month_name: month_heads.month_name,
            month_value:
              each_head.meta
                .filter((each_meta) => each_meta.month == month_heads.month_id)
                .map((ev) => ev.head_value)[0] || 0,
          }
        }),
      })
    })

    return res.send({
      message: "Report",
      data: modified_array,
    })
  } catch (err) {
    return res.status(500).send("Internal Server Error")
  }
}

const showDashboardCountValue = async (req, res) => {
  try {
    let userCnt = await USERS.count({
      where: { id: { [Op.in]: 1 }, status: 1 },
    })
    let matrixCnt = await MATRIX.count({
      where: {
        status: 1,
      },
    })
    let subsidiaryCnt = await SUBSIDIARY.count({
      where: {
        status: 1,
      },
    })
    let headCnt = await HEADS.count({
      where: {
        status: 1,
      },
    })
    return res.status(200).send({
      message: "success",
      data: [
        { name: "Total User", cntVal: userCnt },
        { name: "Total Matrix", cntVal: matrixCnt },
        { name: "Total Subsidiary", cntVal: subsidiaryCnt },
        { name: "Total Heads", cntVal: headCnt },
      ],
    })
  } catch (err) {
    return res.status(500).send({ message: err?.message })
  }
}

const updateReport = async (req, res) => {
  try {
    const head_id = req.body.key
    const values = req.body.values
    const month = values.month_id + 1
    const head_value = values.month_value
    const financial_year = req.body?.financial_year || 2023
    const createdBy = req.body?.created_by || 1
    const getHeadData = await HEADS.findOne({
      attributes: ["mattrix_id", "subsidary_id"],
      where: {
        id: head_id,
      },
    })
    const subsidary_id = getHeadData.subsidary_id
    const mattrix_id = getHeadData.mattrix_id

    const hasValue = await HEADMETAS.findOne({
      where: {
        head_id,
        subsidary_id,
        mattrix_id,
        financial_year,
        month,
      },
    })
    let response = []
    if (hasValue) {
      response = await HEADMETAS.update(
        {
          head_value,
        },
        {
          where: {
            id: hasValue.id,
          },
        }
      )
    } else {
      response = await HEADMETAS.create({
        subsidary_id,
        mattrix_id,
        head_id,
        head_value,
        financial_year,
        month,
        createdBy,
      })
    }

    return res.send({
      message: "Report Updated Successfully",
      data: response,
    })
  } catch (err) {
    console.log("error-in-report-list", err)
    return res.status(500).send("Internal Server Error")
  }
}

const reportController = {
  list,
  updateReport,
  showDashboardCountValue,
}

module.exports = reportController
