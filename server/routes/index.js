const express = require("express")
const subsidaryRoutes = require("../controllers/subsidaryController")
const router = express.Router()
const userRoutes = require("../controllers/userController")
const mattrixController = require("../controllers/mattrixController")

/** POST ROUTES */
router.post("/create-subsidary", subsidaryRoutes.create)
router.post("/create-mattrix", mattrixController.create)
router.post("map-susidary-mattrix",mattrixController.mapSubsidaryMattrix)

/** GET ROUTES */
router.get("/get-subsidaries", subsidaryRoutes.list)
router.get("/get-mattrix", mattrixController.list)



module.exports = router
