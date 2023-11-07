import { config } from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fs from "fs";

import User from "../models/user.model.js";

config();

const secret = process.env.SCRET_TOKEN;

export const resgister = async (req, res) => {
  try {
    const { username, password, name, avatar, age, address, phone, role } = req.body;

    const user = await User.create({
      username,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
      name,
      avatar,
      age,
      address,
      phone,
      role,
    });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server is error!" });
  }
};
