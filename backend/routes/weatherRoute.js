const express = require("express");
const router = express.Router();

router.get("/weather", async (req, res) => {
  try {
    const city = req.query.city;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );

    const data = await response.json();
    res.json(data);

  } catch (err) {
    res.status(500).json({ error: "Weather fetch failed" });
  }
});

module.exports = router;