const express = require("express")
const matrixRoutes = require("../controllers/matrixController")
const subsidaryRoutes = require("../controllers/subsidaryController")
const router = express.Router()
const userRoutes = require("../controllers/userController")
const mattrixController = require("../controllers/matrixController")

/** POST ROUTES */
router.post("/create-subsidary", subsidaryRoutes.create)
router.post("/create-matrix", mattrixController.create)
router.post("map-susidary-mattrix",mattrixController.mapSubsidaryMattrix)

/** GET ROUTES */
router.get("/get-subsidaries", subsidaryRoutes.list)
router.get("/get-mattrix", mattrixController.list)
router.get("/delete-mattrix", mattrixController.remove)

module.exports = router
