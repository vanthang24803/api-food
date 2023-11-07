import express from "express";
import { resgister } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", resgister);

export default router;
