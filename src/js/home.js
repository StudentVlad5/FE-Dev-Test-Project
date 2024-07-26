import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none" });
let speed = 100;
const widthWindow = window.innerWidth;
const kf = widthWindow / 800;
const km = -0.5;

let canvas = gsap.timeline();
ScrollTrigger.create({
  animation: canvas,
  trigger: ".scrollElement",
  toggleActions: "restart reverse",
  start: "top top",
  end: "bottom 50%+=100px",
  scrub: 2.7,
});

canvas.to("#cloud-1", { x: 10 * speed, scale: 0.5, duration: 2 }, 0);
canvas.to("#cloud-2", { x: 10 * speed, scale: 0.5, duration: 2 }, 0);
if (widthWindow >= 800) {
  canvas.to(
    "#builds",
    { y: 0.6 * speed, delay: 0.03, scale: 0.5, duration: 3 },
    0
  );
} else {
  canvas.to(
    "#builds",
    { y: 0.3 * speed, delay: 0.03, scale: 0.2, duration: 3 },
    0
  );
}
canvas.to("#hills", { scale: 1.095, duration: 1.5 }, 0);
canvas.from("#hills", { scale: 1.095, duration: 1.5 }, 1.5);
canvas.to(
  "#build-3",
  {
    x: 1 * speed,
    y: -0.1 * speed,
    scale: 0.1,
    opacity: 0,
  },
  0
);
canvas.to(
  "#build-4",
  {
    x: 1 * speed,
    y: -0.1 * speed,
    scale: 0.1,
    opacity: 0,
  },
  0
);
canvas.to(
  "#tree-1",
  {
    x: 1 * speed,
    y: -0.1 * speed,
    scale: 0.1,
    opacity: 0,
  },
  0
);
canvas.to(
  "#tree-2",
  {
    x: 1 * speed,
    y: -0.1 * speed,
    scale: 0.1,
    opacity: 0,
  },
  0
);
canvas.to(
  "#tree-3",
  {
    x: 1 * speed,
    y: -0.1 * speed,
    scale: 0.1,
    opacity: 0,
  },
  0
);
canvas.to(
  "#townBilding-1",
  {
    x: -2 * speed,
    y: -0.2 * speed,
    scale: 0.1,
    opacity: 0,
  },
  0
);
canvas.to(
  "#townBilding-2",
  {
    x: -2 * speed,
    y: -0.2 * speed,
    scale: 0.1,
    opacity: 0,
  },
  0
);
canvas.to(
  "#townBilding-3",
  {
    x: -2 * speed,
    y: -0.2 * speed,
    scale: 0.1,
    opacity: 0,
  },
  0
);
canvas.to(
  "#townBilding-4",
  {
    x: -0.1 * speed,
    y: -0.05 * speed,
    scale: 0,
    opacity: 0,
    duration: 0.2,
  },
  0
);
canvas.to(
  "#trees-1",
  { x: -1.1 * speed, y: -0.1 * speed, scale: 0.1, opacity: 0 },
  0
);
canvas.from("#build-1", { opacity: 0, x: -150 }, 0.3);
canvas.to(
  "#build-1",
  { x: 1 * speed, y: -0.2 * speed, scale: 0.1, opacity: 0 },
  0.8
);
canvas.from("#build-2", { opacity: 0, x: 150 }, 0.3);
canvas.to(
  "#build-2",
  { x: -1 * speed, y: -0.2 * speed, scale: 0.1, opacity: 0 },
  0.8
);
canvas.from("#moving-tree-1", { opacity: 0, x: -150 }, 0.53);
canvas.to(
  "#moving-tree-1",
  { x: 1 * speed, y: -0.2 * speed, scale: 0.1, opacity: 0 },
  1.03
);
canvas.from("#moving-tree-2", { opacity: 0, x: 150 }, 0.53);
canvas.to(
  "#moving-tree-2",
  { x: -1 * speed, y: -0.2 * speed, scale: 0.1, opacity: 0 },
  1.03
);
canvas.from("#forest-1", { opacity: 0, x: -150 }, 0.6);
canvas.to(
  "#forest-1",
  { x: 1 * speed, y: -0.2 * speed, scale: 0.1, opacity: 0 },
  1.1
);
canvas.from("#forest-2", { opacity: 0, x: 150 }, 0.6);
canvas.to(
  "#forest-2",
  {
    x: -1 * speed,
    y: -0.2 * speed,
    scale: 0.1,
    delay: 0.02,
    opacity: 0,
  },
  1.1
);
canvas.from("#trees", { opacity: 0, x: 150 }, 2.4);
canvas.to(
  "#trees",
  { x: -1 * speed, y: -0.1 * speed, scale: 0.1, opacity: 0 },
  2.8
);
canvas.from("#tree", { opacity: 0, x: 150 }, 1.13);
canvas.to(
  "#tree",
  { x: -1 * speed, y: -0.2 * speed, scale: 0.1, opacity: 0 },
  1.63
);
canvas.from("#cloud-3", { opacity: 0, x: -150 }, 1.65);
canvas.to("#cloud-3", { x: 7 * speed, scale: 0.5, duration: 2 }, 2.15);
canvas.from("#cloud-4", { opacity: 0, x: -150 }, 1.65);
canvas.to("#cloud-4", { x: 7 * speed, scale: 0.5, duration: 2 }, 2.15);

if (widthWindow >= 800) {
  canvas.from("#big-board-1", { opacity: 0, x: -250, duration: 0.3 }, 1.7);
  canvas.to(
    "#big-board-1",
    { x: kf * speed, y: 0.8 * speed, scale: 0, opacity: 0.6 },
    2.1
  );
  canvas.from("#big-board-2", { opacity: 0, x: -160, duration: 0.3 }, 2.3);
  canvas.to(
    "#big-board-2",
    { x: kf * speed, y: 0.8 * speed, scale: 0, opacity: 0.6 },
    2.8
  );
  canvas.from("#big-board-3", { opacity: 0, x: -160, duration: 0.3 }, 3.0);
  canvas.from("#big-board-4", { opacity: 0, x: 160, duration: 0.3 }, 1.7);
  canvas.to(
    "#big-board-4",
    { x: -kf * speed, y: 0.8 * speed, scale: 0, opacity: 0.6 },
    2.1
  );
  canvas.from("#big-board-5", { opacity: 0, x: 160, duration: 0.3 }, 2.3);
  canvas.to(
    "#big-board-5",
    { x: -kf * speed, y: 0.8 * speed, scale: 0, opacity: 0.6 },
    2.8
  );
  canvas.from("#big-board-6", { opacity: 0, x: 160, duration: 0.3 }, 3.0);
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
else {
  canvas.from("#big-board-1", { opacity: 0, x: -150 }, 0.6);
  canvas.to(
    "#big-board-1",
    { x: km * speed, y: 0.8 * speed, scale: 0, opacity: 0.8 },
    0.9
  );
  canvas.from("#big-board-2", { opacity: 0, x: -150 }, 1.5);
  canvas.to(
    "#big-board-2",
    { x: km * speed, y: 0.8 * speed, scale: 0, opacity: 0.8 },
    1.8
  );
  canvas.from("#big-board-3", { opacity: 0, x: -150 }, 2.7);
  canvas.to(
    "#big-board-3",
    { x: km * speed, y: 0.8 * speed, scale: 0, opacity: 0.8 },
    3.1
  );
  canvas.from("#big-board-4", { opacity: 0, x: 150 }, 1.1);
  canvas.to(
    "#big-board-4",
    { x: -km * speed, y: 0.7 * speed, scale: 0, opacity: 0.8 },
    1.4
  );
  canvas.from("#big-board-5", { opacity: 0, x: 150 }, 2.1);
  canvas.to(
    "#big-board-5",
    { x: -km * speed, y: 0.7 * speed, scale: 0, opacity: 0.8 },
    2.4
  );
  canvas.from("#big-board-6", { opacity: 0, x: 150 }, 3.3);
}
canvas.from("#turnRight", { opacity: 0, x: 150 }, 3.5);
canvas.from("#turnLeft", { opacity: 0, x: -150 }, 3.5);
canvas.to(
  "#strips-1",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  0
);
canvas.to(
  "#strips-2",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  0.3
);
canvas.to(
  "#strips-3",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  0.6
);
canvas.to(
  "#strips-4",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  0.9
);
canvas.to(
  "#strips-5",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  1.2
);
canvas.to(
  "#strips-6",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  1.5
);
canvas.to(
  "#strips-7",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  1.8
);
canvas.to(
  "#strips-8",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  2.1
);
canvas.to(
  "#strips-9",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  2.4
);
canvas.to(
  "#strips-10",
  { y: -3.3 * speed, scale: 0, opacity: 0.5, duration: 0.8 },
  2.7
);
canvas.to(
  "#strips-11",
  { bottom: "160px", scale: 0.3, opacity: 0.5, duration: 0.5 },
  3.0
);
canvas.to(
  "#strips-12",
  { bottom: "60px", scale: 1, opacity: 0.5, duration: 0.2 },
  3.3
);
canvas.to(
  "#strips-16",
  { y: -0.7 * speed, scale: 0, opacity: 0.5, duration: 0.3 },
  0
);
canvas.to(
  "#strips-17",
  {
    y: -1.5 * speed,
    scale: 0,
    opacity: 0.5,
    duration: 0.6,
  },
  0
);

if (widthWindow >= 800) {
  canvas.to(
    "#road",
    {
      left: "25px",
      duration: 0.2,
    },
    2.4
  );
  canvas.to(
    "#horizontalRoad",
    {
      bottom: "-10%",
      duration: 0.2,
    },
    3.4
  );
} else {
  canvas.from("#road", {}, 0.4);
  canvas.to(
    "#horizontalRoad",
    {
      bottom: "-70px",
      duration: 0.2,
    },
    3.4
  );
}

gsap.to("#car", {
  keyframes: {
    "0%": { x: 0, y: 0 },
    "20%": { x: -2, y: 1 },
    "40%": { x: -2, y: -1 },
    "60%": { x: 2, y: 1 },
    "80%": { x: 2, y: -1 },
    "100%": { x: 0, y: 0 },
  },
  duration: 1,
  repeat: -1,
  scrollTrigger: {
    start: "top 50%",
    end: "bottom 50%+=100px",
  },
});

// 2 PATH
const turnLeft = document.getElementById("turnLeft");
const scene1 = document.querySelector(".canvas");
const scene2 = document.querySelector(".canvas-1");
const scene3 = document.querySelector(".canvas-2");
const car_turn_left = document.getElementById("car_turn_left");
const car = document.getElementById("car");

function startScene2() {
  if (
    widthWindow < 800 ||
    (widthWindow >= 800 &&
      widthWindow < 1000 &&
      turnLeft.getBoundingClientRect().x > -70 &&
      turnLeft.getBoundingClientRect().y > 495) ||
    (widthWindow >= 1000 &&
      widthWindow < 1200 &&
      turnLeft.getBoundingClientRect().x > -70 &&
      turnLeft.getBoundingClientRect().y > 495) ||
    (widthWindow >= 1200 &&
      widthWindow < 1500 &&
      turnLeft.getBoundingClientRect().x > 130 &&
      turnLeft.getBoundingClientRect().y > 495) ||
    (widthWindow >= 1500 &&
      turnLeft.getBoundingClientRect().x > 330 &&
      turnLeft.getBoundingClientRect().y > 495)
  ) {
    scene2.classList.add("active");
    scene1.classList.add("active");
    scene3.classList.add("active");

    // car_turn_left.style.display = "block";
    // car.style.display = "none";
    car.classList.add("active");
    setTimeout(() => {
      car_turn_left.classList.add("active");
      // car_turn_left_move.classList.add("active");
      document.getElementById("light_box").style.display = "flex";
    }, 600);

    setTimeout(() => {
      car_turn_left.style.display = "block";
      car_turn_left.classList.add("active");
      car.style.display = "none";
      // car_turn_left_move.classList.add("active");
      document.getElementById("light_box").style.display = "flex";
    }, 600);

    setTimeout(() => {
      document
        .getElementById("car_with_driver_leftAnimation")
        .classList.add("active");
      document.getElementById("car_with_driver_").classList.add("active");
    }, 1000);

    setTimeout(() => {
      scene1.style.display = "none";
    }, 2000);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 3000);

    setTimeout(() => {
      scene2.style.position = "relative";
      document.getElementById("car_with_driver_start").style.display = "block";
      document.getElementById("lady_with_package").style.display = "block";
      document.getElementById("lady_without_package").style.display = "block";
      document.getElementById("lady_without_package_back").style.display =
        "block";
      document.getElementById("man_with_package").style.display = "block";
      document.getElementById("man_without_package").style.display = "block";
      document.getElementById("man_without_package_back").style.display =
        "block";
      document.getElementById(
        "car_with_dog_and_plant_and_driver"
      ).style.display = "block";
      document.getElementById("car_with_driver_").style.display = "block";
      document.getElementById("canvas-2_2").style.display = "flex";
      document.getElementById("canvas-2_3").style.display = "flex";
      document.getElementById("movie_road").style.display = "block";
      document.getElementById("fonOfRoad").style.display = "flex";
      document.getElementById("fonOfRoad_1").style.display = "flex";
      document.getElementById("fonOfRoad_2").style.display = "flex";
      document.getElementById("fonOfRoad_3").style.display = "flex";
      document.getElementById("fonOfRoad_4").style.display = "flex";
      document.getElementById("fonOfRoad_5").style.display = "flex";
      document.getElementById("road_0").style.display = "block";
      document.getElementById("road_1").style.display = "block";
      document.getElementById("road_2").style.display = "block";
      document.getElementById("road_3").style.display = "block";
      document.getElementById("road_4").style.display = "block";
      document.getElementById("road_5").style.display = "block";
      document.getElementById("ocheret_1").style.display = "block";
      document.getElementById("ocheret_2").style.display = "block";
      document.getElementById(
        "big_board_white_with_trafficlight"
      ).style.display = "block";
      document.getElementById("big_board_white_both_side").style.display =
        "block";
      document.getElementById("big_board_white_right_side").style.display =
        "block";
      document.getElementById("big_board_blue").style.display = "block";
      document.getElementById("board_white_left_side_1").style.display =
        "block";
      document.getElementById("board_white_left_side_2").style.display =
        "block";
      document.getElementById("board_white_left_side_3").style.display =
        "block";
      document.getElementById("board_white_right_side_1").style.display =
        "block";
      document.getElementById("board_white_right_side_2").style.display =
        "block";
      document.getElementById("board_white_right_side_3").style.display =
        "block";
    }, 5000);
    setTimeout(() => {
      document.getElementById("car_with_driver_").style.display = "none";
      document.getElementById("car_with_driver_direct").style.display = "block";
    }, 7000);
  }
}
turnLeft.onClick = startScene2;
turnLeft.addEventListener("click", startScene2);

canvas.to(
  "#car_with_driver_start",
  { opacity: 0, scale: 0, duration: 0.01 },
  2.4
);
canvas.from(
  "#car_with_dog_and_plant_and_driver",
  { opacity: 0, duration: 0.01 },
  2.4
);

canvas.from("#lady_with_package", { opacity: 0, x: -250 }, 1.7, 0.1);
canvas.to("#lady_with_package", { opacity: 0, duration: 0.01 }, 2.4);
canvas.from("#lady_without_package", { opacity: 0, duration: 0.01 }, 2.4);
canvas.from("#man_with_package", { opacity: 0, x: 250 }, 1.7, 0.1);
canvas.to("#man_with_package", { opacity: 0, duration: 0.01 }, 2.4);
canvas.from("#man_without_package", { opacity: 0, duration: 0.01 }, 2.4);

canvas.to("#man_without_package", { opacity: 0, duration: 0.01 }, 2.8);
canvas.to("#lady_without_package", { opacity: 0, duration: 0.01 }, 2.8);

canvas.from("#lady_without_package_back", { opacity: 0, duration: 0.01 }, 2.8);
canvas.from("#man_without_package_back", { opacity: 0, duration: 0.01 }, 2.8);
canvas.to("#lady_without_package_back", { x: -250, duration: 1 }, 2.8);
canvas.to("#lady_without_package_back", { opacity: 0, duration: 0.1 }, 3.3);
canvas.to("#man_without_package_back", { x: 250, duration: 1 }, 2.8);
canvas.to("#man_without_package_back", { opacity: 0, duration: 0.1 }, 3.3);
canvas.from(
  "#man_without_package_back",
  { opacity: 0, duration: 0.1, zIndex: "10" },
  3.9
);
canvas.to(
  "#car_with_dog_and_plant_and_driver",
  { y: 4 * speed, duration: 1.5 },
  2.8
);
canvas.to(
  "#car_with_dog_and_plant_and_driver",
  { opacity: 0, scale: 0, duration: 0.01 },
  3.3
);

canvas.to("#canvas-2", { top: 0, duration: 1.2, easing: "linear" }, 0.2);
canvas.from("#canvas-2_3", { opacity: 0, top: "100%" }, 3.0);
canvas.from("#movie_road", { opacity: 1, y: -0.5 * speed }, 3.2);
if (widthWindow >= 1400) {
  canvas.to("#footer-container", { opacity: 1, y: -7.0 * speed }, 4.2);
} else {
  canvas.to("#footer-container", { opacity: 1, y: -18.0 * speed }, 4.2);
}
