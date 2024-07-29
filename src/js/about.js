import { about } from "./DATA";
import { aboutHistory } from "./DATA";

(function addAbout() {
  let aboutInfo = "";
  about.forEach(
    (it) =>
      (aboutInfo =
        aboutInfo +
        `<li class="about__item"><p class="about__item-name">${it.title}</p><p class="about__item-description">${it.description}</p></li>`)
  );
  document.querySelector(".about__list").innerHTML = aboutInfo;
})();

(function addAboutHistory() {
  let aboutInfo = "";
  aboutHistory.forEach(
    (it) =>
      (aboutInfo =
        aboutInfo +
        `<li class="about__listOfHistory-item"><img class="about__listOfHistory-img" src="${it.pic}" alt="${it.alt}"/><p class="about__listOfHistory-text">${it.title}</p></li>`)
  );
  document.querySelector(".about__listOfHistory").innerHTML = aboutInfo;
})();
