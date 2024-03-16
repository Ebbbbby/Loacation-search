import { useState, useEffect } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import { Weather } from "../interface/weather";
import "./style.css";
import brokenClouds from "../images/weather_few_clouds.webp";
import lightRain from "../images/lightrain-icon.png";
import overcast from "../images/ovacast.png";
import clearSky from "../images/clearSky.png";
import scattered from "../images/scattered-day-icon.png";
import night from "../images/moon.webp";
import { LiaCloudSunRainSolid } from "react-icons/lia";
import { FiWind } from "react-icons/fi";
import { API_KEY } from "./api";


const WeatherInfo = () => {
  const [city, setCity] = useState("London");
  const [data, setData] = useState<Weather | null>();
  const [loading, setLoading] = useState(false);
  const date = new Date();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const fetchWeatherData = async () => {
    if (!city) return
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        setData(response.data);
        setLoading(false);
        setCity("");
      } catch (error) {
        setLoading(false);

    }
  };

  useEffect(() => {
    fetchWeatherData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="weather_container">
        <div className="weather_control">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter location..."
            value={city}
            onChange={handleInputChange}
          />
          <button type="submit" onClick={() => fetchWeatherData()}>
            Get Report
          </button>

          <div className="image_container">
            {data?.weather[0].description === "broken clouds" ? (
              <img src={brokenClouds} alt="" className="images" />
            ) : data?.weather[0].description === "light rain" ? (
              <img src={lightRain} alt="" className="images" />
            ) : data?.weather[0].description === "overcast clouds" ? (
              <img src={overcast} alt="" className="images" />
            ) : data?.weather[0].description === "clear sky" ? (
              <img src={clearSky} alt="" className="images" />
            ) : data?.weather[0].description === "scattered clouds" ? (
              <img src={scattered} alt="" className="images" />
            ) : (
              <img src={night} alt="" className="images" />
            )}
          </div>
          <div>
            <p className="temp_size"> {data?.main.temp}°C</p>
            <p className="decription">{date.toLocaleString()}</p>
          </div>
          <hr className="horizontal" />

          <div className="weather_icon">
            <p>
              <LiaCloudSunRainSolid size={30} />
            </p>
            <p className="decription">{data?.weather[0].description}</p>
          </div>

          <div className="weather_icon">
            <p>
              <FiWind size={30} />
            </p>
            <p className="decription">Wind Speed :{data?.wind?.speed}</p>
          </div>
        </div>

        <div className="weather_data">

          {loading ? "loading..." : <WeatherData data={data} />}
        </div>
      </div>
    </>
  );
};
export default WeatherInfo;
