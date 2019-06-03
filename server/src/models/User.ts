import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import validator from "validator";

export type User = {
  _id?: string;
  email: string;
  password: string;
};

const UserSchema = new mongoose.Schema({
  _id: ObjectId,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value: string) => {
      return validator.isEmail(value);
    },
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
