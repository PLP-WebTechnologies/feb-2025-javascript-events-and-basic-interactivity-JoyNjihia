// Button click
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button was clicked!");
});

// Secret double-click
document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("You found the secret double-click action!");
});

// Hover effects
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.backgroundColor = "#a7ffeb";
});
hoverBox.addEventListener("mouseleave", () => {
  hoverBox.style.backgroundColor = "lightgray";
});

// Keypress detection
document.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Change button text and color
const changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click", () => {
  changeBtn.textContent = "Changed!";
  changeBtn.style.backgroundColor = "#00c853";
});

// Slideshow
const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3"
];
let imgIndex = 0;
setInterval(() => {
  imgIndex = (imgIndex + 1) % images.length;
  document.getElementById("slideshow").src = images[imgIndex];
}, 2500);

// Tabs
function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.style.display = "none";
  });
  document.getElementById(tabId).style.display = "block";
}

// Form validation
const form = document.getElementById("signupForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  const password = form.password.value;

  if (!email.includes("@")) {
    feedback.textContent = "Please enter a valid email address.";
  } else if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters long.";
  } else {
    feedback.style.color = "#00c853";
    feedback.textContent = "Form submitted successfully!";
  }
});

// Real-time password feedback
form.password.addEventListener("input", () => {
  const password = form.password.value;
  if (password.length < 8) {
    feedback.textContent = "Password too short!";
    feedback.style.color = "#d50000";
  } else {
    feedback.textContent = "Password looks good!";
    feedback.style.color = "#00c853";
  }
});
