// Initialize counter
let counter = 0;

// Get elements once when the script loads
const counterBtn = document.getElementById('counterBtn');
const counterDisplay = document.getElementById('counter');

// Add click event listener to counter button
counterBtn.addEventListener('click', function() {
    // Increment counter
    counter++;
    // Update display
    counterDisplay.textContent = counter;
});

// datatypes buttons
const dataTypes = {
    string: document.getElementById("string"),
    number: document.getElementById("number"),
    boolean: document.getElementById("boolean"),
    bigint: document.getElementById("bigint"),
    symbol: document.getElementById("symbol"),
    nullType: document.getElementById("null"),
    undefined: document.getElementById("undefined")
};

const examples = {
    string: "Example of a string",
    number: "Example of a number",
    boolean: "Example of a boolean",
    bigint: "Example of a bigint",
    symbol: "Example of a symbol",
    null: "Example of null",
    undefined: "Example of undefined"
};

// Add click event listeners with error handling
document.querySelectorAll(".sidebar li").forEach(item => {
    item.addEventListener("click", () => {
        if (examples[item.id]) {
            alert(examples[item.id]);
        }
    });
});
// html basics code

function addContent() {
  const headingText = document.getElementById('headingInput').value;
  const paragraphText = document.getElementById('paragraphInput').value;
  const contentDiv = document.getElementById('dynamic-content');
  const headingColor = document.getElementById('headingColor').value;
const paragraphColor = document.getElementById('paragraphColor').value;

  if (headingText && paragraphText) {
      const heading = document.createElement('h1');
      heading.textContent = headingText;
      heading.style.color = headingColor;
      
      const paragraph = document.createElement('p');
      paragraph.textContent = paragraphText;
      paragraph.style.color = paragraphColor; 
      
      contentDiv.appendChild(heading);
      contentDiv.appendChild(paragraph);
      
      // Clear inputs
      document.getElementById('headingInput').value = '';
      document.getElementById('paragraphInput').value = '';
  }
}
// Get the theme toggle button
const modeToggle = document.getElementById('mode-toggle');

// Function to switch between light and dark mode
modeToggle.addEventListener('click', () => {
    // Toggle a class on the body element to switch themes
    document.body.classList.toggle('dark-mode');

    // Save the user's theme preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Check the saved theme preference from localStorage and apply it
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});