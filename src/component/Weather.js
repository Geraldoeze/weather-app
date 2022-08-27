import './Weather.css'
import { fetchApi } from '../utils/fetchApi';
import { baseUrl } from '../utils/fetchApi';

const Weather = () => {
    

    const fetchCity = async () => {
        fetchApi(baseUrl)
    }   
    
   
    return ( 
        <div className='weather'>
            <h1 className="weather__title">Weather App.</h1>

            <form onSubmit={fetchCity}>
                <label htmlFor='city'>Enter a location for weather information</label>
                <input type='text' name='city' />
            </form>

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
            </div>
        </div>
     );
}
 
export default Weather;