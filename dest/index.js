"use strict";
let date_ob = new Date();
// current date
let date = ("0" + date_ob.getDate()).slice(-2);
// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// current year
let year = date_ob.getFullYear();
let dateDiv = document.getElementById('_date');
dateDiv.innerHTML = `${date}-${month}-${year}`;
function getCurrentTime() {
    const clockElement = document.getElementById('_time');
    clockElement.innerHTML = new Date().toLocaleTimeString();
}
setInterval(getCurrentTime, 1000);
const _countDown = document.getElementById('countdown');
const newDate = new Date();
let hour = newDate.getHours();
let minutes = newDate.getMinutes();
let time = minutes * 60;
const updateCountDown = () => {
    const _minutes = Math.floor(time / 60);
    let seconds = time % 60;
    _countDown.innerHTML = `${hour}:${_minutes}:${seconds}`;
    time--;
};
setInterval(updateCountDown, 1000);
