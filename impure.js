const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num = document.querySelector("span");
const main = document.querySelector("main");
const h1 = document.querySelector("h1");

num1.addEventListener("click", function () {
  main.style.transform = "translate(22%, -1%)";
});

num2.addEventListener("click", function () {
  main.style.transform = "translate(38%, -44%)";
});

num3.addEventListener("click", function () {
  main.style.transform = "translate(14%, -34%)";
});

num4.addEventListener("click", function () {
  main.style.transform = "translate(-11%, -44%)";
});

num5.addEventListener("click", function () {
  main.style.transform = "translate(-35%, -30%)";
});

num6.addEventListener("click", function () {
  main.style.transform = "translate(-24%, 0%)";
});

h1.addEventListener("mouseenter", function () {
  num1.style.scale = "1";
  num2.style.scale = "1";
  num3.style.scale = "1";
  num4.style.scale = "1";
  num5.style.scale = "1";
  num6.style.scale = "1";
});

const englishButton = document.getElementById("englishButton");
const hindiButton = document.getElementById("hindiButton");
const gujaratiButton = document.getElementById("gujaratiButton");

document.addEventListener("DOMContentLoaded", function () {
  let savedLanguage = localStorage.getItem("selectedLanguage") || "English";

  if (savedLanguage === "Gujarati") {
    savedLanguage = "Gujrati";
  }

  updateText(savedLanguage);
  applyLanguageStyles(savedLanguage);
});

function applyLanguageStyles(language) {
  if (language === "Gujarati") {
    language = "Gujrati";
  }

  const buttons = document.querySelectorAll(".translate-button");
  buttons.forEach((btn) => btn.classList.remove("active"));

  if (language === "English") {
    document.body.style.fontFamily = '"customFont", sans-serif';
    englishButton.classList.add("active");
  } else if (language === "Hindi") {
    document.body.style.fontFamily = '"hindi", sans-serif';
    hindiButton.classList.add("active");
  } else if (language === "Gujrati") {
    document.body.style.fontFamily = '"gujratiFont", sans-serif';
    gujaratiButton.classList.add("active");
  }
}

englishButton.addEventListener("click", () => {
  updateText("English");
  applyLanguageStyles("English");
});

hindiButton.addEventListener("click", () => {
  updateText("Hindi");
  applyLanguageStyles("Hindi");
});

gujaratiButton.addEventListener("click", () => {
  updateText("Gujrati");
  applyLanguageStyles("Gujrati");
});

function updateText(language) {
  if (language === "Gujarati") {
    language = "Gujrati";
  }

  localStorage.setItem("selectedLanguage", language);

  fetch("json/data.json")
    .then((response) => response.json())
    .then((data) => {
      const langData = data[language];

      if (!langData) {
        console.error("Language not found in JSON:", language);
        return;
      }

      document.querySelector("h1").textContent = langData.t2 || "";

      document.querySelector(".t1").textContent = langData.imp1 || "";
      document.querySelector(".t2").textContent = langData.imp2 || "";
      document.querySelector(".t3").textContent = langData.imp3 || "";
      document.querySelector(".t4").textContent = langData.imp4 || "";
      document.querySelector(".t5").textContent = langData.imp5 || "";
      document.querySelector(".t6").textContent = langData.imp6 || "";

      document.querySelector(".num1").textContent = langData.num1 || "";
      document.querySelector(".num2").textContent = langData.num2 || "";
      document.querySelector(".num3").textContent = langData.num3 || "";
      document.querySelector(".num4").textContent = langData.num4 || "";
      document.querySelector(".num5").textContent = langData.num5 || "";
      document.querySelector(".num6").textContent = langData.num6 || "";
    })
    .catch((error) => console.error("Error fetching data:", error));
}