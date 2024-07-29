const menuBtnRef = document.querySelector(".mobile-btn");
const mobileMenuRef = document.querySelector(".mobile-menu");
const buttonAnimation = document.querySelector(".animation_container");
const menuLogo = document.querySelector(".logo_dark");
const mobileLogo = document.querySelector(".logo_bright");
const menuLinks = document.querySelector(".mobile-menu__navigation__list");

(() => {
  const toggleMenu = () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuLogo.classList.toggle("is-open");
    buttonAnimation.classList.toggle("animate");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
    mobileLogo.classList.toggle("is-open");
    !expanded ? fixedModalOverflow() : closeModalOverflow();
  };

  menuBtnRef.addEventListener("click", toggleMenu);
  menuLinks.addEventListener("click", toggleMenu);
})();

// Fixed window when modal opened
function fixedModalOverflow() {
  document.querySelector("body").style.overflow = "hidden";
}

function closeModalOverflow() {
  document.querySelector("body").style.overflow = "unset";
}

// close by ESC
document.onkeydown = function (evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    menuBtnRef.setAttribute("aria-expanded", true);
    menuBtnRef.classList.remove("is-open");
    menuLogo.classList.add("is-open");
    buttonAnimation.classList.remove("animate");
    mobileMenuRef.classList.remove("is-open");
    mobileLogo.classList.remove("is-open");
    closeModalOverflow();
  }
};
// add class "active" for menu

window.addEventListener("scroll", function handleChangeActiveClass(e) {
  e.preventDefault();
  let scrollY = window.scrollY;
  const navItemList = document.querySelectorAll(".navigation__link");

  const sectionList = document.querySelectorAll(".section");
  navItemList.forEach((link) => {
    let section = document.querySelector(link.hash);

    if (section) {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;

      if (scrollY < sectionTop && link.classList.contains("active")) {
        link.classList.add("active");
      } else if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});
