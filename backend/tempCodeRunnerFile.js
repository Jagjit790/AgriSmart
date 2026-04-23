const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// CONNECT DB
mongoose.connect("mongodb://127.0.0.1:27017/agriDB")
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch(err => {
    console.error("❌ MongoDB Connection Failed:", err.message);
  });
// ROUTES
const soilRoutes = require("./routes/soilRoutes");
app.use("/api/soil", soilRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));