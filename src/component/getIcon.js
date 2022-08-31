
import cloudy from '../assets/cloudy.png';
import partly from '../assets/partly-cloudy.png';
import rain from '../assets/rainy-weather.png';
import snowy from '../assets/snowflake.png';
import sunny from '../assets/sun.png';
import thunder from '../assets/thunderstorm.png';


const icons = [cloudy, sunny, rain, snowy, partly, thunder];

export const getIcon = (weather) => {
  switch(weather) {
      case "Partly cloudy":
        return icons[0]
        
      case "Broken clouds":
        return icons[0]

      case "Sunny":
        return icons[1]
        
      case "Clear sky":
        return icons[1]
        
      case "Light rain":
        return icons[2]
        
      case "Moderate rain":
        return icons[2]
        
      case "Heavy rain":
        return icons[5]
        
      case "Overcast":
        return icons[4]
        
      case "Snow":
        return icons[3]
        
      case "Moderate or heavy rain with thunder":
        return icons[5]
        
      default: 
        return icons[4]
  }
}