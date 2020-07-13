const mongoose = require("mongoose");
const requireDir = require("require-dir");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

requireDir("../models");

const Users = mongoose.model("Users");

module.exports = {
  async index(req, res) {
    try {
      const user = await Users.find();
      return res.json(user);
    } catch (error) {
      console.log("ERRO TO GET LIST FROM USER", error);
      return res.status(400).json(error);
    }
  },
  async createUsers(req, res) {
    const { name, email, whatsapp, password, city, uf } = req.body;
    const hash = await bcrypt.hash(password, 10);

    try {
      const users = await Users.create({
        name,
        email,
        whatsapp,
        password: hash,
        city,
        uf
      });
      return res.json(users);
    } catch (error) {
      console.log("ERRO TO CREATE USER", error);
      return res.status(400).json(error.status);
    }
  }
};
