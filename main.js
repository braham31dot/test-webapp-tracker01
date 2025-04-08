// main.js - Pet selection and info logic with error handling
const petData = [
    { id: 1, name: "Goldfish", temperature: "68-74°F", food: "Flakes, pellets", products: "Filter, heater" },
    { id: 2, name: "Betta Fish", temperature: "78-80°F", food: "Pellets, brine shrimp", products: "Heater, decorations" },
    // Add more pet data here
];

const petSelectionDiv = document.getElementById("petSelection");
const petInfoDiv = document.getElementById("petInfo");
const nextButton = document.getElementById("nextButton");
const readmeButton = document.getElementById("readmeButton");

if (petSelectionDiv && petInfoDiv && nextButton && readmeButton) { // check if elements exist
    petData.forEach(pet => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `pet-${pet.id}`;
        checkbox.value = pet.id;

        const label = document.createElement("label");
        label.htmlFor = `pet-${pet.id}`;
        label.textContent = pet.name;

        petSelectionDiv.appendChild(checkbox);
        petSelectionDiv.appendChild(label);
        petSelectionDiv.appendChild(document.createElement("br"));
    });

    nextButton.addEventListener("click", () => {
        const selectedPets = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => parseInt(checkbox.value));

        if (window.location.pathname.includes("index.html")) {
            //Display pet info on info page
            const selectedPetData = petData.filter(pet => selectedPets.includes(pet.id));
            petInfoDiv.innerHTML = selectedPetData.map(pet => `
                <h3>${pet.name}</h3>
                <p>Temperature: ${pet.temperature}</p>
                <p>Food: ${pet.food}</p>
                <p>Products: ${pet.products}</p>
            `).join("");
            window.location.href = "info.html";
        } else if (window.location.pathname.includes("info.html")) {
            window.location.href = "tracker.html";
        }
    });

    readmeButton.addEventListener("click", () => {
        window.location.href = "readme.html";
    });

} else {
    console.error("one or more elements are missing from the page. please check index.html or info.html");
}