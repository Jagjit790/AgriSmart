const Soil = require("../models/soil");

// SAVE DATA
exports.saveSoil = async (req, res) => {
  try {
    console.log("DATA RECEIVED:", req.body); // 🔥 add

    const data = new Soil(req.body);
    await data.save();

    res.json(data);
  } catch (err) {
    console.log("ERROR:", err); // 🔥 VERY IMPORTANT
    res.status(500).json({ error: err.message });
  }
};

// GET ALL DATA
exports.getSoil = async (req, res) => {
  try {
    const data = await Soil.find().sort({ _id: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔥 ADD THIS (IMPORTANT)
exports.getSoilById = async (req, res) => {
  try {
    const data = await Soil.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE DATA
exports.deleteSoil = async (req, res) => {
  try {
    await Soil.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
