import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { heroServices } from "./DATA";
import arrow from "../images/about/arrow.svg";

// import Swiper and modules styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation.min.css";
import "swiper/modules/pagination.min.css";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation],
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

(function addServicesSliders() {
  let servicesSliders = "";
  heroServices.forEach(
    (it) => (
      (description = ""),
      it.description.forEach(
        (k) =>
          (description =
            description + `<p class="swiper-description--text">${k}</p>`)
      ),
      (servicesSliders =
        servicesSliders +
        `<div class="swiper-slide"><div class="swiper-title"><p class="swiper-subtitle">${it.title}</p></div><div class="swiper-description" style="background:linear-gradient(180deg,rgba(24, 50, 108, 1) 0%,rgba(24, 50, 108, 1) 12%,rgba(24, 48, 108, 0.25262605042016806) 100%), url(${it.pics}); background-size: cover; background-position: center center;background-repeat: no-repeat">${description}</div><a class="swiper-link" href="#${it.title}" aria-label="${it.title}"><div class="btn-link"><img class="btn-link-img" src="${arrow}"alt="link to ${it.title}"/></div></a></div></div>`)
    )
  );

  document.querySelector(".swiper-wrapper").innerHTML = servicesSliders;
})();
