let hrEl = document.getElementById('hr');
let minEl = document.getElementById('min');
let secEl = document.getElementById('sec');
let milliSecEl = document.getElementById('milliSec');

let stopBtnEl = document.getElementById('stopBtn'); 
let startBtnEl = document.getElementById('startBtn');
let restartBtnEl = document.getElementById('restartBtn');
let lapBtnEl = document.getElementById('lapBtn');

let lapsContainerEl = document.getElementById('lapsContainer');

let timer = false;

startBtnEl.addEventListener('click', () => {
    timer = true;
    stopWatch();
    startBtnEl.disabled = true;
});


stopBtnEl.addEventListener('click', () => {
    timer = false;
    startBtnEl.disabled = false;
});

restartBtnEl.addEventListener('click', () => {
    timer = false;
    hrEl.innerHTML = '00';
    minEl.innerHTML = '00';
    secEl.innerHTML = '00';
    milliSecEl.innerHTML = '000';
    startBtnEl.disabled = false;
    sec = 0;
    minute = 0;
    hour = 0;
    count = 0;
});

let sec = 0;
let minute = 0;
let hour = 0;
let count = 0;

function stopWatch(){
    if (timer){
        count++
        if (count === 100){
            sec += 1;
            count = 0;
        }
        if (sec === 60){
            minute += 1;
            sec = 0;
        }
        if (minute === 60){
            hour += 1; 
            minute = 0;
            sec = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = sec;
        let countString = count

        hrString < 10 ? hrEl.innerHTML = `0${hrString}`:  hrEl.innerHTML = hrString;
        minString < 10 ? minEl.innerHTML = `0${minString}`: minEl.innerHTML = minString;
        secString < 10 ? secEl.innerHTML = `0${secString}`: secEl.innerHTML = secString;
        countString < 10 ? milliSecEl.innerHTML = `0${countString}`: milliSecEl.innerHTML = countString;
        
        setTimeout(stopWatch, 10);
    }
}

lapBtnEl.addEventListener('click', () => {
    let eachLapContainer = document.createElement('li');
    eachLapContainer.classList.add('each-lap-container');

    let lap = document.createElement('p');
    lap.classList.add('lap');
    lap.textContent = `${hrEl.innerHTML} : ${minEl.innerHTML} : ${secEl.innerHTML} : ${milliSecEl.innerHTML}`;

    let removeLapBtn = document.createElement('button');
    removeLapBtn.innerHTML = 'x';
    removeLapBtn.classList.add('remove-lap-btn');

    removeLapBtn.addEventListener('click', () => {
        lapsContainerEl.removeChild(eachLapContainer);
    })

    eachLapContainer.appendChild(lap);
    eachLapContainer.appendChild(removeLapBtn);
    lapsContainerEl.appendChild(eachLapContainer);

});