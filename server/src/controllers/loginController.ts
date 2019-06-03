import { Handler } from "express";

export const handleLogin: Handler = function(req, res, next) {
  try {
    //Get the email and password fields from body
    const { email, password } = req.body;

    //Lookup email and password from db

    //If they match then generate a token and send it back as response

    //Otherwise send them back an error

    res.status(200).send({ success: true, data: "sampleToken here" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, data: JSON.stringify(error.message) });
  }
};
