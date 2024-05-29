import React from "react";

import styles from "./WeatherDisplay.module.scss";

import TodayWeatherContainer from '../../containers/todayWeatherContainer';
import ForecastContainer from '../../containers/ForecastContainer';

const WeatherDisplay = () => {
    return(
        <div className={styles.weatherDisplay}>
            <h2>Delta, CO</h2>
            <TodayWeatherContainer />
            <ForecastContainer />
        </div>
    );
};

export default WeatherDisplay;