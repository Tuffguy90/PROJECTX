const express = require("express")
const matrixRoutes = require("../controllers/matrixController")
const subsidaryRoutes = require("../controllers/subsidaryController")
const router = express.Router()
const userRoutes = require("../controllers/userController")
const mattrixController = require("../controllers/matrixController")
const headRoutes = require("../controllers/headController")

/** POST ROUTES */
router.post("/create-subsidary", subsidaryRoutes.create)
router.post("/create-matrix", mattrixController.create)
router.post("map-susidary-mattrix", mattrixController.mapSubsidaryMattrix)
router.post("/create-head", headRoutes.create)

/** GET ROUTES */
router.get("/get-subsidaries", subsidaryRoutes.list)
router.get("/get-mattrix", mattrixController.list)
router.get("/delete-mattrix", mattrixController.remove)
router.get("/get-heads", headRoutes.list)

module.exports = router
