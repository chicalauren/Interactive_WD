const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("popup");

openPopupButton.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

closePopupButton.addEventListener("click", () => {
  popup.classList.add("hidden");
});