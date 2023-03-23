const db = require("../models");
const ROLES = db.tbl_role_masters;
const helper = require("../helper/index");
const { createRoleSchema } = require("./validators/user");
const { Op } = require("sequelize");

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const create = async (req, res) => {
  try {
    const body = req.body;
    if (body?.key) {
      return helper.updateModel("role", body.values, body.key, res);
    }
    const validate = createRoleSchema.validate(body);
    if (validate?.error) {
      return res.status(400).json({
        message: "Validation Error",
        error: validate?.error,
      });
    }
    const isDuplicate = await ROLES.findOne({
      where: {
        name: body.name,
      },
    });

    if (isDuplicate) {
      return res.status(409).send({
        message: "Duplicate Data found",
        data: isDuplicate,
      });
    }
    const createdMatrix = await ROLES.create(body);

    return res.status(200).send({
      message: "success",
      data: createdMatrix,
    });
  } catch (err) {
    return res.status(500).send({ message: err?.message, data: [] });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const list = async (req, res) => {
  try {
    const role_id = req.query.role_id;
    let whereCondition = {
      id: {
        [Op.ne]: 1,
      },
    };
    var conditions = {
      attributes: ["name", "id", "short_name", "status"],
      where: whereCondition,
    };
    if (role_id > 0) {
      whereCondition.id = role_id;
    }
    conditions.where = whereCondition;
    const roles = await ROLES.findAll(conditions);
    return res.status(200).send({
      message: "success",
      data: roles,
    });
  } catch (err) {
    return res.status(500).send({ message: err?.message, data: [] });
  }
};

const roleController = {
  create,
  list,
};

module.exports = roleController;
