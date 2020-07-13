const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017:financialapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
