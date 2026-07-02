const main = document.querySelector("main");
const h1 = document.querySelector("h1");

const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");

const englishButton = document.getElementById("englishButton");
const hindiButton = document.getElementById("hindiButton");
const gujaratiButton = document.getElementById("gujaratiButton");

num1.addEventListener("click", function () {
  main.style.transform = "translate(19.5%, 1.5%)";
});

num2.addEventListener("click", function () {
  main.style.transform = "translate(40%, -7%)";
});

num3.addEventListener("click", function () {
  main.style.transform = "translate(36%, -50.5%)";
});

num4.addEventListener("click", function () {
  main.style.transform = "translate(20%, -24%)";
});

num5.addEventListener("click", function () {
  main.style.transform = "translate(15%, -53%)";
});

num6.addEventListener("click", function () {
  main.style.transform = "translate(-1%, -27%)";
});

num7.addEventListener("click", function () {
  main.style.transform = "translate(-15%, -55%)";
});

num8.addEventListener("click", function () {
  main.style.transform = "translate(-33%, -36%)";
});

num9.addEventListener("click", function () {
  main.style.transform = "translate(-32%, -5%)";
});

h1.addEventListener("mouseenter", function () {
  num1.style.scale = "1";
  num2.style.scale = "1";
  num3.style.scale = "1";
  num4.style.scale = "1";
  num5.style.scale = "1";
  num6.style.scale = "1";
  num7.style.scale = "1";
  num8.style.scale = "1";
  num9.style.scale = "1";
});

function openvideo() {
  const wrapper = document.querySelector(".video-wrapper");
  const video = wrapper.querySelector("video");

  video.src = "assets/videos/mother_love.mp4";

  wrapper.classList.remove("hidden");
  video.play();
}

function closevideo1() {
  const wrapper = document.querySelector(".video-wrapper");
  const video = wrapper.querySelector("video");

  video.pause();
  video.src = "";

  wrapper.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "English";

  updateText(savedLanguage);
  applyLanguageStyles(savedLanguage);
});

function applyLanguageStyles(language) {
  const buttons = document.querySelectorAll(".translate-button");

  buttons.forEach(function (btn) {
    btn.classList.remove("active");
  });

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

englishButton.addEventListener("click", function () {
  updateText("English");
  applyLanguageStyles("English");
});

hindiButton.addEventListener("click", function () {
  updateText("Hindi");
  applyLanguageStyles("Hindi");
});

gujaratiButton.addEventListener("click", function () {
  updateText("Gujrati");
  applyLanguageStyles("Gujrati");
});

function updateText(language) {
  localStorage.setItem("selectedLanguage", language);

  fetch("json/data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const langData = data[language];

      h1.textContent = langData.t1;

      document.querySelector(".t1").textContent = langData.uncon1;
      document.querySelector(".t2").textContent = langData.uncon2;
      document.querySelector(".t3").textContent = langData.uncon3;
      document.querySelector(".t4").textContent = langData.uncon4;
      document.querySelector(".t5").textContent = langData.uncon5;
      document.querySelector(".t6").textContent = langData.uncon6;
      document.querySelector(".t7").textContent = langData.uncon7;
      document.querySelector(".t8").textContent = langData.uncon8;

      // No t10. Final question is kept in t9.
      document.querySelector(".t9").textContent = langData.uncon9;

      for (let i = 1; i <= 9; i++) {
        const numberElement = document.querySelector(`.num${i}`);

        if (numberElement) {
          numberElement.textContent = langData[`num${i}`];
        }
      }
    })
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });
}
