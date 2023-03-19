var ramadanDate = new Date("Mar 23 2023").getTime();
var myfunc = setInterval(function() {
    // code goes here
}, 1000);
var now = new Date().getTime();
var timeleft = ramadanDate - now;
    
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
document.getElementById("days").innerHTML = days + " days "
document.getElementById("hours").innerHTML = hours + " hours " 
document.getElementById("mins").innerHTML = minutes + " minutes " 
document.getElementById("secs").innerHTML = seconds + " seconds"