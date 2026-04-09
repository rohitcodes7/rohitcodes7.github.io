// Typing Effect
const typingText = document.getElementById("typing");

const words = [
  "Web Developer",
  "Python Programmer",
  "Frontend Developer",
  "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// Scroll Animation
const slideElements = document.querySelectorAll(".slide-up");

window.addEventListener("scroll", () => {
  slideElements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 80) {
      el.classList.add("show");
    }
  });
});

// Copy Email
function copyEmail() {
  const email = "rohitdas3933@gmail.com";
  navigator.clipboard.writeText(email);
  alert("Email copied: " + email);
}
