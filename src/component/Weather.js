import React from "react";

const api = {
    key: "b7d22a0e223b2e67998ce6bd1a6c59f7",
    base: "https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {
    return ( 
        <main>
            <div className="search-box">
                <input
                  type='text'
                  className="search-bar"
                  placeholder="Search..."
                />
            </div>
        </main>
     );
}
 
export default Weather;