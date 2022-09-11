import React, { useState, useEffect } from "react";
import './Weather.css';
import axios from "axios";
import { getIcon } from "./getIcon";
import Modal from '../Modal/Modal';

const api = {
    key: "b7d22a0e223b2e67998ce6bd1a6c59f7",
    base: "https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});
    const [modal, setModal] = useState(false);

// initial render when the page loads UseEffect and localStorage
    useEffect(() => {
// fetch city stored locally and 
    }, [])

    const search = event => { 
        const city = query.trim()
        if (event.key === 'Enter') {
            axios.get(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
            .then( response => {
                console.log(response)
                if (response.status === 200) {
                    setWeather(response.data)
                    setQuery('')
                } else if (response.status === 404) {
                    return Promise.reject('error 404')
                } else {
                    return Promise.reject('error  unknown')
                }
            })
            .catch(error => {
                console.log('error is', error)});
            setModal(true)
            
           
        }
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July",
          "August", "September", "October", "November", "December"
        ];
        let days = ["Sunday", "Monday", "Tuesday", 
            "Wednesday", "Thursday", "Friday", "Saturday"
        ];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    
    function capitalize(str) {
      // converting first letter to uppercase
      const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
      return capitalized;
    }

    return ( 
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app' : 'app cold') : 'app' } >
        
          <main>
            <div className="search-box">
                <input
                  type='text'
                  className="search-bar"
                  placeholder="Search..."
                  onChange={e => {setQuery(e.target.value) }}
                  value={query}
                  onKeyPress={search}
                />
            </div>
            {modal && <Modal show />}
            {(typeof weather.main != "undefined") ? (
            
            <div>
                <div className="location-box">
                    <div className="location">{weather.name}, {weather.sys.country}</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                    <div className="temp">
                    {Math.round(weather.main.temp)}&deg;C
                    </div>
                    <div className="weather">{capitalize(weather.weather[0].main)}</div> 
                </div>
                <div className="weather-icons">
                    <img className="icon" src={getIcon(capitalize(weather.weather[0].description))} alt="icon" />
                </div>
            </div>
            
            ) : ('')}
            
          </main>
        </div>
     );
}
 
export default Weather;