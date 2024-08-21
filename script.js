//this handles the translation
let two = document.getElementById("two");
document.getElementById("one").addEventListener("input", function () {
  two.value = this.value;
});

//this handles teh random quote gen
const rands = [
  'Shug is a lil botty hole man haha',
  'Sperk is a god damn sun burnt wee idiot hahahaha',
  'Reubs spend a grand on a coffee machine, what a mug',
  'Rosscoll looks like a hefty wee mexican',
  'wee gerbil baxters brother likes to assault people',
  'ryan sweey + stairs = no go lol (stop kissing dudes)',
  'jambo magreg is ugly hairy, not just hairy paha',
  'luke lamont is an actual fucking bufoon man hahahah',
];

const generateButton = document.getElementById("quote_gen");
const quoteElement = document.getElementById("one");

generateButton.addEventListener("click", generateRandomQuote);

function generateRandomQuote() {
 const randomIndex = Math.floor(Math.random() * rands.length);
 quoteElement.value = rands[randomIndex];
 const event = new Event('input', { bubbles: true });
 one.dispatchEvent(event);
}