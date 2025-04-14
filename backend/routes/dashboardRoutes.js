const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");
const authenticateToken = require("../middlewate/authenticateToken ");

router.get("/", authenticateToken, dashboardController.getDashboardData);

module.exports = router;
