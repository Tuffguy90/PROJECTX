const db = require("../models");
const SUBSIDARY = db.tbl_subsidary_masters;
const SUBMATTRIX = db.tbl_subsidary_mattrix_mapings;
const subsidarySchema = require("./validators/subsidary");
const helper = require("../helper/index");
const { QueryTypes } = require("sequelize");
const { Op } = require("sequelize");

const create = async (req, res) => {
  try {
    const body = req.body;
    if (body?.key) {
      return helper.updateModel("subsidary", body.values, body.key, res);
    }
    const validate = subsidarySchema?.createSubsidarySchema.validate(body);
    if (validate?.error) {
      return res.status(400).json({
        message: "Validation Error",
        error: validate?.error,
      });
    }
    const isDupl = await SUBSIDARY.findOne({
      where: {
        name: body.name,
      },
    });

    if (isDupl) {
      return res.status(409).send({
        message: "Duplicate Data found",
        data: isDupl,
      });
    }
    const createSub = await SUBSIDARY.create(body);

    return res.send({
      message: "Subsidary Created Successfully",
      data: createSub,
    });
  } catch (err) {
    console.log("error-in-subsidary-create", err);
    return res.status(500).send("Internal Server Error");
  }
};

const list = async (req, res) => {
  try {
    let sub_id = req.query.id || null;
    let parent_id = req.query.parent_id || 0;
    let list_type = req.query.list_type || 0; //0-All,1-Parent,2-Child
    var conditions = {
      include: [
        {
          model: db.tbl_user_masters,
          as: "user",
        },
        {
          model: db.tbl_subsidary_masters,
          as: "parent_subsidiary",
          attributes: ["id", "name"],
        },
        {
          model: db.tbl_subsidary_masters,
          as: "child_subsidiary",
          attributes: ["id", "name"],
        },
      ],
      where: {},
      logging: false,
      order: [["id", "ASC"]],
    };
    if (list_type !== 0) {
      Number(list_type) === 1 && (conditions.where.parent_id = 0);
      Number(list_type) === 2 &&
        (conditions.where.parent_id = {
          [Op.ne]: 0,
        });
    }
    if (sub_id !== null) {
      conditions.where["id"] = sub_id;
    }
    if (parent_id !== 0) {
      conditions.where["parent_id"] = parent_id;
    }

    if (req.body.createdBy !== 1) {
      conditions["include"][0]["where"] = {
        id: req.body.createdBy,
      };
      conditions["include"][0]["required"] = true;
    }

    const subs = await SUBSIDARY.findAll(conditions);
    return res.send({
      message: "List of Subsidaries",
      data: subs,
    });
  } catch (err) {
    return res.status(500).send(err?.message);
  }
};

const formattedList = async (req, res) => {
  try {
    let q = `SELECT c.id,c.name,CASE WHEN p.name is 
    null THEN c.name ELSE concat(p.name,'->',c.name)  
    END h_name  FROM exdb.tbl_subsidary_masters p right 
    join exdb.tbl_subsidary_masters c on p.id = c.parent_id where c.deletedAt is  null`;
    let subs = await db.sequelize.query(q, {
      type: QueryTypes.SELECT,
    });
    return res.send({
      message: "List of Subsidaries",
      data: subs,
    });
  } catch (error) {
    return res.status(500).send(error?.message);
  }
};

const subsidaryRoutes = {
  create,
  list,
  formattedList,
};

module.exports = subsidaryRoutes;
