import React, {useContext} from "react";

import styles from "./WeatherDisplay.module.scss";

import { LocationContext } from "../../contexts/LocationsContext";

import TodayWeatherContainer from '../../containers/todayWeatherContainer';
import ForecastContainer from '../../containers/ForecastContainer';

const WeatherDisplay = () => {
    const { location } = useContext(LocationContext);

    console.log(location);

    return(
            <div className={styles.weatherDisplay}>
                {location.lat && location.lon ? (
                    <>
                    <h2>{location.name}{location.state && `, ${location.state}`}</h2>
                    <TodayWeatherContainer 
                        lat={location.lat}
                        lon={location.lon}
                    />
                    <ForecastContainer 
                        lat={location.lat}
                        lon={location.lon}       
                    />
                    </>
                    ) : (
                        <p>Please enter a location: City, State or Zip Code.</p>
                    )}
            </div>

    );
};

export default WeatherDisplay;