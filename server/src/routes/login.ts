import express from "express";
import { handleLogin } from "../controllers/loginController";
const router = express.Router();

router.route("/login").post(handleLogin);

export default router;
