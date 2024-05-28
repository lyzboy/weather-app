import React from "react";

import styles from "./WeatherDisplay.module.scss";

const WeatherDisplay = () => {
    return(
        <div className={styles.weatherDisplay}>
            <h2>Delta, CO</h2>
            <div className={styles.today}>
                <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon"/>
                <h2>50&deg;</h2>
                <div className={styles.today__data}>
                    <p>Precipitation: 15%</p>
                    <p>Humidity: 10%</p>
                    <p>Wind: 8 mph</p>
                </div>
            </div>
            <div className={styles.forecast}>
                <div className={styles.forecast__item}>
                    <h3>Tue</h3>
                    <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon"/>
                    <div className={styles.high_low}>
                        <p>50&deg;</p>
                        <p>40&deg;</p>
                    </div>
                </div>
                <div className={styles.forecast__item}>
                    <h3>Tue</h3>
                    <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon"/>
                    <div className={styles.high_low}>
                        <p>50&deg;</p>
                        <p>40&deg;</p>
                    </div>
                </div>
                <div className={styles.forecast__item}>
                    <h3>Tue</h3>
                    <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon"/>
                    <div className={styles.high_low}>
                        <p>50&deg;</p>
                        <p>40&deg;</p>
                    </div>
                </div>
                <div className={styles.forecast__item}>
                    <h3>Tue</h3>
                    <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon"/>
                    <div className={styles.high_low}>
                        <p>50&deg;</p>
                        <p>40&deg;</p>
                    </div>
                </div>
                <div className={styles.forecast__item}>
                    <h3>Tue</h3>
                    <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon"/>
                    <div className={styles.high_low}>
                        <p>50&deg;</p>
                        <p>40&deg;</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherDisplay;