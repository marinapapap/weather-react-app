const WeatherController = {
    GetWeather: async (req, res) => {
        const city = req.query.location;

        const weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${process.env.API_KEY}`).then((response) => {
            return response.json();
        }).then((responseData) => {
            return responseData;
        }).catch((error) => {
            console.error(error);
            });

        res.status(200).json({
            message: "ok",
            results: weatherData
        })
    }
}

 module.exports = WeatherController;