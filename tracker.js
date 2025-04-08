// tracker.js - 7-day tracker logic with local storage and error handling
const trackerDiv = document.getElementById("tracker");
const saveButton = document.getElementById("saveButton");
const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];
const petDataKey = "petTrackerData";

function loadTrackerData() {
    try {
        const storedData = JSON.parse(localStorage.getItem(petDataKey)) || {};
        return storedData;
    } catch (error) {
        console.error("Error loading tracker data:", error);
        return {}; // Return an empty object in case of error
    }
}

function saveTrackerData(data) {
    try {
        localStorage.setItem(petDataKey, JSON.stringify(data));
    } catch (error) {
        console.error("Error saving tracker data:", error);
    }
}

function renderTracker() {
    const trackerData = loadTrackerData();

    days.forEach(day => {
        const dayDiv = document.createElement("div");
        dayDiv.innerHTML = `
            <h3>${day}</h3>
            <label>Temperature:</label>
            <input type="text" id="temp-${day}" value="${trackerData[day]?.temp || ''}">
            <label>Food:</label>
            <input type="text" id="food-${day}" value="${trackerData[day]?.food || ''}">
            <label>Notes:</label>
            <textarea id="notes-${day}">${trackerData[day]?.notes || ''}</textarea>
        `;
        trackerDiv.appendChild(dayDiv);

        const tempInput = document.getElementById(`temp-${day}`);
        const foodInput = document.getElementById(`food-${day}`);
        const notesInput = document.getElementById(`notes-${day}`);

        tempInput.addEventListener("input", () => updateTrackerData(day, "temp", tempInput.value));
        foodInput.addEventListener("input", () => updateTrackerData(day, "food", foodInput.value));
        notesInput.addEventListener("input", () => updateTrackerData(day, "notes", notesInput.value));
    });
}

function updateTrackerData(day, field, value) {
    const trackerData = loadTrackerData();
    if (!trackerData[day]) {
        trackerData[day] = {};
    }
    trackerData[day][field] = value;
    saveTrackerData(trackerData);
}

saveButton.addEventListener("click", () => {
    const trackerData = {};
    days.forEach(day => {
        const temp = document.getElementById(`temp-${day}`).value;
        const food = document.getElementById(`food-${day}`).value;
        const notes = document.getElementById(`notes-${day}`).value;
        trackerData[day] = { temp, food, notes };
    });
    saveTrackerData(trackerData);
});

renderTracker();
