const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("popup");

<<<<<<< HEAD
openPopupButton.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

closePopupButton.addEventListener("click", () => {
  popup.classList.add("hidden");
});
=======
let counter = 0;
const counterBtn = document.getElementById('counterBtn');
const counterDisplay = document.getElementById('counter');

// TODO: Add event listener to counter button
counterBtn.addEventListener('click', function() {
  counter++;
  counterDisplay.textContent = counter;
  setCounterText();
});




>>>>>>> d2cf37f8bdcfd8e015f95714c0fb6e855658b40f
