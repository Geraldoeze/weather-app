import React, {useState} from 'react'; 
import './Weather.css'
import { fetchApi, baseUrl } from '../utils/fetchApi';


const Weather = () => {
    const [ location, setLocation ] = useState();    
    const [ items, setItems ] = useState(false);
    const [ data, setData ] = useState([]);

    const InputChangeHandler = (e) => {
        e.preventDefault();
        setLocation(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(location)
      try {
        const results = await fetchApi(`${baseUrl}?location=${location}&format=json&u=c`)
        setItems(true)
        setData(results);
      } catch (err) {
        console.log(err);
    }
    } 

    // function check() {
    //     data.length > 0 ?  
    // }
   
    return ( 
        
        <div className='weather'>
            <h1 className="weather__title">Weather App.</h1>

            <form onSubmit={submitHandler}>
                <label htmlFor='city'>Enter a location for weather information</label>
                <input type='text' name='city' onChange={InputChangeHandler} />
            </form>

            {items && (

            <div className="weather__info">
               <a href="https:placeholder.com"><img src="https://via.placeholder.com/400" alt='img' /></a>
                <div>
                    {/* icon */}
                </div>

                <div>
                    <h5>City name: {data.location.city}</h5>
                    <h5>City countrty: {data.location.region} </h5>
                    <div>Weather condition</div>
                    <div>
                        <span>temp</span>
                        <span>&deg;C</span>
                    </div>
                </div>
            </div>) }
        </div>
     );
}
 
export default Weather;