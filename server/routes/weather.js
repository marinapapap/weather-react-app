const express = require("express");
const router = express.Router();
const WeatherController = require("../controllers/weather");

router.get("/", WeatherController.GetWeather);

module.exports = router;