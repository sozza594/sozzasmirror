/*<script type = "text/javascript">*/
	var allDays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	var allMonths = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", 									"October", "November", "December");

	function GetClock() {
		var d = new Date();
		var day = d.getDay();
		var month = d.getMonth();
		var date = d.getDate();
		var hour = d.getHours();
		var mins = d.getMinutes();
		var end;
		
		if (hour == 0) {
			end = " AM";
			hour = 12;
		} else if (hour < 12) {
			end = " AM";
		} else if (hour == 12) {
			end = " PM";
		} else if (hour > 12) {
			end = " PM";
			hour -= 12;
		}

		if (mins <= 9) mins = "0" + mins;

		document.getElementById('date').innerHTML = allDays[day] + ", " + allMonths[month] + " " + date;
		document.getElementById('clock').innerHTML = hour + ":" + mins + end;
	}
	
	window.onload = function() {
		GetClock();
		setInterval(GetClock, 1000);
	}
/*</script>*/
