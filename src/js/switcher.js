import image_2_1 from "../images/svg_pics_for_bigboard/board_left_2_1.svg";
import image_2_2 from "../images/svg_pics_for_bigboard/board_left_2_2.svg";
import image_2_3 from "../images/svg_pics_for_bigboard/board_left_2_3.svg";
import image_2_4 from "../images/svg_pics_for_bigboard/board_left_2_4.svg";
import image_2_5 from "../images/svg_pics_for_bigboard/board_left_2_5.svg";

import image_5_1 from "../images/svg_pics_for_bigboard/board_right_2_1.svg";
import image_5_2 from "../images/svg_pics_for_bigboard/board_left_2_3.svg";
import image_5_3 from "../images/svg_pics_for_bigboard/board_left_2_4.svg";
import image_5_4 from "../images/svg_pics_for_bigboard/board_left_2_5.svg";
import image_5_5 from "../images/svg_pics_for_bigboard/board_left_2_1.svg";
import image_5_6 from "../images/svg_pics_for_bigboard/board_right_2_6.svg";

const textsArr1 = [
  "Зареєструйтесь на сайті або через мобільний додаток у статусі Водія та заповніть профіль. Встановлення програми 112kilo (доступно поки лише для ОС Android) для Водіїв є обов'язковим",
  "Створіть Замовлення у Особистому Кабінеті (розділ Замовлення). Вкажіть, що коли та як вам необхідно перевезти",
  "У 'Відповідих маршрутах' знаходяться контакти Водіїв, які потрапляють під ваші вимоги. Контакти періодично оновлюються і Ви отримуєте повідомлення про нові маршрути",
  "Зв'яжіться і домовтеся з Водієм. Обговоріть форму оплати. З свого кабінету підтвердіть його запит на доставку вантажу. Після підтвердження запиту Водія, Сервісом буде автоматично створена електронна накладна і Договір доставки",
  "Перед відправкою вантажу перевірте правильність заповнення накладної, створеної Сервісом. У разі потреби внесіть правки та зробіть обов'язкове фото вантажу (доступно з телефону Водія). Підпишіть накладну електронним ключем (згенерований сервісом) зі свого кабінету або продиктуйте його Водію.",
  "Після підписання Водієм і Відправником накладаня автоматично з'явиться в кабінеті Одержувача. Якщо Одержувач на сервісі не зареєстрований, для перегляду накладної він повинен створити обліковий запис на свою пошту, вказану в замовленні на доставку вантажу.",
  "Після доставки вантажу, Одержувач підписує накладну електронним ключем, який генерується сервісом та відправляється на його телефон, зазначений у Замовленні на доставку вантажу, створеному Клієнтом (замовником доставки). Підписується накладна у телефоні Водія.",
];

const textsArr2 = [
  "Зареєструйтесь на сайті або через мобільний додаток у статусі Водія та заповніть профіль. Встановлення програми 112kilo (доступно поки лише для ОС Android) для Водіїв є обов'язковим.",
  "Створіть Маршрут у Особистому Кабінеті (розділ Маршрути). Вкажіть, коли та куди ви плануєте поїздку",
  'У "Відповідних Замовленнях" знаходяться контакти Клієнтів (замовників), які відповідають Вашим вимогам. Контакти періодично оновлюються і Ви отримуєте повідомлення про нові Замовлення. Для того, щоб контакти Клієнтів були видні, Ви повинні верифікуватися. Протягом 24 годин сервіс перевірить достовірність даних та активує ваш обліковий запис.',
  "Зв'яжіться та домовтеся з Клієнтом (замовником). Обговоріть форму оплати. Зі свого кабінету надішліть запит на доставку вантажу. Після підтвердження вашого запиту Клієнтом, Сервісом буде автоматично створено електронну накладну та Договір доставки.",
  "Під час зустрічі з Відправником, відкрийте накладну у додатку на вашому мобільному телефоні. За необхідності внесіть редагування, зробіть фото вантажу. Підпишіть паролем для входу до облікового запису. Відправник підписує накладну самостійно зі свого кабінету або передає код підпису Вам.",
  "При передачі вантажу, Одержувач підписується у накладній своїм електронним ключем. Отримуєте гроші за доставку.",
];

const word1 = document.querySelectorAll(".word1");
const word2 = document.querySelectorAll(".word2");
const switcher = document.querySelectorAll(".switcher");
const switchText = document.getElementById("switch-text");
const count = document.querySelector(".count_box-num-text");
const total = document.querySelector(".count_box-num-text1");
const btnBack = document.querySelector(".btn-back");
const btnNext = document.querySelector(".btn-next");
const client = document.querySelector(".client");
const driver = document.querySelector(".driver");

let currentIndex = 0;

word1.forEach((el) => {
  el.addEventListener("click", function () {
    switcher.forEach((it) => (it.checked = true));
    el.classList.add("label--isActive");
    word2.forEach((otherEl) => otherEl.classList.remove("label--isActive"));

    currentIndex = 0;
    switchText.textContent = textsArr2[currentIndex];
    count.textContent = `0${currentIndex + 1}`;
  });
});

word2.forEach((el) => {
  el.addEventListener("click", function () {
    switcher.forEach((it) => (it.checked = false));
    el.classList.add("label--isActive");
    word1.forEach((otherEl) => otherEl.classList.remove("label--isActive"));

    currentIndex = 0;
    switchText.textContent = textsArr1[currentIndex];
    count.textContent = `0${currentIndex + 1}`;
  });
});

switcher.forEach((el) => {
  el.addEventListener("click", function () {
    if (el.checked == true) {
      word2.forEach((otherEl) => otherEl.classList.add("label--isActive"));
      word1.forEach((otherEl) => otherEl.classList.remove("label--isActive"));

      currentIndex = 0;
      switchText.textContent = textsArr1[currentIndex];
      count.textContent = `0${currentIndex + 1}`;
    } else {
      word2.forEach((otherEl) => otherEl.classList.remove("label--isActive"));
      word1.forEach((otherEl) => otherEl.classList.add("label--isActive"));

      currentIndex = 0;
      switchText.textContent = textsArr2[currentIndex];
      count.textContent = `0${currentIndex + 1}`;
    }
  });
});

switcher.forEach((el) => {
  el.addEventListener("change", function () {
    currentIndex = 0;
    changeText(0);
  });
});

function changeText(step) {
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = switcher[0].checked
      ? textsArr1.length - 1
      : textsArr2.length - 1;
  } else if (
    currentIndex >= (switcher[0].checked ? textsArr2.length : textsArr1.length)
  ) {
    currentIndex = 0;
  }

  const activeTextsArr = switcher[0].checked ? textsArr2 : textsArr1;

  switchText.textContent = activeTextsArr[currentIndex];
  count.textContent = `0${currentIndex + 1}`;
  total.textContent = `0${activeTextsArr.length}`;
}

changeText(0);

btnBack.addEventListener("click", function () {
  changeText(-1);
});

btnNext.addEventListener("click", function () {
  changeText(1);
});

// last bord

const lastTitleArr1 = [
  "Накладна на вантаж",
  "Персональні дані Водія",
  "Досвід та надійність",
  'Захист від "накручування"',
  "Відстежування",
  "Документація",
  "Вирішення суперечок",
];

const lastDiscrArr1 = [
  "Ніколи не передавайте вантаж Водію без оформлення накладної. Не наражайте себе на зайвий ризик. Електронна накладна автоматично формується сервісом та зберігається в базі документів.",
  "Адміністрація сервісу проводить премодерацію документів, наданих Водієм. Відправник завжди має можливість порівняти персональні дані Водія і дані автомобіля, зазначені в накладній і фактичні.",
  "Рейтинг Водія, а також залишені про нього відгуки, дають уявлення про його досвід та ступінь надійності",
  "Щоб уникнути накруток рейтингу Водієм, можливість отримувати його є тільки в разі, якщо факт доставки вантажу у вказане місце зафіксований сервісом.",
  "Відправник і Одержувач вантажу мають можливість стежити за пересуванням вантажу онлайн.",
  "Адміністрація сайту гарантує зберігання електронних копій накладних та Договорів, укладених між користувачами",
  "При виникненні спірних ситуацій з Водієм після створення накладної (накладна створюється сервісом автоматично після згоди Відправника на доставку вантажу Водієм), передбачена можливість відкриття спору Відправником або Одержувачем в особистому кабінеті із залученням або без залучення представника Адміністрації. ",
];

const lastTitleArr2 = [
  "Накладна на груз",
  "Довіра",
  "Рейтинг",
  "Відстежування",
  "Зворотній з'вязок",
  "Допомога",
  "Вирішення суперечок",
];

const lastDiscrArr2 = [
  "Ніколи не доставляйте вантаж без оформлення накладної. Не беріть він зайвої відповідальності. Електронна накладна автоматично формується сервісом та зберігається в базі документів.",
  "Для підвищення довіри Клієнтів Адміністрація проводить премодерацію документів, наданих при реєстрації. Таккже згідно з правилами сервісу доставка вантажів повинна здійснюватися з активним з'єднанням онлайн відстеження.",
  "Можливість отримувати рейтинг є тільки в разі підтвердження сервісом фактичної доставки вантажу в зазначене у накладній місце.",
  "Відстежування працює тільки під час виконання Маршруту та відключається автоматично після виконання усіх Замовлень по даному Маршруту",
  "Водій, також як і Клієнт, має можливість залишати відгуки",
  "У разі виникнення непередбачених ситуацій Водій завжди може скористатися екстреною допомогою в дорозі, натиснувши на відповідну кнопку в накладній. Залежно від типу звернення його запит про допомогу отримає Адміністрація або інші Водії, які їдуть в попутному напрямку.",
  "При виникненні спірних ситуацій з Відправником або Одержувачем після створення накладної (накладна створюється сервісом автоматично після згоди Клієнта на доставку вантажу Водієм), передбачена можливість відкриття спору в особистому кабінеті із залученням або без залучення представника Адміністрації. ",
];

const listOfScene = [
  {
    title:
      "Используйте существующие маршруты для ограничения дополнительных выбросов СО2",
    img: image_2_1,
  },
  {
    title:
      "Это быстро – прямая доставка без дополнительных затрат времени и уникально – некоторые грузы невозможно или очень дорого доставить традиционными службами",
    img: image_2_2,
  },
  {
    title:
      "Заработайте баллы за свои активности и получите дополнительное вознаграждение, участвуя в чемпионате рейтингов",
    img: image_2_3,
  },
  {
    title: "Научитесь работать с криптовалютой",
    img: image_2_4,
  },
  {
    title: "Почувствуйте дух соревнования",
    img: image_2_5,
  },
];

const listOfSceneBoard5 = [
  {
    title: "Окупите расходы на топливо",
    img: image_5_1,
  },
  {
    title:
      "Заработайте баллы за свои активности и получите дополнительное вознаграждение, участвуя в чемпионате рейтингов",
    img: image_5_2,
  },
  {
    title: "Научитесь работать с криптовалютой",
    img: image_5_3,
  },
  {
    title: "Почувствуйте дух соревнования",
    img: image_5_4,
  },
  {
    title:
      "Используйте существующие маршруты для ограничения дополнительных выбросов СО2",
    img: image_5_5,
  },
  {
    title:
      "Окажите услугу другим и сделайте вашу поездку увлекательным gутешествием",
    img: image_5_6,
  },
];

const lastWord1 = document.querySelectorAll(".last-word1");
const lastWord2 = document.querySelectorAll(".last-word2");
const lastSwitcher = document.querySelectorAll(".last_bord-switcher");
const lastSwitchText = document.getElementById("last-switch-title");
const lastSwitchDiscr = document.getElementById("last-switch-discr");
const lastCount = document.querySelector(".num_box-num-text");
const lastBtnBack = document.querySelector(".last-btn-back");
const lastBtnNext = document.querySelector(".last-btn-next");
const hiddenList = document.querySelector(".light_box-list");
const message = document.querySelector(".light_box-message");
const driverHidden = document.querySelectorAll(".driver-hidden");
const clientHidden = document.querySelectorAll(".client-hidden");

let lastCurrentIndex = 0;

lastWord1.forEach((el) => {
  el.addEventListener("click", function () {
    lastSwitcher.forEach((it) => (it.checked = true));
    el.classList.add("label--isActive2");
    lastWord2.forEach((otherEl) =>
      otherEl.classList.remove("label--isActive2")
    );

    lastCurrentIndex = 0;
    lastSwitchText.textContent = lastTitleArr2[lastCurrentIndex];
    lastSwitchDiscr.textContent = lastDiscrArr2[lastCurrentIndex];
    lastCount.textContent = `0${lastCurrentIndex + 1}`;
  });
});

lastWord2.forEach((el) => {
  el.addEventListener("click", function () {
    lastSwitcher.forEach((it) => (it.checked = false));
    el.classList.add("label--isActive2");
    lastWord1.forEach((otherEl) =>
      otherEl.classList.remove("label--isActive2")
    );

    lastCurrentIndex = 0;
    lastSwitchText.textContent = lastTitleArr1[lastCurrentIndex];
    lastSwitchDiscr.textContent = lastDiscrArr1[lastCurrentIndex];

    lastCount.textContent = `0${lastCurrentIndex + 1}`;
  });
});

lastSwitcher.forEach((el) => {
  el.addEventListener("click", function () {
    if (el.checked == true) {
      lastWord2.forEach((otherEl) => otherEl.classList.add("label--isActive2"));
      lastWord1.forEach((otherEl) =>
        otherEl.classList.remove("label--isActive2")
      );

      lastCurrentIndex = 0;
      lastSwitchText.textContent = lastTitleArr1[lastCurrentIndex];
      lastSwitchDiscr.textContent = lastDiscrArr1[lastCurrentIndex];
      lastCount.textContent = `0${lastCurrentIndex + 1}`;
    } else {
      lastWord2.forEach((otherEl) =>
        otherEl.classList.remove("label--isActive2")
      );
      lastWord1.forEach((otherEl) => otherEl.classList.add("label--isActive2"));

      lastCurrentIndex = 0;
      lastSwitchText.textContent = lastTitleArr2[lastCurrentIndex];
      lastSwitchDiscr.textContent = lastDiscrArr2[lastCurrentIndex];

      lastCount.textContent = `0${lastCurrentIndex + 1}`;
    }
  });
});

lastSwitcher.forEach((el) => {
  el.addEventListener("change", function () {
    lastCurrentIndex = 0;
    changeLastText(0);
  });
});

function changeLastText(step) {
  lastCurrentIndex += step;
  if (lastCurrentIndex < 0) {
    lastCurrentIndex = lastSwitcher[0].checked
      ? lastTitleArr1.length - 1
      : lastTitleArr2.length - 1;
  } else if (
    lastCurrentIndex >=
    (lastSwitcher[0].checked ? lastTitleArr2.length : lastTitleArr1.length)
  ) {
    lastCurrentIndex = 0;
  }

  const activeTitleArr = lastSwitcher[0].checked
    ? lastTitleArr2
    : lastTitleArr1;

  const activeDiscrArr = lastSwitcher[0].checked
    ? lastDiscrArr2
    : lastDiscrArr1;

  lastSwitchText.textContent = activeTitleArr[lastCurrentIndex];
  lastSwitchDiscr.textContent = activeDiscrArr[lastCurrentIndex];

  lastCount.textContent = `0${lastCurrentIndex + 1}`;
}

changeLastText(0);

lastBtnBack.addEventListener("click", function () {
  changeLastText(-1);
});

lastBtnNext.addEventListener("click", function () {
  changeLastText(1);
});

// client or driver

client.addEventListener("click", function () {
  switcher.forEach((it) => (it.checked = false));
  lastSwitcher.forEach((it) => (it.checked = false));

  client.classList.add("active-light_box-btn");
  driver.classList.remove("active-light_box-btn");

  word1.forEach((otherEl) => otherEl.classList.add("label--isActive"));
  word2.forEach((otherEl) => otherEl.classList.remove("label--isActive"));

  lastWord1.forEach((otherEl) => otherEl.classList.add("label--isActive2"));
  lastWord2.forEach((otherEl) => otherEl.classList.remove("label--isActive2"));

  console.log("вибраний клієнт");

  currentIndex = 0;
  lastCurrentIndex = 0;

  switchText.textContent = textsArr1[currentIndex];
  count.textContent = `0${currentIndex + 1}`;
  total.textContent = `0${textsArr1.length}`;

  lastSwitchText.textContent = lastTitleArr1[lastCurrentIndex];
  lastSwitchDiscr.textContent = lastDiscrArr1[lastCurrentIndex];
  lastCount.textContent = `0${lastCurrentIndex + 1}`;

  hiddenList.classList.remove("hidden");
  message.classList.add("hidden");

  driverHidden.forEach((el) => el.classList.add("hidden"));
  clientHidden.forEach((el) => el.classList.remove("hidden"));
});

driver.addEventListener("click", function () {
  switcher.forEach((it) => (it.checked = true));
  lastSwitcher.forEach((it) => (it.checked = true));

  client.classList.remove("active-light_box-btn");
  driver.classList.add("active-light_box-btn");

  word1.forEach((otherEl) => otherEl.classList.remove("label--isActive"));
  word2.forEach((otherEl) => otherEl.classList.add("label--isActive"));

  lastWord1.forEach((otherEl) => otherEl.classList.remove("label--isActive2"));
  lastWord2.forEach((otherEl) => otherEl.classList.add("label--isActive2"));

  currentIndex = 0;
  lastCurrentIndex = 0;

  switchText.textContent = textsArr2[currentIndex];
  count.textContent = `0${currentIndex + 1}`;
  total.textContent = `0${textsArr2.length}`;

  lastSwitchText.textContent = lastTitleArr2[lastCurrentIndex];
  lastSwitchDiscr.textContent = lastDiscrArr2[lastCurrentIndex];
  lastCount.textContent = `0${lastCurrentIndex + 1}`;

  hiddenList.classList.remove("hidden");
  message.classList.add("hidden");

  driverHidden.forEach((el) => el.classList.remove("hidden"));
  clientHidden.forEach((el) => el.classList.add("hidden"));
});

const lastBtnBack_board2 = document.querySelector(".last-btn_back");
const lastBtnNext_board2 = document.querySelector(".last-btn_next");
let currentIn = 0;

function changeBoard2Text(step) {
  currentIn += step;
  if (currentIn < 0) {
    currentIn = listOfScene.length - 1;
  } else if (currentIn >= listOfScene.length - 1) {
    currentIn = 0;
  }
  const content_board2 = document.querySelector(".big-board-subtitle_2_2");
  const img_board2 = document.querySelector(".big-board-img_2_2");
  const count_board2 = document.querySelector(".num_box-num-text_2_2");

  content_board2.textContent = listOfScene[currentIn].title;
  img_board2.src = listOfScene[currentIn].img;
  count_board2.textContent = `0${currentIn + 1}`;
}

lastBtnBack_board2.addEventListener("click", function () {
  changeBoard2Text(-1);
});

lastBtnNext_board2.addEventListener("click", function () {
  changeBoard2Text(1);
});

const lastBtnBack_board5 = document.querySelector(".last-btn-board5_back");
const lastBtnNext_board5 = document.querySelector(".last-btn-board5_next");
let currentIn5 = 0;

function changeBoard5Text(step) {
  currentIn5 += step;
  if (currentIn5 < 0) {
    currentIn5 = listOfSceneBoard5.length - 1;
  } else if (currentIn5 >= listOfSceneBoard5.length - 1) {
    currentIn5 = 0;
  }
  const content_board5 = document.querySelector(".big-board-subtitle_5_2");
  const img_board5 = document.querySelector(".big-board-img_5_2");
  const count_board5 = document.querySelector(".num_box-num-text_5_2");

  content_board5.textContent = listOfSceneBoard5[currentIn5].title;
  img_board5.src = listOfSceneBoard5[currentIn5].img;
  count_board5.textContent = `0${currentIn5 + 1}`;
}

lastBtnBack_board5.addEventListener("click", function () {
  changeBoard5Text(-1);
});

lastBtnNext_board5.addEventListener("click", function () {
  changeBoard5Text(1);
});
