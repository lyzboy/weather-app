
export const getLatLong = async (searchString)=>{
    try {

        if(!searchString) throw new Error("No search string provided");
        let city = "";
        let state = " ";
        let zip = "";

        if(isNaN(searchString)){
            let split = searchString.split(",");
            city = split[0];
            state = split[1];
        } else zip = searchString;

        let data = null;

        if(zip !== ""){
            data = await fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${process.env.REACT_APP_API_KEY}`);
        } else {
            if(city === "") throw new Error("No city provided");
            data = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
        }

        let json = await data.json();
        return json;
    } catch (error) {
        console.log("There has been an error retrieving the coordinates: ", error);
    }
}


export const getDaily = async (lat, lon)=>{
    try {
        if(!lat || !lon) throw new Error("No lat or lon provided");
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`);
        const json = await data.json();
        console.log(json);
        return json;
    } catch (error) {
        console.log("There has been an error retrieving the daily forecast: ", error);
    }
}

export const getWeekly = async (lat, lon)=>{
    try {
        if(!lat || !lon) throw new Error("No lat or lon provided");
        const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`);
        
        const json = await data.json();
        console.log(json);
        return json;
    } catch (error) {
        console.log("There has been an error retrieving the weekly forecast: ", error);
    }
}

export const getHourly = async (lat, lon)=>{
    try {
        
    } catch (error) {
        
    }
}