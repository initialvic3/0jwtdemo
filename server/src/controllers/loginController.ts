import { Handler } from "express";
import UserModel, { User } from "../models/User";
import mongoose, { Document } from "mongoose";

export const handleLogin: Handler = function(req, res, next) {
  try {
    //Get the email and password fields from body
    const { email, password } = req.body;

    //Lookup email and password from db

    //If they match then generate a token and send it back as response

    //Otherwise send them back an error

    //TESTING FOR NOW
    const newUserData: User = {
      _id: "41224d776a326fb40f000001",
      email: "test@victorchan.io",
      password: "1234",
    };
    const newUser: Document = new UserModel(newUserData);
    newUser
      .save()
      .then(doc => {
        console.log(doc);
      })
      .catch(err => {
        console.error(err);
      });

    res.status(200).send({ success: true, data: "sampleToken here" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, data: JSON.stringify(error.message) });
  }
};

//TODO: CONTIUNE HERE
//https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/ (Up to 50%)
//
