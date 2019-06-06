import { Handler } from "express";
import status from "http-status";
import jwt from "jsonwebtoken";
import * as yup from "yup";

const loginPOSTSchema = yup.object();

const loginPOST: Handler = async function(req, res, next) {
  try {
    //Get the email and password fields from body
    const { email, password } = req.body;

    //Lookup email and password from db
    const userData = {
      _id: "41224d776a326fb40f000001",
      email: "test@victorchan.io",
      password: "1234",
    };

    //If they match then generate a token and send it back as response
    if (email === userData.email && password === userData.password) {
      const token = jwt.sign({ userData }, "privateKey");
      res.status(200).send({ success: true, data: token });
    } else {
      res
        .status(status.UNAUTHORIZED)
        .send({ success: false, data: "Incorrect email or password" });
    }

    //Otherwise send them back an error

    // res.status(200).send({ success: true, data: "sampleToken here" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, data: JSON.stringify(error.message) });
  }
};
export default loginPOST;

//TODO: CONTIUNE HERE
//https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/ (Up to 50%)
//
