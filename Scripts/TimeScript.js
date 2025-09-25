// Set the date you want to count from
const startDate = new Date("2023-05-22T18:30:00");

// Get the HTML elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Function to update the timer
function updateTimer() {
    const now = new Date();
    const diff = now - startDate; // Difference in milliseconds

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update the HTML with the new values
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Run the function once on page load to avoid initial delay
updateTimer();