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
const categorySelect = document.getElementById("fact-category");
const factCards = document.querySelectorAll(".fact-card");

function getRandomFact(category) {
  const pool = facts[category];
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

function showFacts(category) {
  factCards.forEach(card => {
    const cardCategory = card.getAttribute("data-category");
    if (category === "all" || category === cardCategory) {
      card.classList.remove("hidden");
      const factText = card.querySelector("p");
      factText.style.opacity = 0;
      setTimeout(() => {
        factText.textContent = getRandomFact(cardCategory);
        factText.style.opacity = 1;
      }, 400);
    } else {
      card.classList.add("hidden");
    }
  });
}

// Events
shuffleFactsBtn.addEventListener("click", () => showFacts(categorySelect.value));
categorySelect.addEventListener("change", () => showFacts(categorySelect.value));

// Initial load
showFacts("all");