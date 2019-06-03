require("dotenv").config();
import express from "express";
import loginRouter from "./routes/login";
import mongoose from "./db/mongo";
mongoose.version;

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/v1", loginRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}: Press Ctrl+C to terminate.`);
});
