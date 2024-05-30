import React, {useState, useEffect} from "react";

import TodayWeather from '../../components/todayWeather';

import { getDaily } from "../../services/api";

import { kToF } from "../../utils/math";

const WeatherContainer = ({lat, lon}) => {
    const [temperature, setTemperature] = useState(0);
    const [wind, setWind] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [iconID, setIconID] = useState("");

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3506222148.
    useEffect(() => {
        const fetchWeather = async () => {
            const daily = await getDaily(lat, lon);
            setTemperature(kToF(daily.main.temp));
            setWind(daily.wind.speed);
            setHumidity(daily.main.humidity);
            setIconID(daily.weather[0].icon);
        };

        if (lat && lon) {
            fetchWeather();
        }
    } , [lat, lon]);

    return (
        <TodayWeather 
            temperature={temperature}
            wind={wind} 
            humidity={humidity}
            iconID={iconID}
        />
    )
};

export default WeatherContainer;