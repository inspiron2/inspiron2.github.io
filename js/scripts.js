alert("yes no");
$("#vibrate-one-second").on("click", function () {
    navigator.vibrate(1000);
});

document.querySelector("#vibrate-twice").addEventListener("click", function () {
    navigator.mozVibrate([200, 100, 200, 100]);
}, false);


document.querySelector("#vibrate-long-time").addEventListener("click", function () {
    navigator.mozVibrate(5000);
}, false);

document.querySelector("#vibrate-off").addEventListener("click", function () {
     navigator.mozVibrate(0);
 }, false);
