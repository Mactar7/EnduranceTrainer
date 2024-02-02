let totalTouchTime = 0;
let touchStartTime;

const timeDisplayElement = document.getElementById('timeDisplay');

document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchend', handleTouchEnd);

function handleTouchStart(event) {
  touchStartTime = Date.now();
}

function handleTouchEnd(event) {
  if (touchStartTime) {
    const touchEndTime = Date.now();
    const touchDuration = touchEndTime - touchStartTime;
    
    // If touch duration is more than 100ms, add it to the total touch time
    if (touchDuration > 100) {
      totalTouchTime += touchDuration;
      updateDisplay();
    }

    touchStartTime = null;
  }
}

function updateDisplay() {
  timeDisplayElement.innerText = (totalTouchTime / 1000).toFixed(2) + "s";
}
