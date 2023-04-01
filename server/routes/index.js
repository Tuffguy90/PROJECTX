const express = require("express");
const matrixRoutes = require("../controllers/matrixController");
const subsidaryRoutes = require("../controllers/subsidaryController");
const router = express.Router();
const userRoutes = require("../controllers/userController");
const mattrixController = require("../controllers/matrixController");
const headRoutes = require("../controllers/headController");
const reportController = require("../controllers/reportController");
const roleController = require("../controllers/roleController");

/** POST ROUTES */
router.post("/create-subsidary", subsidaryRoutes.create)
router.post("/create-matrix", mattrixController.create)
router.post("/map-subsidary-mattrix", mattrixController.mapSubsidaryMattrix)
router.post("/create-head", headRoutes.create)
router.post("/create-head-meta", headRoutes.createHeadMeta)
router.post("/create-bulk-head-meta", headRoutes.createBulkHeadMeta)
router.post("/change-password", userRoutes.changePassword);
router.post("/create-user", userRoutes.createUser);
router.post("/create-role", roleController.create);
router.post("/update-report", reportController.updateReport);
router.post("/map-user-subsudary", userRoutes.mapUserSubsidary);

/** GET ROUTES */
router.get("/get-subsidaries", subsidaryRoutes.list);
router.get("/get-subsidary-mattrix", mattrixController.listOfSubsidaryMattrix);
router.get("/get-mattrix", mattrixController.list);
router.get("/delete-mattrix", mattrixController.remove);
router.get("/get-heads", headRoutes.list);
router.get("/get-user-list", userRoutes.userList);
router.get("/get-report", reportController.list);
router.get("/get-roles", roleController.list);
router.get("/get-dashboard-count", reportController.showDashboardCountValue);
router.get("/get-graph-data", reportController.getGraphData);
router.get("/delete-user-subsudary", userRoutes.removeUserSubSidaryMapings);
router.get("/user-subsidary", userRoutes.userSubsidaryList);

module.exports = router
