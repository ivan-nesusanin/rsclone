import express from "express";
import * as controller from "../controllers/auth.js";

const router = express.Router();

// http://localhost:5001/api/auth/login
router.post("/login", controller.login);
// http://localhost:5001/api/auth/register
router.post("/register", controller.register);

export default router;
