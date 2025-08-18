const facts = {
  erosion: [
    "Between 2010 and 2024, nearly 27% of Goa’s coastline has been lost to erosion.",
    "Goa lost around 15 hectares of coastal land to erosion between 2004 and 2016.",
    "12% of Goa’s coast has eroded since 1990, while only 20% has naturally expanded."
  ],
  pollution: [
    "Goa’s beaches can contain over 200 g of litter per square meter during peak tourism.",
    "On average, Goa generated nearly 12 kg of plastic waste per person in 2019–20.",
    "Plastic waste makes up over 60% of the litter found on Goa’s beaches."
  ],
  conservation: [
    "Mangroves in Goa act as natural shields, reducing erosion and storing carbon efficiently.",
    "Coral reefs near Goa are dying due to rising sea temperatures and pollution.",
    "Community-driven clean-up drives have helped restore parts of Goa’s coastline."
  ]
};

const erosionFact = document.getElementById("erosion-fact");
const pollutionFact = document.getElementById("pollution-fact");
const conservationFact = document.getElementById("conservation-fact");
const shuffleFactsBtn = document.getElementById("shuffle-facts");
const factCategory = document.getElementById("fact-category");
const dropdownSelected = document.querySelector(".dropdown-selected");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const factCards = document.querySelectorAll(".fact-card");

function getRandomFact(category) {
  const pool = facts[category];
  if (!pool || pool.length === 0) {
    console.error(`No facts available for category: ${category}`);
    return "No facts available.";
  }
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

function showFacts(category) {
  console.log(`Showing facts for category: ${category}`);
  factCards.forEach(card => {
    const cardCategory = card.getAttribute("data-category");
    if (category === "all" || category === cardCategory) {
      card.classList.remove("hidden");
      const factText = card.querySelector("p");
      if (factText) {
        factText.style.opacity = 0;
        setTimeout(() => {
          factText.textContent = getRandomFact(cardCategory);
          factText.style.opacity = 1;
          console.log(`Updated fact for ${cardCategory}: ${factText.textContent}`);
        }, 400);
      } else {
        console.error(`No <p> element found in fact card for category: ${cardCategory}`);
      }
    } else {
      card.classList.add("hidden");
    }
  });
}

// Toggle dropdown menu
if (dropdownSelected && dropdownMenu) {
  dropdownSelected.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
    dropdownSelected.classList.toggle("active");
    console.log(`Dropdown toggled: ${dropdownMenu.classList.contains("active") ? "open" : "closed"}`);
  });
} else {
  console.error("Dropdown elements not found: dropdownSelected or dropdownMenu is null");
}

// Handle item selection
if (dropdownItems.length > 0) {
  dropdownItems.forEach(item => {
    item.addEventListener("click", () => {
      const value = item.getAttribute("data-value");
      if (value) {
        dropdownSelected.textContent = item.textContent;
        dropdownSelected.setAttribute("data-value", value);
        dropdownMenu.classList.remove("active");
        dropdownSelected.classList.remove("active");
        showFacts(value);
        console.log(`Selected category: ${value}`);
      } else {
        console.error(`No data-value found for dropdown item: ${item.textContent}`);
      }
    });
  });
} else {
  console.error("No dropdown items found");
}

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (factCategory && !factCategory.contains(e.target)) {
    dropdownMenu.classList.remove("active");
    dropdownSelected.classList.remove("active");
    console.log("Dropdown closed due to outside click");
  }
});

// Shuffle facts button
if (shuffleFactsBtn) {
  shuffleFactsBtn.addEventListener("click", () => {
    const category = dropdownSelected.getAttribute("data-value") || "all";
    showFacts(category);
    console.log(`Shuffling facts for category: ${category}`);
  });
} else {
  console.error("Shuffle button not found");
}

// Initial load
if (dropdownSelected) {
  dropdownSelected.setAttribute("data-value", "all");
  showFacts("all");
} else {
  console.error("Dropdown selected element not found");
}