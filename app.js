document.addEventListener("DOMContentLoaded", function() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    
    const dayOfWeekElement = document.getElementById("dayOfWeek");
    
    if (dayOfWeekElement) {
        dayOfWeekElement.textContent = daysOfWeek[currentDay];
    }
});

function displayCurrentUTCTime() {
    const currentUTCTimeMilliseconds = Date.now();
    const utcTimeElement = document.getElementById('utc-time');

    utcTimeElement.textContent = `Current UTC Time (Milliseconds): ${currentUTCTimeMilliseconds}`;
}

displayCurrentUTCTime();

