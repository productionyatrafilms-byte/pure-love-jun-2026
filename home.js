document.addEventListener('DOMContentLoaded', function () {
  const englishButton = document.getElementById("englishButton");
  const hindiButton = document.getElementById("hindiButton");
  const gujaratiButton = document.getElementById("gujaratiButton");
  const buttons = document.querySelectorAll('.translate-button');

  // Page highlight
//   const currentPage = location.pathname.split("/").pop();
//   const pageMap = {
//     "use.html": "num1",
//     "why.html": "num2",
//     "effect.html": "num3",
//     "what.html": "num4"
//   };
//   const activeId = pageMap[currentPage];
//   if (activeId) {
//     document.getElementById(activeId)?.classList.add("active-page");
//   }

  // Utility: Set language
  function setLanguage(language) {
    localStorage.setItem('selectedLanguage', language);

    // Update images
    if (language === "English") {
      document.querySelector('#img2').src = 'assets/img/home_eng.png';
      document.querySelector('#img1').src = 'assets/img/pranam_eng.png';
    } else if (language === "Hindi") {
      document.querySelector('#img2').src = 'assets/img/home_hindi.png';
      document.querySelector('#img1').src = 'assets/img/pranam_hindi.png';
    } else if (language === "Gujarati") {
      document.querySelector('#img2').src = 'assets/img/home_guj.png';
      document.querySelector('#img1').src = 'assets/img/pranam_guj.png';
    }

    // Update active class
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(language.toLowerCase() + "Button")?.classList.add('active');
  }

  // Load stored language or default to English
  const savedLanguage = localStorage.getItem('selectedLanguage') || "English";
  setLanguage(savedLanguage);

  // Add event listeners to buttons
  englishButton.addEventListener("click", () => setLanguage("English"));
  hindiButton.addEventListener("click", () => setLanguage("Hindi"));
  gujaratiButton.addEventListener("click", () => setLanguage("Gujarati"));

  // Back nav
  document.querySelector('nav i').addEventListener('click', function () {
    // history.back();
    window.location.href = "arise.html";
  });
});

// Animation
gsap.from('main img', {
  scale: 0,
  delay: 0.3
});

// Orientation check
function checkOrientation() {
  if (window.innerHeight > window.innerWidth) {
    alert("For the best experience, please rotate your device to landscape mode.");
  }
}
checkOrientation();
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);
