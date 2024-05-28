import React from "react";

import styles from './ForecastItem.module.scss';

const ForecastItem = ({high, low, iconURL, day}) =>{
    return(
        <div className={styles.forecast__item}>
            <h3>{day}</h3>
            <img src={`${iconURL}`} alt="weather icon"/>
            <div className={styles.high_low}>
                <p>{high}&deg;</p>
                <p>{low}&deg;</p>
            </div>
        </div>
    );
};

export default ForecastItem;