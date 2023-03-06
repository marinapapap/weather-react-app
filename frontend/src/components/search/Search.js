import React, { useState } from "react";
import Weather from "../weather/Weather";

const Search = ({ navigate }) => {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState("");
    const [locationAlert, setLocationAlert] = useState(false);
    const [renderWeather, setRenderWeather] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(location !== "") {
            let data;
            try {
                let response = await fetch(`/weather?location=${location}`);

                data = await response.json();
            } catch (e) {
                console.error(e);
                return;
            }
                setWeather(data.results);
                setRenderWeather(true);
        } else {
            setLocationAlert(true);
        }
    }; 

    const handleChange = (setFunction) => {
        return (event) => {
            setLocationAlert(false);
            setFunction(event.target.value);
        };
    };

    const handleLocationAlert = () => {
        if(locationAlert === true) {
            return "You need to enter a location...";
        }
    }

    return(
        <div className="text-center content-center">
            <p className="text-lg">Check the weather in...</p>
            <form onSubmit={handleSubmit}>
            <input 
                id="location"
                data-cy="location-search"
                type="text"
                value={location}
                onChange={handleChange(setLocation)}
                className="border"
            />
            <input
                data-cy="submit-location"
                type="submit"
                className="border"
            />
            </form>
            <p data-cy="location-alert">{handleLocationAlert()}</p>
            <br />
            <Weather temp={weather.temp} feelsLike={weather.feels_like} location={location} renderWeather={renderWeather}/>
        </div>
    );
}

export default Search;