window.onload = function () {
  gsap.to(".clouds", {
    y: "100%",
    duration: 3,
    delay: 1,
  });
};

const englishButton = document.getElementById("englishButton");
const hindiButton = document.getElementById("hindiButton");
const gujaratiButton = document.getElementById("gujaratiButton");

const headingOne = document.querySelector(".container h1");

// Add this to initialize the page with stored language
document.addEventListener("DOMContentLoaded", function () {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "English";
  updateText(savedLanguage);
  applyLanguageStyles(savedLanguage);
});

function applyLanguageStyles(language) {
  const buttons = document.querySelectorAll(".translate-button");
  buttons.forEach((btn) => btn.classList.remove("active"));

  if (language === "English") {
    document.body.style.fontFamily = '"customFont", sans-serif';
    headingOne.style.marginBottom = "0vw";
    englishButton.classList.add("active");
  } else if (language === "Hindi") {
    document.body.style.fontFamily = '"hindi", sans-serif';
    headingOne.style.marginBottom = "1vw";
    hindiButton.classList.add("active");
  } else if (language === "Gujrati") {
    document.body.style.fontFamily = '"gujratiFont", sans-serif';
    headingOne.style.marginBottom = "2vw";
    gujaratiButton.classList.add("active");
  }
}

// Event listeners for each language button
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
  localStorage.setItem("selectedLanguage", language);

  fetch("json/data.json")
    .then((response) => response.json())
    .then((data) => {
      const title = data[language].title;
      const title2 = data[language].title2;

      document.querySelector("h1").textContent = title;
      document.querySelector("h2").textContent = title2;
    })
    .catch((error) => console.error("Error fetching data:", error));
}
