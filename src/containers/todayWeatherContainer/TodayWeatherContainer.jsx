import React, {useState} from "react";

import TodayWeather from '../../components/todayWeather';

const WeatherContainer = () => {
    const [temperature, setTemperature] = useState(0);
    const [precipitation, setPrecipitation] = useState(0);
    const [wind, setWind] = useState(0);
    const [humidity, setHumidity] = useState(0);

    return (
        <TodayWeather 
            temperature={temperature}
            precipitation={precipitation}
            wind={wind} 
            humidity={humidity}
        />
    )
};

export default WeatherContainer;