
let counter = 0;
const counterBtn = document.getElementById('counterBtn');
const counterDisplay = document.getElementById('counter');

// TODO: Add event listener to counter button
counterBtn.addEventListener('click', function() {
  counter++;
  counterDisplay.textContent = counter;
  setCounterText();
});




