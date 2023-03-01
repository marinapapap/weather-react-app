const WeatherController = {
    GetWeather: async (req, res) => {
        const city = "paris";

        return fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${process.env.API_KEY}`).then((response) => {
            return response.json();
        }).then((responseData) => {
            res.status(200).json({
                message: "ok",
                results: responseData
            })
        }).catch((error) => {
            console.error(error);
            });
    }
}

 module.exports = WeatherController;