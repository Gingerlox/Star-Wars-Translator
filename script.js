//this handles the translation
let two = document.getElementById("two");
document.getElementById("one").addEventListener("input", function () {
  two.value = this.value;
});


document.addEventListener("DOMContentLoaded", function() {
  const rands = [
    'May the Force be with you.',
    'I have a bad feeling about this.',
    'Hello there!',
    'Do. Or do not. There is no try.',
    'It’s a trap!',
    'I find your lack of faith disturbing.',
    'These aren’t the droids you’re looking for.',
    'That’s no moon.',
  ];

  const button = document.getElementById("quote_gen");
  const textareaOne = document.getElementById("one");
  const textareaTwo = document.getElementById("two");

  let lastQuoteIndex = -1;

  function fillTextarea() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * rands.length);
    } while (randomIndex === lastQuoteIndex);

    textareaOne.value = rands[randomIndex];
    lastQuoteIndex = randomIndex;

    // Update the second textarea whenever the first one is updated by the button
    syncTextareas();
  }

  function syncTextareas() {
    textareaTwo.value = textareaOne.value;
  }

  // Add click event listener to the button
  button.addEventListener("click", fillTextarea);

  // Add input event listener to the first textarea for manual typing
  textareaOne.addEventListener("input", syncTextareas);
});