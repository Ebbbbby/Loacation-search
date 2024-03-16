import { Weather } from "../interface/weather";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { FiWind } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { TbTemperatureCelsius } from "react-icons/tb";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { GiAtomicSlashes } from "react-icons/gi";
import { MdOutlineDisabledVisible } from "react-icons/md";
import "./style.css";

type Props = {
  data: Weather | null | undefined;
};

const WeatherData = ({ data }: Props) => {
  function convertUnixTimestampToTime(timestamp: number): string {
    const milliseconds = timestamp * 1000;
    const date = new Date(milliseconds);
    const timeString = date.toLocaleTimeString();
    return timeString;
  }
  function calculateVisibility(visibility: number): number {
    const visibilityInKilometers = visibility / 1000;
    return visibilityInKilometers;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  return (
    <div>
      <h2 className="name">{data?.name}</h2>
      <div className="weather_prop">
        <div className="content">
          <h3>Temperature </h3>
          <div className="child">
            <p>{data?.main?.temp}°C</p>
            <TbTemperatureCelsius size={35} className="weather_icon" />
          </div>
        </div>
        <div className="content">
          <h3>Wind Speed</h3>
          <div className="child">
            <p>{data.wind.speed}m/s</p>
            <FiWind size={30} className="weather_icon" color="#40e0d0" />
          </div>
        </div>

        <div className="content">
          <h3>Humidity</h3>
          <div className="child">
            <p> {data?.main?.humidity} %</p>
            <WiHumidity size={35} className="weather_icon" color="#40e0d0" />
          </div>
        </div>
      </div>
      <div className="weather_prop">
        <div className="content">
          <h3>Feels like </h3>
          <div className="child">
            <p> {data.main.feels_like}°C</p>
            <FaTemperatureThreeQuarters size={35} className="weather_icon" />
          </div>
        </div>
        <div className="content">
          <h3>Sunrise</h3>
          <div className="child">
            <p> {convertUnixTimestampToTime(data?.sys?.sunrise)}</p>
            <WiSunrise size={35} className="weather_icon" />
          </div>
        </div>
        <div className="content">
          <h3>Sunset</h3>
          <div className="child">
            <p> {convertUnixTimestampToTime(data?.sys?.sunset)}</p>
            <WiSunset size={35} className="weather_icon" />
          </div>
        </div>
      </div>
      <div className="weather_prop">
        <div className="content">
          <h3>Pressure</h3>
          <div className="child">
            <p> {data.main.pressure} mb</p>
            <GiAtomicSlashes
              size={35}
              className="weather_icon"
              color="#40e0d0"
            />
          </div>
        </div>
        <div className="content">
          <h3>Description </h3>
          <p>{data.weather[0].main}</p>
        </div>
        <div className="content">
          <h3>Visibility </h3>
          <div className="child">
            <p>{calculateVisibility(data.visibility)} km</p>
            <MdOutlineDisabledVisible size={35} className="weather_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
