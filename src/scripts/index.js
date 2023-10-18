var button = document.getElementById("button");
var textToReplance = document.getElementById("status");
var languageSelect = document.getElementsByName("language")[0];

// Define the text for different languages
var textOn = {
  en: "ON",
  uk: "УВІМКНЕНО",
  de: "EIN",
  "zh-CN": "开",
};

var textOff = {
  en: "OFF",
  uk: "ВИМКНЕНО",
  de: "AUS",
  "zh-CN": "关",
};

// Define the text for different parts of the webpage
var pageText = {
  en: {
    mainTitle: "DTMA YouTube",
    protectionStatus: "The protection is",
    sourceCodeLink: "Source Code",
    supportLink: "Support us",
  },
  uk: {
    mainTitle: "DTMA YouTube",
    protectionStatus: "Захист",
    sourceCodeLink: "Вихідний код",
    supportLink: "Підтримайте нас",
  },
  de: {
    mainTitle: "DTMA YouTube",
    protectionStatus: "Der Schutz ist",
    sourceCodeLink: "Quellcode",
    supportLink: "Unterstütze uns",
  },
  "zh-CN": {
    mainTitle: "DTMA YouTube",
    protectionStatus: "保护是",
    sourceCodeLink: "源代码",
    supportLink: "支持我们",
  },
};

var language = languageSelect.value;

// Update the text according to the selected language
function updateText() {
  var isChecked = button.checked;
  textToReplance.innerHTML = isChecked ? textOn[language] : textOff[language];
  textToReplance.style.color = isChecked ? "green" : "red";

  // Update text for different parts of the webpage
  document.querySelector("h1").textContent = pageText[language].mainTitle;
  // Update the <p> without removing the <span> inside
  document.querySelector("p").firstChild.textContent =
    pageText[language].protectionStatus + " ";
  document.querySelector('a[target="_blank"]').textContent =
    pageText[language].sourceCodeLink;
  document.querySelector(
    'a[href="https://github.com/iSaulX/DTMA-YouTube/CONTRIBUTING.md"]'
  ).textContent = pageText[language].supportLink;
}

button.onclick = function () {
  var isChecked = button.checked;
  localStorage.setItem("isActive", isChecked);
  updateText();
};

// Listen for changes in the language selection
languageSelect.onchange = function () {
  language = languageSelect.value;
  localStorage.setItem("language", language);
  updateText();
};

if (localStorage.getItem("language")) {
  language = localStorage.getItem("language");
  languageSelect.value = language;
  updateText();
}

// Get the stored value of isActive
var isActive = localStorage.getItem("isActive");
button.checked = isActive === "true";
updateText();
