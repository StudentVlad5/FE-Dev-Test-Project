import * as bigboard1_1 from "../images/bigboard_svg/bigboard1_1.svg";
import * as bigboard1_2 from "../images/bigboard_svg/bigboard1_2.svg";
import * as bigboard1_3 from "../images/bigboard_svg/bigboard1_3.svg";
import * as bigboard2_1 from "../images/bigboard_svg/bigboard2_1.svg";
import * as bigboard2_2 from "../images/bigboard_svg/bigboard2_2.svg";
import * as bigboard2_3 from "../images/bigboard_svg/bigboard2_3.svg";
import * as bigboard3_1 from "../images/bigboard_svg/bigboard3_1.svg";
import * as bigboard3_2 from "../images/bigboard_svg/bigboard3_2.svg";
import * as bigboard3_3 from "../images/bigboard_svg/bigboard3_3.svg";
import * as bigboard4_1 from "../images/bigboard_svg/bigboard4_1.svg";
import * as bigboard4_2 from "../images/bigboard_svg/bigboard4_2.svg";
import * as bigboard4_3 from "../images/bigboard_svg/bigboard4_3.svg";
import * as bigboard5_1 from "../images/bigboard_svg/bigboard5_1.svg";
import * as bigboard5_2 from "../images/bigboard_svg/bigboard5_2.svg";
import * as bigboard5_3 from "../images/bigboard_svg/bigboard5_3.svg";
import * as bigboard6_1 from "../images/bigboard_svg/bigboard6_1.svg";
import * as bigboard6_2 from "../images/bigboard_svg/bigboard6_2.svg";
import * as bigboard6_3 from "../images/bigboard_svg/bigboard6_3.svg";
import * as bigboard7_1 from "../images/bigboard_svg/bigboard7_1.svg";
import * as bigboard7_2 from "../images/bigboard_svg/bigboard7_2.svg";
import * as bigboard7_3 from "../images/bigboard_svg/bigboard7_3.svg";

const listItems = document.querySelectorAll(".bigboard_list_item");
const gallery = document.getElementById("gallery");
const titles = document.querySelectorAll(".bigboard_list_item_title");

const images = [
  [bigboard1_1, bigboard1_2, bigboard1_3],
  [bigboard2_1, bigboard2_2, bigboard2_3],
  [bigboard3_1, bigboard3_2, bigboard3_3],
  [bigboard4_1, bigboard4_2, bigboard4_3],
  [bigboard5_1, bigboard5_2, bigboard5_3],
  [bigboard6_1, bigboard6_2, bigboard6_3],
  [bigboard7_1, bigboard7_2, bigboard7_3],
];

const initialImagesHTML = images
  .map((currentImages, index) =>
    index === 0
      ? currentImages
          .slice(0, 3)
          .map(
            (imagePath) =>
              `<img src="${imagePath}" class="gallery_img" alt="img">`
          )
          .join("")
      : ""
  )
  .join("");

gallery.innerHTML = initialImagesHTML;

listItems.forEach((item, index) => {
  item.addEventListener("click", function () {
    const currentImages = images[index];

    const imagesHTML = currentImages
      .map(
        (imagePath) => `<img src="${imagePath}" class="gallery_img" alt="img">`
      )
      .join("");

    gallery.innerHTML = imagesHTML;
  });
});

const firstTitle = titles[0];
firstTitle.classList.add("change-color");

function toggleChangeColorClassTitle(clickedTitle) {
  titles.forEach((title) => title.classList.remove("change-color"));
  clickedTitle.classList.add("change-color");
}

titles.forEach((title) => {
  title.addEventListener("click", function () {
    toggleChangeColorClassTitle(title);
  });
});

const textCheckArr = [
  "Перевезення вантажу протягом декількох годин прямим і попутнім транспортом, в тому числі і за кордон",
  "Доставлення вантажу виконується цілодобово 7 днів на тиждень",
  "Можна перевозити неупаковані вантажі",
  "У вас завжди є можливість обговорювати і знижувати вартість перевезення, оскільки транспорт завжди буде попутнім (який їде в вашому напрямку)",
  "Ви можете замовити Водієві покупку та доставку з іншого міста необхідного вам товару - продуктів, будматеріалів, запчастин та ін.",
  "Можливість особисто відстежувати посилку. Пряме перевезення без багаторазових перевантажень, безпосередній контакт з Перевізником",
  "Для невеликої партії вантажу, який вимагає спеціальний режим перевезення, завжди можна знайти попутний автомобіль, без необхідності замовляти окремий специалізований транспорт.",
  "Ви зможете довірити ваших вихованців на час перевезення водієві автомобіля або його пасажирові",
  "Відправник і одержувач вантажу мають можливість стежити за пересуванням вантажу онлайн.",
  "Скориставшись мобільним додатком до Сервісу, Ви можете знайти Перевізника для вантажу що знаходиться в будь-якому віддаленому місці. Сервіс автоматично визначить місце виїзду і знайде потрібного вам Водія",
];

const textMinusArr = [
  "Переміщення вантажів між різними містами може займати декілька днів у зв'язкузі складністю логістики та, можливо, необхідністю перевантаження між Перевізниками",
  "Відділення звичайних перевізників працюють у традиційному режимі з вихідними та святковими днями",
  "Упаковка вантажу обов'язкова",
  "Тарифи на перевезення, особливо важких таабо об'ємних вантажів, не можуть бути низькими",
  "Така послуга не надається",
  "Неможливо або складно доставляти вантажі, які потребуютьособливої обережностіпри завантаженні, транспортуванні та вивантаженні: вироби із скла іабо кераміки, рідини, масла, різні прилади, інструменти, меблі, фрукти, ягоди, квіти",
  "Перевезення вантажів, котрі потребують осоюливих умов транспортування, наприклад, температурних, неможлива",
  "Перевезення тварин неможливе",
  "Непряма інформація про місцезнаходження вантажу",
  "Така послуга не надається. Вам необхідно доставити до найближчого відділення або 'за дуже дорого' викликати кур'єра, якщо це взагалі можливо",
];

const listWhiteItems = document.querySelectorAll(".bigboard_white_list_item");
const changeText1 = document.querySelector(".change-text1");
const changeText2 = document.querySelector(".change-text2");
const titleWhite = document.querySelectorAll(".bigboard_white_list_item_title");

function initText() {
  changeText1.textContent = textCheckArr[0];
  changeText2.textContent = textMinusArr[0];
}

initText();

listWhiteItems.forEach((item, idx) => {
  item.addEventListener("click", function () {
    const currentText1 = textCheckArr[idx];
    const currentText2 = textMinusArr[idx];

    changeText1.textContent = `${currentText1}`;
    changeText2.textContent = `${currentText2}`;
  });
});

const firstWhiteTitle = titleWhite[0];
firstWhiteTitle.classList.add("changeColor");

function toggleChangeColorClass(clickedTitle) {
  titleWhite.forEach((title) => title.classList.remove("changeColor"));
  clickedTitle.classList.add("changeColor");
}

titleWhite.forEach((title) => {
  title.addEventListener("click", function () {
    toggleChangeColorClass(title);
  });
});
