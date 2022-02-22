//console.log("entered stopwatching js");

const timer = document.getElementById('stopwatch');

var min = 0;
var sec = 0;
var pause = true;

var startButton = document.getElementById("recordButton");
var stopButton = document.getElementById("stopButton");

var counter;

startButton.addEventListener("click", startCounting);
stopButton.addEventListener("click", stopCounting);



function timerCycle(){
    if (pause!=true){
        sec += 1;
        if(sec<10){ 
            timer.innerHTML = '0'+ min + ':0' + sec;
        }else{
            if (sec < 60){
                timer.innerHTML = '0'+ min + ':' + sec; 
            }else{
                sec = 0; 
                min += 1;
                timer.innerHTML = '0'+ min + ':0' + sec;
            }
        }
        //console.log(sec);
    }
}

function startCounting(){
    //console.log("started counting");
    pause = false;
    counter = setInterval(timerCycle, 1000);
    
}



function stopCounting() {
    clearInterval(counter);
    timer.innerHTML = '00:00';
    pause = true;
    sec = 0;
    min = 0;
}