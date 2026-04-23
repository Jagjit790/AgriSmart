const express = require("express");
const router = express.Router();

const {
  saveSoil,
  getSoil,
  deleteSoil,
  getSoilById
} = require("../controllers/soilController");

router.post("/save", saveSoil);
router.get("/soil", getSoil);        // ✅ all data
router.get("/soil/:id", getSoilById);
router.delete("/delete/:id", deleteSoil);

module.exports = router;