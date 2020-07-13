const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  whatsapp: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  city: {
    type: String
  },
  uf: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("Users", UsersSchema);
