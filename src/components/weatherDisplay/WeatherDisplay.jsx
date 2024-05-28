import React from "react";

import styles from "./WeatherDisplay.module.scss";

import TodayWeatherContainer from '../../containers/todayWeatherContainer';
import ForecastItem from "../forecastItem/ForecastItem";

const WeatherDisplay = () => {
    return(
        <div className={styles.weatherDisplay}>
            <h2>Delta, CO</h2>
            <TodayWeatherContainer />
            <div className={styles.forecast}>
                <ForecastItem 
                    high={50}
                    low={30}
                    iconURL={"https://openweathermap.org/img/wn/10d@2x.png"}
                    day="Tuesday"
                />
            </div>
        </div>
    );
};

export default WeatherDisplay;