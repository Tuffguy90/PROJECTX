const express = require("express")
const matrixRoutes = require("../controllers/matrixController")
const subsidaryRoutes = require("../controllers/subsidaryController")
const router = express.Router()
const userRoutes = require("../controllers/userController")

/** POST ROUTES */
router.post("/create-matrix", matrixRoutes.create)
router.post("/create-subsidary", subsidaryRoutes.create)
router.post("/map-subsidary-matrix", subsidaryRoutes.mapSubMatrix)

/** GET ROUTES */
router.get("/get-subsidaries", subsidaryRoutes.list)
router.get("/get-matrix", matrixRoutes.list)

module.exports = router
