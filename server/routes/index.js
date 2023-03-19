const express = require("express")
const router = express.Router()
const userRoutes = require("../controllers/userController")

router.get("/login", userRoutes.login)

module.exports = router
