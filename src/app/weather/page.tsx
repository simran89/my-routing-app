"use client"

import {useState} from"react";

export default function WeatherPage(){

    const [city, setCity] = useState("London");
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const API_KEY = "c99fa8a7e4eb54f036c8f927bf5ff571";

    const fetchWeather = async () =>{
        setLoading(true);

        try{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

            if(!res.ok)
                throw new Error("city not found");

            const data = await res.json();
            setWeather(data);
        }
        catch(error){
            console.error(error);
            setWeather(null);
        }
        setLoading(false);
    };

    return (<div>
        <h1>Weather APP</h1>
        <input type="text" value ={city} onChange ={(e) => setCity(e.target.value)} placeholder="enter city name"/>
        <button onClick={fetchWeather} disabled ={loading}>{loading ?"Fetching ..":"Get Weather"}</button>

        {weather && (<div>
            <h2> {weather.name}, {weather.sys?.country}</h2>
            <h2> Temperature  : {weather.main?.temp}</h2>
            <p> Condition :{weather.weather[0].description}</p>
        </div>)}
    </div>);

}