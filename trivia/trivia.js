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

const factText = document.getElementById("fact-text");
const newFactBtn = document.getElementById("new-fact");
const categorySelect = document.getElementById("fact-category");

function getRandomFact(category) {
  let pool = [];

  if (category === "all") {
    pool = [...facts.erosion, ...facts.pollution, ...facts.conservation];
  } else {
    pool = facts[category];
  }

  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

function showFact() {
  const category = categorySelect.value;
  const fact = getRandomFact(category);

  // Fade effect
  factText.style.opacity = 0;
  setTimeout(() => {
    factText.textContent = fact;
    factText.style.opacity = 1;
  }, 400);
}

// Events
newFactBtn.addEventListener("click", showFact);
categorySelect.addEventListener("change", showFact);

// Initial load
showFact();
