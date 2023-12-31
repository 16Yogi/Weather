import React, { useState } from "react";
import './Weather.scss'

const api = {
  key: "088281fb708d1e98e9bb47a9fc4bb4bc",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const searchPressed = () => {
    setLoading(true);
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="col py-3 text-center">
            <h2>Hey! Where are you going ?</h2>
            <h6>Check here weather Report...!</h6>
          </div>
          <div className="col-6 mx-auto text-center p-4" id="wheather-item">
            {/* Search Box */}
            <div class="input-group mb-3">
              <input type="text" className="form-control" onChange={(e) => setSearch(e.target.value)} placeholder="Enter Your Location" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <div className="input-group-append">
                <button onClick={searchPressed} className="btn-info text-white btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
              </div>
            </div>
            {/* <input
              type="text"
              placeholder="search..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchPressed} className="btn bg-light">
              Search
            </button> */}

            {/* Display Weather Data */}
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                {/* Location */}
                <p>{weather.name}</p>

                {/* Temperature F/C */}
                <p>{weather.main && weather.main.temp}°C</p>

                {/* Condition */}
                {weather.weather && (
                  <div className="col">
                    <p>{weather.weather[0].main}</p>
                    <p>({weather.weather[0].description})</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
