const searchinput = document.querySelector(".search input")
const searchbutton = document.querySelector(".search button")
const image = document.querySelector(".icon")

async function getWeather(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8631ac8dc1e22e6f32c877f1d0f3d1d0&units=metric`)
    if (res.status == 404) {
        document.querySelector('.error').style.display = "block"
    } else {
        document.querySelector(".error").style.display = "none"
    }
    const data = await res.json()
    document.querySelector("#celcius").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector("#city").innerHTML = data.name ;
    document.querySelector(".humidityP").innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector(".windS").innerHTML = Math.round(data.wind.speed) + " km/h";

    if (data.weather == [0].main =='Clouds') {
        image.src= "./image/sun.png"
    } else if (data.weather[0].main == "Haze") {
        image.src = "./image/sun.png"
    } else if (data.weather[0].main == "Drizzle") {
        image.src = "./image/sun.png"
    } else if (data.weather[0].main == "rain") {
        image.src = "./image/sun.png"
    } else if (data.weather[0].main == "Mist") {
        image.src = "./image/sun.png"
    }

    console.log(data);
}

searchbutton.addEventListener("click", () => {
    
    getWeather(searchinput.value)
    
})

