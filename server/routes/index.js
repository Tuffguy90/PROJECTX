const express = require("express")
const subsidaryRoutes = require("../controllers/subsidaryController")
const router = express.Router()
const userRoutes = require("../controllers/userController")

/** POST ROUTES */
router.post("/create-subsidary", subsidaryRoutes.create)

/** GET ROUTES */
router.get("/get-subsidaries", subsidaryRoutes.list)

module.exports = router
