var img = document.getElementById("blink")

setInterval(function(){
    if (img.style.visibility === 'visible'){
        img.style.visibility = 'hidden';
    }else{
        img.style.visibility = 'visible'
    }
},500)


var remainingTime = new Date('February 28, 2025 00:00:00').getTime();

setInterval(function() {
    var now = new Date().getTime();
    var ramadan = remainingTime - now;

    var days = Math.floor(ramadan/ (1000 * 60 * 60 * 24));
    var hours = Math.floor((ramadan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((ramadan % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((ramadan % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (ramadan < 0) {
        clearInterval(intervalId);
        document.getElementById('time').innerHTML = "Rmadan Mubarak to all Muslims!";
    }
}, 1000);