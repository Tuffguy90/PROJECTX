const express = require("express")
const router = express.Router()
const userRoutes = require("../controllers/userController")

router.post("/login", userRoutes.login)

module.exports = router
