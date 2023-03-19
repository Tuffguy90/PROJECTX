var jwt = require("jsonwebtoken")
const db = require("../models/index")
const USER = db.tbl_user_masters
require("dotenv").config()

/**
 * User Login
 * @param {*} req
 * @param {*} res
 * @returns token and user info or false
 */
const login = async (req, res) => {
  try {
    const email = req.body.email
    const password = req.body.password
    const conditions = {
      attributes: ["id", "first_name", "last_name", "email"],
      where: {
        email: email,
        password: password,
      },
    }
    const user = await USER.findOne(conditions)
    console.log("users", user)
    if (user) {
      var token = jwt.sign(
        {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
        },
        process.env.SECRET_KEY,
        { expiresIn: "48h" }
      )
      await USER.update(
        {
          token,
        },
        {
          where: {
            id: user.id,
          },
        }
      )
      return res.send({
        status: 200,
        message: "Login Success",
        user: user,
        token,
      })
    }
    return res.send({
      status: 400,
      message: "Invalid Login Credentials",
      user: {},
    })
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: err?.message,
    })
  }
}

const userRoutes = {
  login,
}

module.exports = userRoutes
