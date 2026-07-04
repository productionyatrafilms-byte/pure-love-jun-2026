const tl = gsap.timeline();

tl.from(".sheartl", { y: "-100%", duration: 2 }, "a");
tl.from(".sheartr", { y: "-100%", duration: 2 }, "a");
tl.from(".bheartl", { y: "-100%", duration: 2 }, "a");
tl.from(".bheartr", { y: "-100%", duration: 2 }, "a");
tl.from(".middle", { y: "-100%", duration: 2 }, "a");
tl.from(".example", { y: "-100%", duration: 2 }, "a");

tl.to("p", {
  opacity: 1,
});

const englishButton = document.getElementById("englishButton");
const hindiButton = document.getElementById("hindiButton");
const gujaratiButton = document.getElementById("gujaratiButton");

document.addEventListener("DOMContentLoaded", function () {
  let savedLanguage = localStorage.getItem("selectedLanguage") || "English";

  if (savedLanguage === "Gujarati") {
    savedLanguage = "Gujrati";
    localStorage.setItem("selectedLanguage", "Gujrati");
  }

  updateText(savedLanguage);
  applyLanguageStyles(savedLanguage);
});

function applyLanguageStyles(language) {
  const buttons = document.querySelectorAll(".translate-button");
  buttons.forEach((btn) => btn.classList.remove("active"));

  document.body.classList.remove("lang-english", "lang-hindi", "lang-gujarati");

  if (language === "English") {
    document.body.style.fontFamily = '"customFont", sans-serif';
    document.body.classList.add("lang-english");
    englishButton?.classList.add("active");
  } else if (language === "Hindi") {
    document.body.style.fontFamily = '"hindi", sans-serif';
    document.body.classList.add("lang-hindi");
    hindiButton?.classList.add("active");
  } else if (language === "Gujrati") {
    document.body.style.fontFamily = '"gujratiFont", sans-serif';
    document.body.classList.add("lang-gujarati");
    gujaratiButton?.classList.add("active");
  }
}

englishButton?.addEventListener("click", () => {
  updateText("English");
  applyLanguageStyles("English");
});

hindiButton?.addEventListener("click", () => {
  updateText("Hindi");
  applyLanguageStyles("Hindi");
});

gujaratiButton?.addEventListener("click", () => {
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

      const h1Element = document.querySelector("h1");
      const spanElement = h1Element?.querySelector("span");

      if (spanElement) spanElement.textContent = langData.title2 || "";

      if (h1Element && h1Element.childNodes[0]) {
        h1Element.childNodes[0].nodeValue = langData.title || "";
      }

      document.querySelector(".t1").textContent = langData.t1 || "";
      document.querySelector(".t2").textContent = langData.t2 || "";
      document.querySelector(".t3").textContent = langData.t3 || "";
      document.querySelector(".t4").textContent = langData.t4 || "";
      document.querySelector(".t5").textContent = langData.t5 || "";
      document.querySelector(".t6").textContent = langData.t6 || "";
      document.querySelector(".define").textContent = langData.define || "";
    })
    .catch((error) => console.error("Error fetching data:", error));
}
