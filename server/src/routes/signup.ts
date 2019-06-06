import express from "express";
import signupPOST from "../controllers/signupPOST";
const router = express.Router();

router
  .route("/login")
  .post(loginPOST)
  .get((req, res) => {
    res.status(200).send("Hello to login route");
  });

export default router;
