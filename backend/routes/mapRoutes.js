import express from "express";
import { getMapData } from "../controllers/mapController.js";
import { verifyToken } from "../middlewate/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getMapData);

export default router;
