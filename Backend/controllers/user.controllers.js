import userModel from "../models/user.model.js";
import  {userService}  from "../services/user.services.js";
import { validationResult } from "express-validator";


export const registerUser = async (req, res, next) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { firstname, lastname, email, password } = req.body;
  const hashedPassword = await userModel.hashPassword(password);
  const user = await userService.createUser({
    firstname,
    lastname,
    email,
    email,
    password: hashedPassword,
  });
  const token = user.generateAuthToken();
  res.status(201).json({token,user });
};
