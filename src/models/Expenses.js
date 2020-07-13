const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ExpensesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  partials: {
    total: {
      type: String
    },
    current: {
      type: String
    }
  },
  startDate: {
    type: String
  },
  expensesType: {
    type: String,
    required: true
  },
  limitDate: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ExpensesSchema.plugin(mongoosePaginate);
mongoose.model("Expenses", ExpensesSchema);
