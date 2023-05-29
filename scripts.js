let displayTime = document.querySelector('.displayTime');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 00;
let secs = 00;
let mins = 00;

let timer= null;

startBtn.addEventListener('click', function(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function(){
    clearInterval(timer);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timer);
    displayTime.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 00;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    

    displayTime.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}