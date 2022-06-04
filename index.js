

const day = document.getElementById("days");
const hour = document.getElementById("hours");
const min = document.getElementById("mins");
const sec = document.getElementById("secs");

const currentYear = new Date().getFullYear();
const newYearDate = new Date(`1 jan ${currentYear + 1}`);

function countDown() {
    const currDate = new Date();

    const totalSecs = (newYearDate - currDate) / 1000;

    const days = Math.floor(totalSecs / 3600 / 24);

    const hours = Math.floor((totalSecs / 3600) % 24);

    const mins = Math.floor((totalSecs / 60) % 60);

    const secs = Math.floor(totalSecs % 60);

    day.innerHTML = days;
    hour.innerHTML = formatTime(hours);
    min.innerHTML = formatTime(mins);
    sec.innerHTML = formatTime(secs);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);

