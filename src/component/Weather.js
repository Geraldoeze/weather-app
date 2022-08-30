import React from "react";
import './Weather.css';

const api = {
    key: "b7d22a0e223b2e67998ce6bd1a6c59f7",
    base: "https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {

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
    return ( 
        <main>
            <div className="search-box">
                <input
                  type='text'
                  className="search-bar"
                  placeholder="Search..."
                />
            </div>
            <div className="location-box">
                <div className="location">Naija, NGR</div>
                <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
                <div className="temp">
                    15&deg;C
                </div>
                <div className="weather">Sunny</div> 
            </div>
        </main>
     );
}
 
export default Weather;