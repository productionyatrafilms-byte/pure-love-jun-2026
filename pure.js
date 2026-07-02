const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')
const num3 = document.querySelector('.num3')
const num4 = document.querySelector('.num4')
const num5 = document.querySelector('.num5')
const num6 = document.querySelector('.num6')
const num7 = document.querySelector('.num7')
const num8 = document.querySelector('.num8')
const num9 = document.querySelector('.num9')
const num10 = document.querySelector('.num10')
const num = document.querySelector('span')
const main = document.querySelector('main')
const h1 = document.querySelector('h1')

num1.addEventListener('click', function () {
    main.style.transform = "translate( 29%, 2%)"
})

num2.addEventListener('click', function () {
    main.style.transform = "translate( 36%, -24%)"
})

num3.addEventListener('click', function () {
    main.style.transform = "translate( 36%, -53%)"
})

num4.addEventListener('click', function () {
    main.style.transform = "translate( 12%, -30%)"
})

num5.addEventListener('click', function () {
    main.style.transform = "translate( 11%, -56%)"
})

num6.addEventListener('click', function () {
    main.style.transform = "translate( -10%, -56%)"
})

num7.addEventListener('click', function () {
    main.style.transform = "translate( -13%, -29%)"
})

num8.addEventListener('click', function () {
    main.style.transform = "translate( -35%, -54%)"
})

num9.addEventListener('click', function () {
    main.style.transform = "translate( -37%, -22%)"
})

num10.addEventListener('click', function () {
    main.style.transform = "translate( -31%, 4%)"
})

h1.addEventListener('mouseenter', function () {
    num1.style.scale = '1'
    num2.style.scale = '1'
    num3.style.scale = '1'
    num4.style.scale = '1'
    num5.style.scale = '1'
    num6.style.scale = '1'
    num7.style.scale = '1'
    num8.style.scale = '1'
    num9.style.scale = '1'
    num10.style.scale = '1'
})

function openvideo() {
  const wrapper = document.querySelector(".video-wrapper");
  const video = wrapper.querySelector("video");

  // Set your video source
  video.src = "assets/videos/pure_love.mp4";

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
            const t3 = data[language].t3;
            const pure1 = data[language].pure1;
            const pure2 = data[language].pure2;
            const pure3 = data[language].pure3;
            const pure4 = data[language].pure4;
            const pure5 = data[language].pure5;
            const pure6 = data[language].pure6;
            const pure7 = data[language].pure7;
            const pure8 = data[language].pure8;
            const pure9 = data[language].pure9;
            const pure10 = data[language].pure10;
            const num1 = data[language].num1;
            const num2 = data[language].num2;
            const num3 = data[language].num3;
            const num4 = data[language].num4;
            const num5 = data[language].num5;
            const num6 = data[language].num6;
            const num7 = data[language].num7;
            const num8 = data[language].num8;
            const num9 = data[language].num9;
            const num10 = data[language].num10;
            // Update the DOM
            document.querySelector("h1").textContent = t3;
            document.querySelector(".t1").textContent = pure1;
            document.querySelector(".t2").textContent = pure2;
            document.querySelector(".t3").textContent = pure3;
            document.querySelector(".t4").textContent = pure4;
            document.querySelector(".t5").textContent = pure5;
            document.querySelector(".t6").textContent = pure6;
            document.querySelector(".t7").textContent = pure7;
            document.querySelector(".t8").textContent = pure8;
            document.querySelector(".t9").textContent = pure9;
            document.querySelector(".t10").textContent = pure10;
            document.querySelector(".num1").textContent = num1;
            document.querySelector(".num2").textContent = num2;
            document.querySelector(".num3").textContent = num3;
            document.querySelector(".num4").textContent = num4;
            document.querySelector(".num5").textContent = num5;
            document.querySelector(".num6").textContent = num6;
            document.querySelector(".num7").textContent = num7;
            document.querySelector(".num8").textContent = num8;
            document.querySelector(".num9").textContent = num9;
            document.querySelector(".num10").textContent = num10;
        })
        .catch((error) => console.error("Error fetching data:", error));
}