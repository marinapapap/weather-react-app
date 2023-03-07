const Weather = (props) => {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if(props.renderWeather === true) {
        return(
            <>
                <h1 data-cy="results-header" className="text-lg">Weather in {capitalizeFirstLetter(props.location)}</h1>
                <div>
                    <p data-cy="results-temp">Temperature: {props.temp}°C</p>
                    <p data-cy="results-feelsLike">Feels Like: {props.feelsLike}°C</p>
                </div>
            </>
        );
    }
}

export default Weather;