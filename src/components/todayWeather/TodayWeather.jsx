import React from "react";

import styles from './TodayWeather.module.scss';

const TodayWeather = ({temperature, precipitation, wind, humidity}) => {
return(
    <div className={styles.today}>
    <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon"/>
    <h2>{temperature}&deg;</h2>
    <div className={styles.today__data}>
        <p>Precipitation: {precipitation}%</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind: {wind} mph</p>
    </div>
</div>
);
};

export default TodayWeather;