// start Change background img
let img = ["landing0", "landing3", "landing4"];
let hero = document.querySelector(".hero");

let circles = Array.from(document.querySelectorAll(".circles .circle "));
let i = 0;
function prev() {
  if (i <= 0) {
    i = img.length;
  }
  i--;

  circles.forEach((e) => {
    e.classList.remove("active");
  });
  circles[i].classList.add("active");
  return setImg();
}
function next() {
  if (i >= img.length - 1) {
    i = -1;
  }
  i++;
  circles.forEach((e) => {
    e.classList.remove("active");
  });
  circles[i].classList.add("active");
  return setImg();
}
function setImg() {
  return (hero.style.backgroundImage = ` url("../img/${img[i]}.jpg"`);
}

// Change the progreas for skills----------------------------------------------------------------------
let skills = document.querySelector(".skill");
// .offsetTop : get all height befor this section whith the margin
// .ofsetHeight :get the height of this section incloud border - margin and padding.
// .innerHeight : the height of your screen .
// .pageYOffset : where the scroll place

window.onscroll = function () {
  let skillsOfsetTop = skills.offsetTop;
  let windowScrollTop = this.pageYOffset;
  if (windowScrollTop > skillsOfsetTop) {
    let allskills = document.querySelectorAll(".prog-holder span");
    allskills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }

  if (window.scrollY >= section.offsetTop - 200) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

// Change the Number of Numbers

let nums = document.querySelectorAll(".stats .theBoxs .box .number");
let section = document.querySelector(".stats");
let started = false;

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 3000 / goal);
}
