document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading");

  // Прелоадер исчезает через 2 секунды
  const loadingDuration = 2000;
  if (loading) {
    setTimeout(() => {
      loading.classList.add("loading-none");
    }, loadingDuration);
  }
});

// // Меню-бургер
// const menuToggle = document.getElementById("hamburger");
// const navMenu = document.querySelector(".nav-menu");

// if (menuToggle && navMenu) {
//   menuToggle.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
//   });
// }

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});

function validateForm() {
  const input = document.getElementById("myInput");
  const error = document.getElementById("errorText");

  if (input.value.trim() === "") {
    error.classList.add("show");
    return false; // Не отправлять форму
  } else {
    error.classList.remove("show");
    return true;
  }
}

// === Тема ===
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.className = savedTheme;
  toggleBtn.textContent = savedTheme === "dark" ? "Light" : "Dark";
}

toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    toggleBtn.textContent = "Dark";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    toggleBtn.textContent = "Light";
    localStorage.setItem("theme", "dark");
  }
});
