navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

if (navigator.vibrate) {
	$("#vibrate-one-second").on("click", function () {
        navigator.vibrate(200);
    });
	$("#vibrate-twice").on("click", function () {
	    navigator.vibrate([200, 100]);
	});
	$("#vibrate-long-time").on("click", function () {
    navigator.vibrate(5000);
});

$("#vibrate-off").on("click", function () {
     navigator.vibrate(0);
 });
}








