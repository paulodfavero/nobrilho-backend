const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  key: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("Category", CategorySchema);
