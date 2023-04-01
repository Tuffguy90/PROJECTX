var jwt = require("jsonwebtoken");
const db = require("../models/index");
const bcrypt = require("bcrypt");
const { createUserSchema, userSubsidary } = require("./validators/user");
const USER = db.tbl_user_masters;
const ROLE = db.tbl_role_masters;
const UserSubSidary = db.tbl_user_subsidary_mappings;
const SUBSIDARY = db.tbl_subsidary_masters;
const { extractTokenInfo } = require("../helpers/index");
require("dotenv").config();
const { Op } = require("sequelize");

/**
 * User Login
 * @param {*} req
 * @param {*} res
 * @returns token and user info or false
 */
const login = async (req, res) => {
  try {
    const email = req.body.email;
    const conditions = {
      attributes: [
        "id",
        "first_name",
        "last_name",
        "email",
        "password",
        "is_add",
        "is_edit",
        "is_delete",
        "role_id",
      ],
      include: [
        {
          model: SUBSIDARY,
          attributes: ["name", "id"],
          as: "subsidary",
        },
      ],
      where: {
        email: email,
        status: 1,
      },
    };

    let user = await USER.findOne(conditions);
    // user = JSON.parse(JSON.stringify(user));
    // if (user.role_id == 1) {
    //   let subsidary = await SUBSIDARY.findAll({
    //     attributes: ["name", "id"],
    //     raw: true,
    //   });
    //   user["subsidary"] = subsidary;
    // }
    if (user) {
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).send({
          status: 400,
          message: "Invalid Login Credentials",
        });
      }

      var token = jwt.sign(
        {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
        },
        process.env.SECRET_KEY,
        { expiresIn: "48h" }
      );
      await USER.update(
        {
          token,
        },
        {
          where: {
            id: user.id,
          },
        }
      );
      return res.send({
        status: 200,
        message: "Login Success",
        user: user,
        token,
      });
    }
    return res.status(400).send({
      status: 400,
      message: "Invalid Login Credentials",
      user: {},
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: err?.message,
    });
  }
};

/**
 * Change User Password
 * @param {*} req
 * @param {*} res
 */
const changePassword = async (req, res) => {
  try {
    const conditions = {
      attributes: ["id", "email", "password"],
      where: {
        id: req.body?.created_by,
      },
    };
    const user = await USER.findOne(conditions);
    if (user) {
      const isMatch = await bcrypt.compare(
        req.body.current_password,
        user.password
      );
      if (!isMatch) {
        return res.status(400).send({
          status: 400,
          message: "Current Password not matched.",
        });
      }

      if (req.body.new_password === req.body.current_password) {
        return res.status(400).send({
          status: 400,
          message: "Current Password and New Password cannot same.",
        });
      }

      if (req.body.new_password !== req.body.confirm_password) {
        return res.status(400).send({
          status: 400,
          message: "New Password and Confirm Password must be same.",
        });
      }

      let salt = await bcrypt.genSalt(10);
      let hashNewPassword = await bcrypt.hash(req.body.new_password, salt);
      await USER.update(
        { password: hashNewPassword, updatedBy: req.body.created_by },
        { where: { id: user?.id } }
      );
      return res.send({
        status: 200,
        message: "Password Change Successfully",
        data: [],
      });
    }
    return res.status(400).send({
      status: 400,
      message: "Something Went Wrong",
      user: {},
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: err?.message,
      data: [],
    });
  }
};

/**
 * To Create User (Email-Id unique)
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createUser = async (req, res) => {
  try {
    let tokenUserData = extractTokenInfo(req);
    let body = req.body;
    req.body["role_id"] = 2;
    let key = body.key || null;
    if (key !== null) {
      console.log("body", req.body);
      body.email && delete body.email;
      body.mobile && delete body.mobile;
      let updateData = await USER.update({ ...body }, { where: { id: key } });
      if (updateData) {
        return res.status(200).send({
          data: [],
          message: "Data Updated Successfully",
        });
      }
    }
    /** Password will user mobile number
     */
    body.password = body.password_value;
    const validate = createUserSchema.validate(body);
    if (validate?.error) {
      return res.status(400).send({
        message: "Validation Error",
        error: validate?.error,
      });
    }
    const isDuplicate = await USER.findOne({
      where: {
        email: body.email,
      },
    });

    if (isDuplicate) {
      return res.status(409).send({
        message: "Duplicate Data found",
        data: isDuplicate,
      });
    }
    body.createdBy = tokenUserData?.id || null;
    let salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password_value, salt);
    const createdUser = await USER.create(body);

    return res.status(200).send({
      message: "User Created Successfully",
      data: createdUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: err?.message,
      data: [],
    });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const userList = async (req, res) => {
  try {
    const user_id = req.query.user_id || null;
    let whereCondition = {};
    if (user_id === null) {
      whereCondition = {
        role_id: {
          [Op.ne]: 1,
        },
      };
    }
    var conditions = {
      attributes: [
        "id",
        "first_name",
        "last_name",
        "mobile",
        "email",
        "address",
        "password",
        "password_value",
        "status",
        "is_add",
        "is_edit",
        "is_delete",
      ],
      logging: false,
      where: whereCondition,
    };
    const countData = await USER.findAll(conditions);
    if (user_id !== null) {
      whereCondition.id = user_id;
    }
    conditions.where = whereCondition;
    const userList = await USER.findAll(conditions);

    return res.status(200).send({
      message: "",
      data: { data: userList, totalCount: countData?.length },
    });
  } catch (err) {
    return res.status(500).send({ message: err?.message, data: [] });
  }
};

const mapUserSubsidary = async (req, res) => {
  try {
    let tokenUserData = extractTokenInfo(req);
    let body = req.body;
    if (body?.key) {
      let isDuplicate = await UserSubSidary.findOne({
        where: body?.values,
      });
      if (isDuplicate) {
        return res.status(409).send({
          message: "Duplicate Data found",
          data: isDuplicate,
        });
      }
      return helper.updateModel("usersubsidary", body.values, body.key, res);
    }
    body.createdBy = tokenUserData?.id || null;
    const validate = userSubsidary.validate(body);
    if (validate?.error) {
      return res.status(400).send({
        message: "Validation Error",
        error: validate?.error,
      });
    }
    let isDuplicate = await UserSubSidary.findOne({
      where: req.body,
    });
    if (isDuplicate) {
      return res.status(409).send({
        message: "Duplicate Data found",
        data: isDuplicate,
      });
    }
    let resp = await UserSubSidary.create(req.body);
    return res.status(200).send({
      message: "Create Successfully",
      resp,
    });
  } catch (err) {
    return res.status(500).send({ message: err?.message, data: [] });
  }
};

const removeUserSubSidaryMapings = async (req, res) => {
  try {
    let id = req.params.id || req.query.id || undefined;
    if (!id) {
      return res.status(400).send({
        message: "Validation Error",
        error: null,
      });
    }
    await UserSubSidary.destroy({
      where: {
        id,
      },
    });
    return res.status(200).send({
      message: "Create Successfully",
      resp,
    });
  } catch (error) {
    return res.status(500).send({ message: error?.message, data: [] });
  }
};

const userSubsidaryList = async (req, res) => {
  try {
    let resp = await UserSubSidary.findAll({
      attributes:['id','user_id','subsidary_id']
    });
    return res.status(200).send({
      message: "Success",
      data: resp,
    });
  } catch (error) {
    return res.status(500).send({ message: err?.message, data: [] });
  }
};

const userRoutes = {
  login,
  changePassword,
  createUser,
  userList,
  mapUserSubsidary,
  removeUserSubSidaryMapings,
  userSubsidaryList,
};

module.exports = userRoutes;
