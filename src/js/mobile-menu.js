(() => {
  const menuBtnRef = document.querySelector(".mobile-btn");
  const mobileMenuRef = document.querySelector(".mobile-menu");
  const menuLinks = document.querySelector(".mobile-menu__navigation__list");

  const toggleMenu = () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
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
