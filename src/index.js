const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();
const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());

// app.get("/", (req, res) => {
//   Expenses.create({
//     name: "Nome",
//     category: "categoria",
//     partials: "12",
//     startDate: "",
//     expensesType: "Fixa",
//     limitDate: "04/05/2020"
//   });
//   return res.send("hello");
// });
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 8888);
