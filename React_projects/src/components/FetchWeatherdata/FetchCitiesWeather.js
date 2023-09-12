import { useEffect, useState } from "react";

const getWeatherData = (city) => {
    return fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8dee0dbf17f272e4fefa8df470a7aa56&units=metric`
    )
        .then((response) => response.json())
        .then((data) => {
            const { temp, temp_max, temp_min } = data.main;
            const { description } = data.weather[0];
            return {
                temp,
                temp_max,
                temp_min,
                description,
            };
        });
};



const getWeatherDataAsync = async (city) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8dee0dbf17f272e4fefa8df470a7aa56&units=metric`
    );
    const data = await response.json();
    const { temp, temp_max, temp_min } = data.main;
    const { description } = data.weather[0];
    return {
        temp,
        temp_max,
        temp_min,
        description,
    };
};

const cities = ['Hyderabad', 'Rajahmundry', 'Lucknow', 'Raipur'];

/**
 * 1. Use the above cities variable to populate the dropdown (select) options.
 * 2. When user selects a city from the dropdown, use the above getWeatherData function to get the latest
 * weather information and show it below the dropdown.
 *
 */
export default function FetchCitiesWeather() {
    const [city, setCity] = useState(cities[0]);
    const [weather, setWeather] = useState({
        temp: '',
        temp_max: '',
        temp_min: '',
        description: '',
    });

    const store = async () => {
        const getData = await getWeatherData(city);
        setWeather(getData);
        console.log(getData);
    };

    useEffect(() => {
        getWeatherData(city);
        store();
    }, [city]);

    const onSelect = (e) => {
        let val = e.target.value;
        setCity(val);
    };

    return (
        <div>
            <select onChange={ onSelect }>
                <option>Hyderabad</option>
                <option>Rajahmundry</option>
                <option>Lucknow</option>
                <option>Raipur</option>
            </select>
            <br />
            <p>{ ` ${city} ${weather.description || 'Scattered clouds'}, ${weather.temp
                }(Max ${weather.temp_max}, Min ${weather.temp_min})` }</p>
        </div>
    );
}