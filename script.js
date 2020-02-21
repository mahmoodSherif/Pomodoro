let time = Array.from(document.getElementById("time").querySelectorAll("button"));
let timer = document.getElementById("timestr");
let timeCount = 25*60;
timer.innerText="25:00";
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
let mode="pom";
let timeEx = null;
let audio =  new Audio("ys.wav");
time.forEach(btn=>{
    btn.addEventListener("click",()=>{
        stop();
        if(btn.id==="Pomodoro"){
            timer.innerText="25:00";
            timeCount = 25*60;
            mode="pom";
        }
        else if(btn.id==="shBreak"){
            timer.innerText="05:00";
            timeCount = 1*60;
            mode="short";
        }
        else{
            timer.innerText="10:00";
            timeCount = 10*60;
            mode="long"
        }
    })
});
function done(){
    stop();
    audio.play();
}
function showCurTime(){
    timeCount--;
    if(!timeCount){
        done();
        return;
    }
    let m = Math.floor(timeCount/60);
    let s = timeCount%60;m
    if(m < 10){
        m = '0'+m;
    }
    if(s < 10){
        s = '0'+s;
    }
    timer.innerText = `${m}:${s}`;
}
function start(){
    if(timeEx != null){
        return;
    }
    timeEx =  window.setInterval(showCurTime,1000);
}
function stop(){
    if(timeEx == null){
        return;
    }
    window.clearInterval(timeEx);
    timeEx = null;
}
function reset(){
    if(mode==="pom"){
        timeCount=25*60;
    }
    else if(mode==="short"){
        timeCount=5*60;
    }
    else{
        timeCount=10*60;
    }
    start();
}
startBtn.addEventListener("click",start);
resetBtn.addEventListener("click",reset);
stopBtn.addEventListener('click',stop);