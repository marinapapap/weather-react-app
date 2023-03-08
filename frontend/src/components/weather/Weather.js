const Weather = (props) => {
  if (props.renderWeather === true) {
    return (
      <div className="flex flex-col justify-center items-center content-center text-center">
        <div className="overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl bg-opacity-40">
          <div className="p-10">
            <p data-cy="results-temp">Temperature: {props.temp}°C</p>
            <p data-cy="results-feelsLike">Feels Like: {props.feelsLike}°C</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Weather;
