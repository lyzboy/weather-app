import React from "react";

import ForecastItem from "../../components/forecastItem/ForecastItem";

import styles from "./ForecastContainer.module.scss";

const ForecastContainer = () =>{
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