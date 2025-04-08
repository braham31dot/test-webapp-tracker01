document.addEventListener('DOMContentLoaded', function() {
    const petData = [
    // 🐟 Freshwater Fish
    { id: 1, name: "Goldfish", temperature: "68-74°F", food: "Flakes, pellets, veggies", products: "Filter, air pump, gravel vacuum" },
    { id: 2, name: "Betta Fish", temperature: "78-80°F", food: "Pellets, bloodworms", products: "Heater, mirror (for enrichment), silk plants" },
    { id: 3, name: "Guppy", temperature: "72-82°F", food: "Flakes, micro pellets", products: "Live plants, sponge filter" },
    { id: 4, name: "Neon Tetra", temperature: "70-81°F", food: "Micropellets, flakes", products: "Heater, dark substrate, group of 6+" },
    { id: 5, name: "Molly", temperature: "72-78°F", food: "Algae flakes, blanched veggies", products: "Heater, large tank (15+ gal)" },
    { id: 6, name: "Platy", temperature: "70-77°F", food: "Flakes, daphnia", products: "Heater, floating plants" },
    { id: 7, name: "Zebra Danio", temperature: "64-74°F", food: "Flakes, baby brine shrimp", products: "Long tank, active space" },
    { id: 8, name: "Cory Catfish", temperature: "72-78°F", food: "Sinking pellets, wafers", products: "Soft sand substrate, hideouts" },
    { id: 9, name: "Otocinclus", temperature: "72-79°F", food: "Algae, zucchini", products: "Live plants, peaceful tank mates" },
    { id: 10, name: "Bristlenose Pleco", temperature: "73-81°F", food: "Algae wafers, cucumber", products: "Driftwood, caves" },

    // 🐌 Freshwater Snails
    { id: 11, name: "Mystery Snail", temperature: "68-82°F", food: "Algae, wafers, greens", products: "Calcium, lid (escape artist!)" },
    { id: 12, name: "Nerite Snail", temperature: "72-78°F", food: "Algae", products: "Hard surface to clean, won’t breed in FW" },
    { id: 13, name: "Ramshorn Snail", temperature: "65-80°F", food: "Leftover food, algae", products: "No special needs, but may overpopulate" },
    { id: 14, name: "Bladder Snail", temperature: "65-82°F", food: "Debris, algae", products: "Great for cleaning, tiny!" },

    // 🍤 Freshwater Shrimp
    { id: 15, name: "Cherry Shrimp", temperature: "72-78°F", food: "Algae, shrimp pellets", products: "Fine mesh filter, moss" },
    { id: 16, name: "Amano Shrimp", temperature: "70-80°F", food: "Algae, detritus", products: "Live plants, driftwood" },
    { id: 17, name: "Ghost Shrimp", temperature: "65-82°F", food: "Leftovers, shrimp wafers", products: "Hiding places, peaceful tank" },

    // 🐸 Freshwater Frogs
    { id: 18, name: "African Dwarf Frog", temperature: "72-80°F", food: "Bloodworms, frog pellets", products: "Shallow areas, smooth substrate" },
    { id: 19, name: "Clawed Frog (Albino)", temperature: "68-77°F", food: "Meaty pellets, frozen foods", products: "No tank mates (can be aggressive)" }
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
