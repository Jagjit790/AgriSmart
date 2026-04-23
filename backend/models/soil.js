const mongoose = require("mongoose");

const soilSchema = new mongoose.Schema({
  crop: String,
  nitrogen: Number,
  phosphorus: Number,
  potassium: Number,
  ph: Number,
  recommendations: Array,
  date: String
});

module.exports = mongoose.model("Soil", soilSchema);