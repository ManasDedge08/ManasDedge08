// script.js

// Typing effect for terminal-style "About Me"
const aboutText = `Hello! I'm Manas, a passionate Computer Science Engineering student at DESPU. I enjoy exploring technology, solving problems, and constantly learning new things in the world of code, logic, and innovation.`;
let index = 0;

function typeWriter() {
  if (index < aboutText.length) {
    document.getElementById("about-text").innerHTML += aboutText.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

window.onload = typeWriter;

// Theme toggle functionality
const themeToggleButton = document.getElementById("theme-toggle");
let isDarkMode = true;

themeToggleButton.addEventListener("click", () => {
  if (isDarkMode) {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#333333";
    themeToggleButton.textContent = "🌙";
  } else {
    document.body.style.backgroundColor = "#0f172a";
    document.body.style.color = "#e2e8f0";
    themeToggleButton.textContent = "🌞";
  }
  isDarkMode = !isDarkMode;
});
