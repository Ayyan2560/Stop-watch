let startTime = 0;
let timer = null;

function Start() {
if (timer !== null) return;

    

    startTime = moment();
    timer = setInterval(() => {
        let totalMs = moment().diff(startTime);
        let duration = moment.duration(totalMs);
        
        let hh = duration.hours().toString().padStart(2, '0');
        let mm = duration.minutes().toString().padStart(2, '0');
        let ss = duration.seconds().toString().padStart(2, '0');
        let ms = duration.milliseconds().toString().padStart(3, '0');
        
        document.querySelector("#time").innerHTML = `${hh}:${mm}:${ss}:${ms}`;
    }, 1);
}

function Stop() {
    clearInterval(timer);
    timer = null;
}

function Reset() {
    clearInterval(timer);
    timer = null;
    document.querySelector("#time").innerHTML = "00:00:00:000";
}

window.Start = Start;
window.Stop = Stop;
window.Reset = Reset;