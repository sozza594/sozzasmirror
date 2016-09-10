//function GetWeather() {
	//document.getElementById('weather').innerHTML = "weather";
//}

//var weatherData = {
//	city: document.querySelector("#city"),
//	weather: document.querySelector("#weather"),
//	temperature: document.querySelector("#temperature"),
//	temperatureValue: 0,
//	units: "°C"
//};

Weather.getCurrent("Kansas City", function(current) {
	console.log(
		["currently:", current.temperature(), "and", current.conditions()].join(" ")
	);
});

Weather.getForecast("Kansas City", function(forecast) {
	console.log("forecast high: " + forecast.high());
	console.log("forecast low: " + forecast.low());
});
