// Get the elements from the DOM
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const millisecondsDisplay = document.querySelector('.milliseconds');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerId;

// Start the stopwatch
function start() {
  // Disable the start button
  startButton.disabled = true;
  // Start the timer
  timerId = setInterval(() => {
    milliseconds += 10;
    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    updateDisplay();
  }, 10);
}

// Stop the stopwatch
function stop() {
  // Enable the start button
  startButton.disabled = false;
  // Stop the timer
  clearInterval(timerId);
}

// Reset the stopwatch
function reset() {
  // Enable the start button
  startButton.disabled = false;
  // Stop the timer
  clearInterval(timerId);
  // Reset the time variables
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  // Update the display
  updateDisplay();
}

// Update the stopwatch display
function updateDisplay() {
  minutesDisplay.textContent = padTime(minutes);
  secondsDisplay.textContent = padTime(seconds);
  millisecondsDisplay.textContent = padTime(milliseconds, true);
}

// Pad the time with leading zeros
function padTime(time, isMilliseconds = false) {
  const timeString = isMilliseconds ? String(time).padStart(3, '0') : String(time).padStart(2, '0');
  return timeString;
}

// Add event listeners to the buttons
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
