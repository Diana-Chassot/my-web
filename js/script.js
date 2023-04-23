document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.querySelector("body").classList.add("loaded");
  }, 1000)
});

const btnNav = document.querySelector(".header__icon-mobile");
const navList = document.querySelector(".header__list-mobile");
btnNav.addEventListener("click", togleClassActive);

function togleClassActive() {
  btnNav.classList.toggle("open");
  if (btnNav.classList.contains("open")) {
    navList.style.display = "flex";
    btnNav.classList.remove("fa-spin");
  }
  else {
    navList.style.display = "none";
    btnNav.classList.add("fa-spin");
  }
}
window.addEventListener('resize', function () {
  if (btnNav.classList.contains('open')) {
    navList.style.display = 'none';
    navList.classList.remove('open');
  }
});
document.addEventListener("click", function (e) {
  if (!navList.contains(e.target) && !btnNav.contains(e.target)) {
    btnNav.classList.remove("open");
    btnNav.classList.add("fa-spin");
    navList.style.display = "none";
  }
});


const paralaxElem = document.querySelectorAll('.paralax-elem');
window.addEventListener('scroll', () => addParallax(paralaxElem));


function addParallax(elem){
  let scroll = window.pageYOffset;
  elem.forEach(el => {
    let offset = el.offsetTop;
    let distance = (offset - scroll) * 0.1;
    el.style.transform = 'translateY(' + distance + 'px)';
  });
}