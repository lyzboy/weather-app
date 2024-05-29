import React from "react";

import styles from './ForecastItem.module.scss';

const ForecastItem = ({high, low, iconURL, day}) =>{
    return(
        <div className={styles.forecast__item}>
            <h3>{day}</h3>
            <div className={styles.icon_container}>
                <img src={`${iconURL}`} alt="weather icon" className={styles.icon}/>
            </div>
            <div className={styles.high_low}>
                <p>{high}&deg;</p>
                <p>{low}&deg;</p>
            </div>
        </div>
    );
};

export default ForecastItem;