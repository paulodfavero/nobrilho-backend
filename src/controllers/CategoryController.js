const mongoose = require("mongoose");
const requireDir = require("require-dir");

requireDir("../models");
const Category = mongoose.model("Category");

module.exports = {
  async listCategory(req, res) {
    try {
      const category = await Category.find();
      return res.json(category);
    } catch (error) {
      return res
        .status(400)
        .json(`THERE'S NO CATEGORY WHITH THIS ID -- ${error}`);
    }
  },
  async createCategory(req, res) {
    const { label, key } = req.body;
    const array = req.body;
    try {
      const category = await Category.find();
      category.map(item => {
        if (key === item.key) {
          const response = res
            .status(400)
            .json({ message: `ALREADY EXIST A CATEGORY WITH THIS NAME` });
          return response;
        }
      });
      array.map(async item => {
        await Category.create({
          label: item.label,
          key: item.key
        });
      });

      return res.json({ label });
    } catch (error) {
      return res.json(`ERROR TO CREATE CATEGORY -- ${error}`);
    }
  },
  async deleteCategory(req, res) {
    const { _id } = req.body;
    try {
      await Category.findByIdAndDelete(_id);
      return res.json("delete");
    } catch (error) {
      return res.json(`ERROR -- ${error}`);
    }
  }
};
