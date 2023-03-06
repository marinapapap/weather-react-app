const Weather = (props) => {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if(props.renderWeather === true) {
        return(
            <>
                <h1 className="text-lg">Weather in {capitalizeFirstLetter(props.location)}</h1>
                <div>
                    <p>Temperature: {props.temp}</p>
                    <p>Feels Like: {props.feelsLike}</p>
                </div>
            </>
        );
    }
}

export default Weather;