const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://singhjagjit3914_db_user:singhjagjit3914_db_user@cluster0.hdiojno.mongodb.net/agriDB");
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;