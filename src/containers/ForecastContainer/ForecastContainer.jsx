import React, {useEffect, useState} from "react";

import { getWeekly } from "../../services/api";

import ForecastItem from "../../components/forecastItem/ForecastItem";

import styles from "./ForecastContainer.module.scss";

const ForecastContainer = ({lat, lon}) =>{

    const [forecast, setForecast] = useState([]);

// Suggested code may be subject to a license. Learn more: ~LicenseLog:4047757865.
    useEffect(() => {
        const fetchData = async () => {
            const response = await getWeekly(lat, lon);
            setForecast(response);
            console.log(response);
        };
        if (lat && lon) {
            fetchData();
        }
    }
    , [lat, lon]);

return (
    <div className={styles.forecast}>
        <ForecastItem 
            high={50}
            low={30}
            iconURL={"https://openweathermap.org/img/wn/10d@2x.png"}
            day="Tuesday"
        />
        <ForecastItem 
            high={50}
            low={30}
            iconURL={"https://openweathermap.org/img/wn/10d@2x.png"}
            day="Tuesday"
        />
        <ForecastItem 
            high={50}
            low={30}
            iconURL={"https://openweathermap.org/img/wn/10d@2x.png"}
            day="Tuesday"
        />
        <ForecastItem 
            high={50}
            low={30}
            iconURL={"https://openweathermap.org/img/wn/10d@2x.png"}
            day="Tuesday"
        />
        <ForecastItem 
            high={50}
            low={30}
            iconURL={"https://openweathermap.org/img/wn/10d@2x.png"}
            day="Tuesday"
        />
    </div>
);
};

export default ForecastContainer;