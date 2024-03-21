const apikey = "3d7946e80b162192a7026fbf8728c229"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
//"https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=3d7946e80b162192a7026fbf8728c229"


async function checkWeather(city)
{
    try {
        const response = await fetch(apiURL+city+'&appid='+apikey)
        var data = await response.json()
    
        console.log(data)
    
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+'°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity+' %';
        document.querySelector(".wind").innerHTML = data.wind.speed +' Km/hr';
        document.querySelector(".city").innerHTML = data.name
    
        if (data.weather[0].main == "Mist")
        {
            document.getElementById("rain").src = "imag/windy.png"  
        }
        else if(data.weather[0].main == "Haze")
        {
            document.getElementById("rain").src = "imag/windy.png" 
        }
        else if(data.weather[0].main == "Clear" || data.weather[0].main == "Sunny")
        {
            document.getElementById("rain").src = "imag/sunny.png" 
        }
        else if(data.weather[0].main == "Rain" || data.weather[0].main == "Thunderstorn")
        {
            document.getElementById("rain").src = "imag/thunderstorm.png" 
        }
        else if(data.weather[0].main == "Snow")
        {
            document.getElementById("rain").src = "imag/snow.png" 
        }
        else if(data.weather[0].main == "Clouds")
        {
            document.getElementById("rain").src = "imag/clouds.png" 
        }
        else if(data.weather[0].main == "Drizzle")
        {
            document.getElementById("rain").src = "imag/cloudy_rain.png" 
        }
    
        document.getElementById("weather").style.visibility = 'visible'
    } catch (error) 
    {
        alert(data.message)
    }
}





