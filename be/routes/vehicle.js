const VehicleManagementController = require("../app/controllers/VehicleManagementController");
const express = require("express");
const router = express.Router();

router.get("/test", VehicleManagementController.test);
router.post("/store", VehicleManagementController.store);
router.get("/fetch", VehicleManagementController.fetch);
// router.post("/update", VehicleManagementController.update);
// router.post("/delete", VehicleManagementController.delete);

module.exports = router;
