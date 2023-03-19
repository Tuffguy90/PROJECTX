const express = require("express")
const subsidaryRoutes = require("../controllers/subsidaryController")
const router = express.Router()
const userRoutes = require("../controllers/userController")
const verifyToken = require("../middlewares/verifyToken")
/** POST ROUTES */
router.post("/login", userRoutes.login)
router.post("/create-subsidary", subsidaryRoutes.create)

/** GET ROUTES */
router.get("get-subsidaries", verifyToken, subsidaryRoutes.list)

module.exports = router
