window.onload = function() {
	GetClock();
	setInterval(GetClock, 1000);
	GetWeather();
	setInterval(GetWeather, 300000);
}