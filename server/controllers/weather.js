 const WeatherController = {
    GetWeather: async (req, res) => {
        res.status(200).json({
            message: "route test"
        })
    }
 }

 module.exports = WeatherController;