document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector("body").classList.add("loaded");
  }, 1000)
});

function toogleNav() {
  const navList = document.querySelector(".header__list");
  const navIcon = document.querySelector(".header__icon");
  navList.classList.toggle("show");
  if (navList.classList.contains("show")){
    navIcon.classList.remove('fa-spin');
  }else{
    navIcon.classList.add('fa-spin');
  }
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = navList.contains(event.target);
    const isClickInsideNavIcon = navIcon.contains(event.target);
    if (!isClickInsideMenu && !isClickInsideNavIcon) {
      navList.classList.remove("show");
      navIcon.classList.add('fa-spin');
    }
  });
}

(function () {
  const aboutTabsContainer = document.querySelector(".about__right");
  const projectTabsContainer = document.querySelector(".projects");

  const navList = document.querySelector(".header__list");
  const navIcon = document.querySelector(".header__icon");
  navList.classList.contains("show") ?  navIcon.classList.remove("fa-spin") : navIcon.classList.add("fa-spin");
  navIcon.addEventListener("click", toogleNav);
  aboutTabsContainer.addEventListener("click", (e) => {
    handleTabs(e, ".tab-content")
  });
  projectTabsContainer.addEventListener("click", (e) => {
    handleTabs(e, ".project__card-content")
  });
})();


function handleTabs(e, contentSelector) {
  const tabButton = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(contentSelector);
  const id = e.target.dataset.id;

  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}





