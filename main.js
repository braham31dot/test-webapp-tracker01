document.addEventListener('DOMContentLoaded', function() {
    const petData = [
        { id: 1, name: "Goldfish", temperature: "68-74°F", food: "Flakes, pellets", products: "Filter, heater" },
        { id: 2, name: "Betta Fish", temperature: "78-80°F", food: "Pellets, brine shrimp", products: "Heater, decorations" },
        // Add more pet data here
    ];

    const petSelectionDiv = document.getElementById("petSelection");
    const nextButton = document.getElementById("nextButton");
    const readmeButton = document.getElementById("readmeButton");

    if (petSelectionDiv && nextButton && readmeButton) { // check if elements exist
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
                // Store selected pets in localStorage
                localStorage.setItem('selectedPets', JSON.stringify(selectedPets));
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
});

    readmeButton.addEventListener("click", () => {
        window.location.href = "readme.html";
    });

} else {
    console.error("one or more elements are missing from the page. please check index.html or info.html");
}
