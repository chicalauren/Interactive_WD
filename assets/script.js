
let counter = 0;
const counterBtn = document.getElementById('counterBtn');
const counterDisplay = document.getElementById('counter');

// TODO: Add event listener to counter button
counterBtn.addEventListener('click', function() {
  counter++;
  counterDisplay.textContent = counter;
  setCounterText();
});

// below code is for javascript sidebar site

const string = document.getElementById("string");
const number = document.getElementById("number");
const boolean = document.getElementById("boolean");
const bigint = document.getElementById("bignit");
const symbol = document.getElementById("symbol");
const null = document.getElementById("null");
const undefined = document.getElementById("undefined");

// Add click event listeners to each list item
document.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    alert(examples[item.id]);
  });
});
// end of javascript sidebar

