const express = require("express");
const bcrypt = require("bcrypt");
// const connection = require("./database/connection");

const { index, createUsers } = require("./controllers/UsersController");
const { create } = require("./controllers/SessionController");
const {
  createCategory,
  listCategory,
  deleteCategory
} = require("./controllers/CategoryController");
const {
  createGains,
  listGains,
  updateGains,
  deleteGains
} = require("./controllers/GainsController");
const {
  createExpenses,
  listExpenses,
  updateExpenses,
  deleteExpenses
} = require("./controllers/ExpensesController");

const routes = express.Router();

routes.get("/", async (req, res) => {
  // const { id } = req.query;
  // try {
  //   const [user] = await connection("users")
  //     .select("password")
  //     .where({ id });
  //   const compare = await bcrypt.compare("123456", user.password);
  //   return res.json(compare);
  // } catch (error) {
  //   console.log("ERRO TO GET LIST FROM USER", error);
  //   return res.status(400).json(error);/
  // }
});
routes.post("/sessions", create);

routes.get("/user", index);
routes.post("/user", createUsers);

routes.get("/category", listCategory);
routes.post("/category", createCategory);
routes.delete("/category", deleteCategory);

routes.get("/gains", listGains);
routes.post("/gains", createGains);
routes.put("/gains/:id", updateGains);
routes.delete("/gains", deleteGains);

routes.get("/expenses", listExpenses);
routes.post("/expenses", createExpenses);
routes.put("/expenses/:id", updateExpenses);
routes.delete("/expenses", deleteExpenses);

module.exports = routes;
