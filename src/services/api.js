let canFetch = true;

export const getLatLong = async (searchString) => {
    try {
        if (!canFetch)
            throw new Error(
                "Cannot fetch data at this time, cooldown in effect."
            );
        if (!searchString) throw new Error("No search string provided");
        let city = "";
        let state = " ";
        let zip = "";

        if (isNaN(searchString)) {
            let split = searchString.split(",");
            city = split[0];
            state = split[1];
        } else zip = searchString;

        let data = null;

        if (zip !== "") {
            data = await fetch(
                `https://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${process.env.REACT_APP_API_KEY}`
            );
        } else {
            if (city === "") throw new Error("No city provided");
            data = await fetch(
                `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=${process.env.REACT_APP_API_KEY}`
            );
        }
        canFetch = false;
        setTimeout(() => {
            canFetch = true;
        }, 2000);

        let json = await data.json();
        return json;
    } catch (error) {
        console.log(
            "There has been an error retrieving the coordinates: ",
            error
        );
    }
};

export const getDaily = async (lat, lon) => {
    try {
        if (!lat || !lon) throw new Error("No lat or lon provided");
        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
        );
        const json = await data.json();
        return json;
    } catch (error) {
        console.log(
            "There has been an error retrieving the daily forecast: ",
            error
        );
    }
};

const getWeekly = async (lat, lon) => {
    try {
        if (!lat || !lon) throw new Error("No lat or lon provided");
        const data = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
        );

        const json = await data.json();
        return json;
    } catch (error) {
        console.log(
            "There has been an error retrieving the weekly forecast: ",
            error
        );
    }
};

function compareIconIds(current, next) {
    //if icon id has an "n" replace it with "d"
    if (current.includes("n")) current = current.replace("n", "d");
    //if icon id has an "n" replace it with "d"
    if (next.includes("n")) next = next.replace("n", "d");
    // Extract the numerical part and convert to integer
    const currentValue = parseInt(current.slice(0, -1), 10);
    const nextValue = parseInt(next.slice(0, -1), 10);
    return nextValue > currentValue ? next : current;
}

export const getForecast = async (lat, lon) => {
    try {
        if (!lat || !lon) throw new Error("No lat or lon provided");
        const json = await getWeekly(lat, lon);

        const hourlyList = json.list;

        const dailyList = [];

        const dayNames = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];

        // go through each item in the hourly list
        for (let i = 0; i < hourlyList.length; i++) {
            // get today's date
            const todayText = dayNames[new Date().getDay()];
            // get the day
            const dayText =
                dayNames[new Date(hourlyList[i].dt * 1000).getDay()];
            // if the dailyList array is empty, add the first day
            if (dailyList.length === 0) {
                if (dayText !== todayText) {
                    dailyList.push({
                        day: dayText,
                        high: Math.floor(hourlyList[i].main.temp_max),
                        low: Math.floor(hourlyList[i].main.temp_min),
                        iconID: hourlyList[i].weather[0].icon,
                    });
                }
            } else {
                // if the dailyList array is not empty, check if the day is the same as the last day
                if (dailyList[dailyList.length - 1].day !== dayText) {
                    // if the day is not the same as the last day, add a new day to the dailyList array
                    dailyList.push({
                        day: dayText,
                        high: Math.floor(hourlyList[i].main.temp_max),
                        low: Math.floor(hourlyList[i].main.temp_min),
                        iconID: hourlyList[i].weather[0].icon,
                    });
                } else {
                    // if the current item's temp_max is more than the last day's high, update the high
                    if (
                        hourlyList[i].main.temp_max >
                        dailyList[dailyList.length - 1].high
                    ) {
                        dailyList[dailyList.length - 1].high = Math.floor(
                            hourlyList[i].main.temp_max
                        );
                    }
                    // if the current item's temp_min is less than the last day's low, update the low
                    if (
                        hourlyList[i].main.temp_min <
                        dailyList[dailyList.length - 1].low
                    ) {
                        dailyList[dailyList.length - 1].low = Math.floor(
                            hourlyList[i].main.temp_min
                        );
                    }
                    dailyList[dailyList.length - 1].iconID = compareIconIds(
                        dailyList[dailyList.length - 1].iconID,
                        hourlyList[i].weather[0].icon
                    );
                }
            }
        }
        return dailyList;
    } catch (error) {
        console.log(error);
    }
};
