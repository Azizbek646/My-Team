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

