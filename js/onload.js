window.onload = function() {
	GetProximity();
	setInterval(GetProximity, 100);
	GetClock();
	setInterval(GetClock, 100);
	//GetWeather();
	//setInterval(GetWeather, 300000);
}