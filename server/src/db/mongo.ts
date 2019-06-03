require("dotenv").config();
import mongoose from "mongoose";

const admin = process.env.MONGO_ADMIN;
const server = process.env.MONGO_SERVER;
const password = process.env.MONGO_PASSWORD;

const CONNECTION_URL = `mongodb+srv://${admin}:${password}@${server}?retryWrites=true&w=majority`;
//Check IP Whitelist if connection Err

const Database = function() {
  mongoose
    .connect(CONNECTION_URL, { useNewUrlParser: true })
    .then(() => console.log("Database connection successful"))
    .catch(err => console.error("Database connection error:", err));
  return mongoose;
};
export default Database();
