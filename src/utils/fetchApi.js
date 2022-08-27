import axios from "axios";
export const baseUrl = 'https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f'


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'a530f10c8fmsh5910df1ab63741bp1482eajsnb7d8f77dba88',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    })
        
    return( data, console.log(data));
} 


    
// fetch('htt
// ps://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f', options)
// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));
// }
