
const triviaFacts = [
  "Goa has lost nearly 25% of its beaches to erosion in the last two decades.",
  "Plastic waste makes up over 60% of the litter found on Goa’s beaches.",
  "Mangroves act as natural barriers against coastal erosion and flooding.",
  "Overfishing in Goa has reduced traditional fish catch by 40% in some areas.",
  "Coral reefs near Goa are dying due to rising sea temperatures and pollution.",
  "Between 2010 and 2024, nearly 27% of Goa’s coastline has been lost to erosion.",
  "Goa lost around 15 hectares of coastal land to erosion between 2004 and 2016.",
  "12% of Goa’s coast has eroded since 1990, while only 20% has naturally expanded.",
  "Over half of Goa’s surveyed beaches are eroding without any natural sand gain.",
  "Goa’s beaches can contain over 200 g of litter per square meter during peak tourism.",
  "On average, Goa generated nearly 12 kg of plastic waste per person in 2019–20.",
  "Mangroves in Goa act as natural shields, reducing erosion and storing carbon efficiently."
];

const triviaText = document.getElementById("trivia-text");

function updateTrivia() {
  // Fade out
  triviaText.style.opacity = 0;

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * triviaFacts.length);
    triviaText.textContent = triviaFacts[randomIndex];

    // Fade in
    triviaText.style.opacity = 1;
  }, 500); // matches CSS transition time
}

updateTrivia();

// Change fact every 7 seconds
setInterval(updateTrivia, 7000);
