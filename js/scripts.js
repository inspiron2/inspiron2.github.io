navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

if (navigator.vibrate) {
	alert("ya");
	$("#vibrate-one-second").on("click", function () {
	alert("ya1");
		
		navigator.vibrate(200);
	});
	$("#vibrate-twice").on("click", function () {
	alert("ya2");
		
		navigator.vibrate([200, 100]);
	});
	$("#vibrate-long-time").on("click", function () {
		navigator.vibrate(2000);
	});

	$("#vibrate-off").on("click", function () {
	alert("ya4");
		
		navigator.vibrate(0);
	});
}








