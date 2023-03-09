import "./Weather.css";

const Weather = (props) => {
  if (props.renderWeather === true) {
    return (
      <div className="flex flex-col justify-center items-center content-center text-center">
        <div className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40 duration-300 hover:scale-105">
          <div className="flex justify-between">
            <div className="p-10 flex flex-col">
              <span
                data-cy="results-temp"
                className="text-6xl font-bold text-[#989898]"
              >
                {props.weatherData.main.temp}°C
              </span>
              <span data-cy="results-feelsLike" className="text-[#989898]">
                Feels Like: {props.weatherData.main.feels_like}
                °C
              </span>
            </div>
            <span class="material-symbols-outlined md-60">sunny</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Weather;
