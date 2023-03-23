import React, { useState } from "react";
import Weather from "../weather/Weather";

const Search = ({ navigate }) => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [locationAlert, setLocationAlert] = useState(false);
  const [renderWeather, setRenderWeather] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let data;
    try {
      let response = await fetch(`/weather?location=${location}`);
      if (response.status === 400) {
        setLocationAlert(true);
        return;
      }
      data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
      setLocationAlert(true);
      return;
    }
    setWeather(data.results);
    setRenderWeather(true);
  };

  const handleChange = (setFunction) => {
    return (event) => {
      setLocationAlert(false);
      setFunction(event.target.value);
    };
  };

  const handleLocationAlert = () => {
    if (locationAlert === true) {
      return "Oops, you need to enter a valid location...";
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center content-center text-center">
      <div className="mr-16 ml-16 mb-10">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight border-8 border-white text-white md:text-5xl lg:text-6xl p-5 duration-300 hover:scale-105">
          Check the weather in... {capitalizeFirstLetter(location)}
        </h1>
      </div>
      <form className="mb-10 flex" onSubmit={handleSubmit}>
        <input
          id="location"
          data-cy="location-search"
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={handleChange(setLocation)}
          className="shadow appearance-none border border-[#2FFF61] rounded-l-lg w-full py-2 px-3 text-[#989898] leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          data-cy="submit-location"
          type="submit"
          className="bg-white hover:bg-[#2FFF61] text-[#989898] hover:text-white font-semibold py-2 px-4 border-t-[1px] border-b-[1px] border-r-[1px] border-[#2FFF61] rounded-r-lg shadow"
        />
      </form>
      <p data-cy="location-alert">{handleLocationAlert()}</p>
      <br />
      <Weather weatherData={weather} renderWeather={renderWeather} />
    </div>
  );
};

export default Search;
