(() => {
  const menuBtnRef = document.querySelector(".mobile-btn");
  const mobileMenuRef = document.querySelector(".mobile-menu");
  const buttonAnimation = document.querySelector(".animation_container");
  const menuLogo = document.querySelector(".logo_dark");
  const mobileLogo = document.querySelector(".logo_bright");
  const menuLinks = document.querySelector(".mobile-menu__navigation__list");

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
