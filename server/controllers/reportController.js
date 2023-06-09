const db = require("../models")
const HEADS = db.tbl_head_masters
const HEADMETAS = db.tbl_head_meta
const subsidarySchema = require("./validators/subsidary")
const helper = require("../helper/index")

const list = async (req, res) => {
  try {
    const financial_year = req.query?.financial_year || 2023
    const subsidary_id = req.query?.subsidary_id || 1
    const mattrix_id = req.query?.mattrix_id || 1

    var heads = [
      {
        month_name: "April",
        month_value: 0,
        month_id: 4,
      },
      {
        month_name: "May",
        month_value: 0,
        month_id: 5,
      },
      {
        month_name: "June",
        month_value: 0,
        month_id: 6,
      },
      {
        month_name: "July",
        month_value: 0,
        month_id: 7,
      },
      {
        month_name: "Aug",
        month_value: 0,
        month_id: 8,
      },
      {
        month_name: "Sept",
        month_value: 0,
        month_id: 9,
      },
      {
        month_name: "Oct",
        month_value: 0,
        month_id: 10,
      },
      {
        month_name: "Nov",
        month_value: 0,
        month_id: 11,
      },
      {
        month_name: "Dec",
        month_value: 0,
        month_id: 12,
      },
      {
        month_name: "Jan",
        month_value: 0,
        month_id: 1,
      },
      {
        month_name: "Feb",
        month_value: 0,
        month_id: 2,
      },
      {
        month_name: "March",
        month_value: 0,
        month_id: 3,
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
    console.log("error-in-report-list", err)
    return res.status(500).send("Internal Server Error")
  }
}

const reportController = {
  list,
}

module.exports = reportController
