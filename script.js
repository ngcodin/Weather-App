const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '54fb8017c7mshaed21ecde7cb6bbp19acf8jsna6d6262abdd9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city)=>{
	cityname.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
		
	console.log(response)
	
		// cloud_pct.innerHTML = response.cloud_pct
		temp2.innerHTML = response.temp
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity2.innerHTML = response.humidity
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed2.innerHTML = response.wind_speed
		wind_speed.innerHTML = response.wind_speed
		// wind_degrees2.innerHTML = response.wind_degrees
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

		if(city == "Shanghai"){
		s1.innerHTML = response.cloud_pct;
		s2.innerHTML = response.feels_like;
		s3.innerHTML = response.humidity;
		s4.innerHTML = response.max_temp
		s5.innerHTML = response.min_temp
		s6.innerHTML = response.sunrise
		s7.innerHTML = response.sunset
		s8.innerHTML = response.temp
		s9.innerHTML = response.wind_degrees
		s10.innerHTML = response.wind_speed
		}

		else if(city == "Boston"){
		b1.innerHTML = response.cloud_pct;
		b2.innerHTML = response.feels_like;
		b3.innerHTML = response.humidity;
		b4.innerHTML = response.max_temp
		b5.innerHTML = response.min_temp
		b6.innerHTML = response.sunrise
		b7.innerHTML = response.sunset
		b8.innerHTML = response.temp
		b9.innerHTML = response.wind_degrees
		b10.innerHTML = response.wind_speed
		}


		else if(city == "Lucknow"){
		l1.innerHTML = response.cloud_pct;
		l2.innerHTML = response.feels_like;
		l3.innerHTML = response.humidity;
		l4.innerHTML = response.max_temp
		l5.innerHTML = response.min_temp
		l6.innerHTML = response.sunrise
		l7.innerHTML = response.sunset
		l8.innerHTML = response.temp
		l9.innerHTML = response.wind_degrees
		l10.innerHTML = response.wind_speed
		}

		else if(city == "Kolkata"){
		k1.innerHTML = response.cloud_pct;
		k2.innerHTML = response.feels_like;
		k3.innerHTML = response.humidity;
		k4.innerHTML = response.max_temp
		k5.innerHTML = response.min_temp
		k6.innerHTML = response.sunrise
		k7.innerHTML = response.sunset
		k8.innerHTML = response.temp
		k9.innerHTML = response.wind_degrees
		k10.innerHTML = response.wind_speed
		}
	  })

	.catch(err => console.error(err));
}

city.addEventListener("keypress",function(e){
	if(e.key === "Enter"){
		submit.click();
	}
})

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(city.value)
})

getweather("Delhi");


let apiKey = "c7cfbff3b8eeb6d96e17a1c4f1ca0edb";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	var data = await response.json();

	console.log(data);

	if(data.weather[0].main == 'Clouds'){
		weatherIcon.src = "images/clouds.png";
	}

	else if(data.weather[0].main == 'Clear'){
		weatherIcon.src = "images/clear.png";
	}

	else if(data.weather[0].main == 'Rain'){
		weatherIcon.src = "images/rain.png";
	}

	else if(data.weather[0].main == 'Drizzle'){
		weatherIcon.src = "images/drizzle.png";
	}

	else if(data.weather[0].main == 'Mist'){
		weatherIcon.src = "images/mist.png";
	}

	else if(data.weather[0].main == 'Haze'){
		weatherIcon.src = "images/haze.png";
	}

}

city.addEventListener("keypress",function(e){
	if(e.key === "Enter"){
		submit.click();
	}
})

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	checkWeather(city.value);
})


checkWeather("Delhi");