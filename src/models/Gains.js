const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const GainsSchema = new mongoose.Schema({
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
  gainsType: {
    type: String
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

GainsSchema.plugin(mongoosePaginate);
mongoose.model("Gains", GainsSchema);
