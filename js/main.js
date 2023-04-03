const menu = document.querySelector("header .menu");
const dropMenu = document.querySelector("header .drop-menu");
const skills = document.getElementById("skills");
const stats = document.getElementById("stats");
const numbers = document.querySelectorAll("#stats .number");

// show the menu on click
dropMenu.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("show");
});

// hide menu on mouseleave
menu.addEventListener("mouseleave", () => {
  menu.classList.remove("show");
});

document.addEventListener("scroll", () => {
  // fill the progress of skills section on scroll
  if (skills.offsetTop - 280 <= window.scrollY) {
    skills.classList.add("fill");
  }

  // increase the number of stats section on scroll
  if (stats.offsetTop - 280 <= window.scrollY) {
    numbers.forEach((number) => {
      const goal = +number.dataset.goal;
      const interval = setInterval(() => {
        if (+number.textContent !== goal) {
          number.textContent++;
        } else {
          clearInterval(interval);
        }
      }, 2000 / goal);
    });
  }
});
