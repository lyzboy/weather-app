import React, {useEffect, useState} from "react";

import { getForecast } from "../../services/api";

import ForecastItem from "../../components/forecastItem/ForecastItem";

import styles from "./ForecastContainer.module.scss";

const ForecastContainer = ({lat, lon}) =>{

    const [forecast, setForecast] = useState([]);

// Suggested code may be subject to a license. Learn more: ~LicenseLog:4047757865.
    useEffect(() => {
        const fetchData = async () => {
            const response = await getForecast(lat, lon);
            console.log(response);
            setForecast(response);
        };
        if (lat && lon) {
            fetchData();
        }
    }
    , [lat, lon]);

    return (
        <div className={styles.forecast}>
            {forecast.map((elem) => {
                    return <ForecastItem 
                        high={elem.high}
                        low={elem.low}
                        iconURL={`https://openweathermap.org/img/wn/${elem.iconID}@2x.png`}
                        day={elem.day}
                    />
            })}
        </div>
    );
};

export default ForecastContainer;