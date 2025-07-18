import SearchBox from "./searchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Hidden Leaf Village",
        feelsLike: 24.98,
        temp: 25.87,
        tempMin: 23.44,
        tempMax: 26.43,
        humidity: 50,
        weather: "broken cloud",
    });
    
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Arunabh</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
};