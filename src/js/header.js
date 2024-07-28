import { menu } from "./CONSTANT";

(function addmenu() {
  let menuList = "";
  let mobileMenu = "";
  menu.forEach(
    (it) =>
      (menuList =
        menuList +
        `<li class="navigation__item" id="${it}" data-info="${it}">
      <a class="navigation__link" href="#${it}" aria-label="${it}">
        ${it}
      </a>
    </li>`)
  );
  menu.forEach(
    (it) =>
      (mobileMenu =
        mobileMenu +
        `<li class="navigation__item" data-info="${it}>
      <a class="navigation__link" href="#${it}" aria-label="${it}">
        ${it}
      </a>
    </li>`)
  );
  document.querySelector(".navigation__list").innerHTML = menuList;
  document.querySelector(
    ".mobile-menu__navigation__list"
  ).innerHTML = mobileMenu;
})();
