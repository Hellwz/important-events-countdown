// JavaScript for countdown timer

const targetDate = new Date('2038-01-19T03:14:08Z').getTime(); // Set target here

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML elements
    document.getElementById('days').innerText = days;
    // document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    // document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    // document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

    // Also update the English version
    document.getElementById('days-en').innerText = days;
    document.getElementById('hours-en').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes-en').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds-en').innerText = seconds < 10 ? '0' + seconds : seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        // TODO
    }
}

// Update the countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();