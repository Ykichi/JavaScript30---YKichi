let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    //清除已存在的計時器
    clearInterval(countDown);
    displayTimeLeft(seconds);
    displayEndTime(then);
    countDown = setInterval(function () {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countDown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds) {
    const mins = Math.floor(seconds / 60);
    const remainSec = seconds % 60;
    const display = `${mins}:${remainSec < 10 ? '0' : ''}${remainSec}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const mins = end.getMinutes();
    endTime.textContent = `Be Back At ${hour}:${mins < 10 ? '0' : ''}${mins}`;
}

function startTimer() {
    timer(this.dataset.time);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    timer(this.minutes.value * 60);
    this.reset();
});