document.getElementById("search-button").addEventListener("click", async function() {
    const characterName = document.getElementById("character-name").value.trim();
    if (characterName === "") {
        alert("Please enter a character's name.");
        return;
    }

    // Fetch character outfits from an API (this would be your back-end or external API)
    const outfitData = await fetchOutfits(characterName);
    displayOutfits(outfitData);
});

// Function to fetch outfits from a database or API
async function fetchOutfits(characterName) {
    try {
        // Here you would make an API call or use an existing dataset.
        // This is a mock response.
        return [
            {
                name: "Red Hoodie",
                image: "https://example.com/hoodie.jpg",
                store: "Store A",
                link: "https://storeA.com/hoodie"
            },
            {
                name: "Blue Jeans",
                image: "https://example.com/jeans.jpg",
                store: "Store B",
                link: "https://storeB.com/jeans"
            },
            {
                name: "Black Sneakers",
                image: "https://example.com/sneakers.jpg",
                store: "Store C",
                link: "https://storeC.com/sneakers"
            }
        ];
    } catch (error) {
        console.error("Error fetching outfit data:", error);
        return [];
    }
}

// Function to display outfits in the UI
function displayOutfits(outfits) {
    const outfitContainer = document.getElementById("outfit-results");
    outfitContainer.innerHTML = "";  // Clear any previous results

    if (outfits.length === 0) {
        outfitContainer.innerHTML = "<p>No outfits found. Try another character!</p>";
        return;
    }

    outfits.forEach(outfit => {
        const outfitDiv = document.createElement("div");
        outfitDiv.classList.add("outfit-item");

        outfitDiv.innerHTML = `
            <img src="${outfit.image}" alt="${outfit.name}">
            <h3>${outfit.name}</h3>
            <a href="${outfit.link}" target="_blank">Buy Now at ${outfit.store}</a>
        `;
        
        outfitContainer.appendChild(outfitDiv);
    });
}
