import React, { useState } from "react";

const Search = ({ navigate }) => {
    const [location, setLocation] = useState("");

    const handleChange = (setFunction) => {
        return (event) => {
            setFunction(event.target.value);
        };
    };

    return(
    <div className="text-center content-center">
        <p className="text-lg">Check the weather in...</p>
        <input 
            id="location"
            data-cy="location-search"
            type="text"
            value={location}
            onChange={handleChange(setLocation)}
            className="border"
        />
    </div>
    );
}

export default Search;