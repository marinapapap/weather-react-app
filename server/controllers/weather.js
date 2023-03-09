const WeatherController = {
  GetWeather: async (req, res) => {
    const city = req.query.location;
    let weatherData;

    try {
      let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${process.env.API_KEY}`
      );

      weatherData = await response.json();
    } catch (e) {
      console.error(e);
    }

    res.status(200).json({
      message: "ok",
      results: weatherData,
    });
  },
};

module.exports = WeatherController;
