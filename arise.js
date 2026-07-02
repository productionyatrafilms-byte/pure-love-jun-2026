const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')
const num3 = document.querySelector('.num3')
const num4 = document.querySelector('.num4')
const num5 = document.querySelector('.num5')
const num6 = document.querySelector('.num6')
const num = document.querySelector('span')
const main = document.querySelector('main')
const h1 = document.querySelector('h1')

num1.addEventListener('click', function () {
    main.style.transform = "translate( 25%, -12%)"
})

num2.addEventListener('click', function () {
    main.style.transform = "translate( 37%, -46%)"
})

num3.addEventListener('click', function () {
    main.style.transform = "translate( 2%, -36%)"
})

num4.addEventListener('click', function () {
    main.style.transform = "translate( -37%, -45%)"
})

num5.addEventListener('click', function () {
    main.style.transform = "translate( -34.5%, -13%)"
})

num6.addEventListener('click', function () {
    main.style.transform = "translate( -24.5%, 6%)"
})

h1.addEventListener('mouseenter', function () {
    num1.style.scale = '1'
    num2.style.scale = '1'
    num3.style.scale = '1'
    num4.style.scale = '1'
    num5.style.scale = '1'
    num6.style.scale = '1'
})


// Add this to initialize the page with stored language
document.addEventListener('DOMContentLoaded', function () {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'English';
  updateText(savedLanguage);
   applyLanguageStyles(savedLanguage);
});

function applyLanguageStyles(language) {
  const buttons = document.querySelectorAll('.translate-button');
  buttons.forEach(btn => btn.classList.remove('active'));

 if (language === "English") {
    document.body.style.fontFamily = '"customFont", sans-serif';
    englishButton.classList.add('active');
     
  } else if (language === "Hindi") {
    document.body.style.fontFamily = '"hindi", sans-serif';
    hindiButton.classList.add('active');
     
  } else if (language === "Gujrati") {
    document.body.style.fontFamily = '"gujratiFont", sans-serif';
    gujaratiButton.classList.add('active');
    
  }
}

const englishButton = document.getElementById("englishButton");
const hindiButton = document.getElementById("hindiButton");
const gujaratiButton = document.getElementById("gujaratiButton");

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
        localStorage.setItem('selectedLanguage', language);
    fetch("json/data.json")
        .then((response) => response.json())
        .then((data) => {
            // Access the English title
            const t4 = data[language].t4;
            const arise1 = data[language].arise1;
            const arise2 = data[language].arise2;
            const arise3 = data[language].arise3;
            const arise4 = data[language].arise4;
            const arise5 = data[language].arise5;
            const arise6 = data[language].arise6;
            const num1 = data[language].num1;
            const num2 = data[language].num2;
            const num3 = data[language].num3;
            const num4 = data[language].num4;
            const num5 = data[language].num5;
            const num6 = data[language].num6;
            // Update the DOM
            document.querySelector("h1").textContent = t4;
            document.querySelector(".t1").textContent = arise1;
            document.querySelector(".t2").textContent = arise2;
            document.querySelector(".t3").textContent = arise3;
            document.querySelector(".t4").textContent = arise4;
            document.querySelector(".t5").textContent = arise5;
            document.querySelector(".t6").textContent = arise6;
            document.querySelector(".num1").textContent = num1;
            document.querySelector(".num2").textContent = num2;
            document.querySelector(".num3").textContent = num3;
            document.querySelector(".num4").textContent = num4;
            document.querySelector(".num5").textContent = num5;
            document.querySelector(".num6").textContent = num6;
        })
        .catch((error) => console.error("Error fetching data:", error));
}