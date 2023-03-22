const WeatherController = {
  GetWeather: async (req, res) => {
    if (req.query.location === "") {
      return res.status(400).json({ message: "No location provided." });
    }

    const city = req.query.location;
    let weatherData;

    try {
      let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${process.env.API_KEY}`
      );

      weatherData = await response.json();
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "An error occurred." });
    }

    if (weatherData.cod !== 200) {
      return res.status(400).json({ message: weatherData.message });
    }

    return res.status(200).json({
      message: "ok",
      results: weatherData,
    });
  },
};

module.exports = WeatherController;
