import React, { useState } from "react";

const Search = ({ navigate }) => {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        let response = await fetch(`/weather?location=${location}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data;
        try {
            data = await response.json();
        } catch (e) {
            console.error('Failed to parse JSON: ', e);
            return;
        }

        setWeather(data.results);
    }; 

    const handleChange = (setFunction) => {
        return (event) => {
            setFunction(event.target.value);
        };
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
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
        <br />
        <h1 className="text-lg">Weather in {capitalizeFirstLetter(location)}</h1>
        <br />
        <div>
            <p>Temperature: {weather.temp}</p>
            <p>Feels Like: {weather.feels_like}</p>
        </div>
    </div>
    );
}

export default Search;