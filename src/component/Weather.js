import React, {useState} from 'react'; 
import './Weather.css'
import { fetchApi, baseUrl } from '../utils/fetchApi';


const Weather = () => {
    const [ location, setLocation ] = useState();    
    const [ items, setItems ] = useState(false);

    const InputChangeHandler = (e) => {
        e.preventDefault();
        setLocation(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(location)
        
        const results = await fetchApi(`${baseUrl}?location=${location}&format=json&u=f`)
        console.log(results);
        setItems(true)
        return {
            props: {
                weather: results
            }
        }
    } 
   
    return ( 
        <div className='weather'>
            <h1 className="weather__title">Weather App.</h1>

            <form onSubmit={submitHandler}>
                <label htmlFor='city'>Enter a location for weather information</label>
                <input type='text' name='city' onChange={InputChangeHandler} />
            </form>
            {!items && (
            <div className="weather__info">
               <a href="https:placeholder.com"><img src="https://via.placeholder.com/400" alt='img' /></a>
                <div>
                    {/* icon */}
                </div>

                <div>
                    <h5>City name</h5>
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