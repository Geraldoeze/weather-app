import React, {useState} from 'react'; 
import './Weather.css'
import { fetchApi, baseUrl } from '../utils/fetchApi';
import LoadingIndicator from '../UI/LoadingIndicator';

const Weather = () => {
    const [ location, setLocation ] = useState();    
    const [ items, setItems ] = useState(false);
    const [ data, setData ] = useState([]);
    const [ loader, setLoader ] = useState(false);

    const InputChangeHandler = (e) => {
        e.preventDefault();
        setLocation(e.target.value)
        setItems(false)
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoader(true);
      try {
        const results = await fetchApi(`${baseUrl}?location=${location}&format=json&u=c`)
        setData(results);
        setLoader(false)
        setItems(true)
      } catch (err) {
        console.log(err);
      }
      
    } 

    return ( 
        
        <div className='weather'>
            <h1 className="weather__title">Weather App.</h1>

            <form onSubmit={submitHandler}>
                <label htmlFor='city'>Enter city location for weather information</label>
                <input type='text' name='city' onChange={InputChangeHandler} />
            </form>

        { loader && <LoadingIndicator/> }
            {items && (

            <div className="weather__info">
               <a href="https:placeholder.com"><img src="https://via.placeholder.com/400" alt='img' /></a>
                <div>
                    {/* icon */}
                </div>

                <div>
                    <h5>{data.location.city}</h5>
                    <h5>{data.location.country} </h5>
                    <div>Condition</div>
                    <div>
                        <p>{data.current_observation.condition.text}</p>
                        <p>{data.current_observation.condition.temperature}&deg;C</p>
                    </div>
                </div>
            </div>) }
        </div>
     );
}
 
export default Weather;