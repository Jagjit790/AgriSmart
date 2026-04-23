const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ======================
// 🔥 MIDDLEWARE
// ======================
app.use(cors());
app.use(express.json());

// ======================
// 🔥 MONGODB CONNECTION
// ======================

require("dotenv").config({ path: __dirname + "/.env" });

console.log("MONGO_URI:", process.env.MONGO_URI); // debug

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));
// ======================
// 🔥 ROUTES
// ======================
const soilRoutes = require("./backend/routes/soilRoutes");
app.use("/api", soilRoutes);

// AUTH ROUTES
const authRoutes = require("./backend/routes/authRoutes");
app.use("/api/auth", authRoutes);


// weather routes
const weatherRoute = require("./backend/routes/weatherRoute");

app.use("/api", weatherRoute);


// ======================
// 🔥 SERVER START
// ======================


const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("Server running"));
