// start time styles

const passgenBtn = document.querySelector("#passgen");
passgenBtn.style.background = "var(--button-clicked-color-lightTheme)";
const passgenIcon = passgenBtn.querySelector("i");
passgenIcon.style.color = "white";

const passgenMenu = document.getElementById("passgenMenu");
passgenMenu.style.display = "flex";

const encodingMenu = document.getElementById("encodingMenu");
encodingMenu.style.display = "none";

const decodingMenu = document.getElementById("decodingMenu");
decodingMenu.style.display = "none";
var isDark = false;
// base code
document.getElementById("lightThemeIcon").style.color = "white";
document.getElementById("lightThemeIcon").style.background =
  "var(--background-dark-color)";
const encodeBtn = document.querySelector("#encoding");
const encodeIcon = encodeBtn.querySelector("i");

const decodeBtn = document.querySelector("#decoding");
const decodeIcon = decodeBtn.querySelector("i");

passgenBtn.addEventListener("click", () => {
  if (!isDark) {
    passgenBtn.style.background = "var(--button-clicked-color-lightTheme)";
    passgenIcon.style.color = "white";
    encodeBtn.style.background = "var(--button-disabled-color-lightTheme)";
    encodeIcon.style.color = "black";
    decodeBtn.style.background = "var(--button-disabled-color-lightTheme)";
    decodeIcon.style.color = "black";
    passgenMenu.style.display = "flex";
    encodingMenu.style.display = "none";
    decodingMenu.style.display = "none";
  } else {
    passgenIcon.style.color = "black";
    decodeIcon.style.color = "var(--background-dark-color)";
    encodeIcon.style.color = "var(--background-dark-color)";
    passgenBtn.style.background = "var(--button-clicked-color-darkTheme)";
    encodeBtn.style.background = "var(--button-disabled-color-darkTheme)";
    decodeBtn.style.background = "var(--button-disabled-color-darkTheme)";
    passgenMenu.style.display = "flex";
    encodingMenu.style.display = "none";
    decodingMenu.style.display = "none";
  }
});
encodeBtn.addEventListener("click", () => {
  if (!isDark) {
    encodeBtn.style.background = "var(--button-clicked-color-lightTheme)";
    encodeIcon.style.color = "white";
    passgenBtn.style.background = "var(--button-disabled-color-lightTheme)";
    passgenIcon.style.color = "var(--background-dark-color)";
    decodeBtn.style.background = "var(--button-disabled-color-lightTheme)";
    decodeIcon.style.color = "var(--background-dark-color)";
    encodingMenu.style.display = "flex";
    passgenMenu.style.display = "none";
    decodingMenu.style.display = "none";
  } else {
    encodeBtn.style.background = "var(--button-clicked-color-darkTheme)";
    encodeIcon.style.color = "black";
    passgenBtn.style.background = "var(--button-disabled-color-darkTheme)";
    passgenIcon.style.color = "var(--background-dark-color)";
    decodeBtn.style.background = "var(--button-disabled-color-darkTheme)";
    decodeIcon.style.color = "var(--background-dark-color)";
    encodingMenu.style.display = "flex";
    passgenMenu.style.display = "none";
    decodingMenu.style.display = "none";
  }
});
decodeBtn.addEventListener("click", () => {
  if (!isDark) {
    passgenBtn.style.background = "var(--button-disabled-color-lightTheme)";
    passgenIcon.style.color = "black";
    encodeBtn.style.background = "var(--button-disabled-color-lightTheme)";
    encodeIcon.style.color = "black";
    decodeBtn.style.background = "var(--button-clicked-color-lightTheme)";
    decodeIcon.style.color = "white";
    decodingMenu.style.display = "flex";
    passgenMenu.style.display = "none";
    encodingMenu.style.display = "none";
  } else {
    passgenBtn.style.background = "var(--button-disabled-color-darkTheme)";
    passgenIcon.style.color = "var(--background-dark-color)";
    encodeBtn.style.background = "var(--button-disabled-color-darkTheme)";
    encodeIcon.style.color = "var(--background-dark-color)";
    decodeBtn.style.background = "var(--button-clicked-color-darkTheme)";
    decodeIcon.style.color = "black";
    decodingMenu.style.display = "flex";
    passgenMenu.style.display = "none";
    encodingMenu.style.display = "none";
  }
});

document.getElementById("lightThemeIcon").addEventListener("click", () => {
  isDark = false;
  document.getElementById("lightThemeIcon").style.display = "none";
  document.getElementById("darkThemeIcon").style.display = "block";
  document.querySelectorAll("*")[0].style.background =
    "var(--background-light-color)";
  document.querySelector("body").style.background =
    "var(--background-light-color)";
  document.querySelector("body>div").style.background =
    "var(--background-light-color)";
  document.querySelector(".menuIcons").style.background =
    "var(--background-light-color)";
  document.querySelector(".logo").style.background =
    "var(--background-light-color)";
  document.querySelector(".logo").style.color = "black";
  const passgenMenu = document.getElementById("passgenMenu");
  passgenMenu.style.display = "flex";

  const encodingMenu = document.getElementById("encodingMenu");
  encodingMenu.style.display = "none";

  const decodingMenu = document.getElementById("decodingMenu");
  decodingMenu.style.display = "none";
  passgenBtn.style.background = "var(--button-clicked-color-lightTheme)";
  passgenIcon.style.color = "white";
  encodeBtn.style.background = "var(--button-disabled-color-lightTheme)";
  encodeIcon.style.color = "black";
  decodeBtn.style.background = "var(--button-disabled-color-lightTheme)";
  decodeIcon.style.color = "black";
  passgenMenu.style.display = "flex";
  encodingMenu.style.display = "none";
  decodingMenu.style.display = "none";
});
document.getElementById("darkThemeIcon").addEventListener("click", () => {
  isDark = true;
  document.getElementById("darkThemeIcon").style.display = "none";
  document.getElementById("lightThemeIcon").style.display = "block";
  document.querySelectorAll("*")[0].style.background =
    "var(--background-dark-color)";
  document.querySelector("body").style.background =
    "var(--background-dark-color)";
  document.querySelector("body>div").style.background =
    "var(--background-dark-color)";
  document.querySelector(".menuIcons").style.background =
    "var(--background-dark-color)";
  document.querySelector(".logo").style.background =
    "var(--background-dark-color)";
  document.querySelector(".logo").style.color = "white";
  const passgenMenu = document.getElementById("passgenMenu");
  passgenMenu.style.display = "flex";

  const encodingMenu = document.getElementById("encodingMenu");
  encodingMenu.style.display = "none";

  const decodingMenu = document.getElementById("decodingMenu");
  decodingMenu.style.display = "none";
  passgenIcon.style.color = "black";
  decodeIcon.style.color = "var(--background-dark-color)";
  encodeIcon.style.color = "var(--background-dark-color)";
  passgenBtn.style.background = "var(--button-clicked-color-darkTheme)";
  encodeBtn.style.background = "var(--button-disabled-color-darkTheme)";
  decodeBtn.style.background = "var(--button-disabled-color-darkTheme)";
  passgenMenu.style.display = "flex";
  encodingMenu.style.display = "none";
  decodingMenu.style.display = "none";
});

// password generating systems

document.getElementById("passwordGenerateBtn").addEventListener("click", () => {
  passwordGenerating();
});
function passwordGenerating() {
  var i = 0;
  var lowercaseBool = document.getElementById("Lowercase-pass").checked,
    upercaseBool = document.getElementById("Upercase-pass").checked,
    numbersBool = document.getElementById("Numbers-pass").checked,
    symbolsBool = document.getElementById("Symbols-pass").checked,
    exduplicateBool = document.getElementById("ExcludeDuplicate-pass").checked,
    includeSpaceBool = document.getElementById("includeSpaces-pass").checked;
  const lowerCases = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const uperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*_=";
  var passwordLengthInput = document.getElementById("passwordLengthInput");
  var passwordLength = passwordLengthInput.value;
  var useableChars = "";
  var result = "";
  if (lowercaseBool) {
    useableChars += lowerCases;
  }
  if (upercaseBool) {
    useableChars += uperCase;
  }
  if (numbersBool) {
    useableChars += numbers;
  }
  if (symbolsBool) {
    useableChars += symbols;
  }
  if (includeSpaceBool) {
    useableChars += " ";
  }
  if (!lowercaseBool && !upercaseBool && !numbersBool) {
    alert("Please Active Checkboxes in Option !");
  } else {
    while (i < passwordLength) {
      let x = Math.floor(Math.random() * useableChars.length - 1);

      result += useableChars[x];
      i++;
    }
    if (exduplicateBool) {
      result = result
        .split("")
        .filter((char, index, array) => array.indexOf(char) === index)
        .join("");
    }
    document.getElementById("generateResultInput").value = result;
  }
}
document.getElementById("copy-password").addEventListener("click", () => {
  navigator.clipboard.writeText(
    document.getElementById("generateResultInput").value
  );
});
// encoding tasks
document.getElementById("EncodBtn").addEventListener("click", () => {
  encodingTask();
});
function encodingTask() {
  var encodingResult = "";
  var enteredData = document.getElementById("entered-encoding-string").value;
  var selectedEncodingItem = document.getElementById(
    "encoding-list-items"
  ).selectedIndex;
  if (selectedEncodingItem == 0) {
    encodingResult = btoa(enteredData);
  } else if (selectedEncodingItem == 1) {
    encodingResult = encodeURIComponent(enteredData);
  } else if (selectedEncodingItem == 2) {
    encodingResult = enteredData
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  } else if (selectedEncodingItem == 3) {
    var resultHex = "";
    var hex, i;
    for (i = 0; i < enteredData.length; i++) {
      hex = enteredData.charCodeAt(i).toString(16);
      resultHex += ("000" + hex).slice(-4);
    }
    encodingResult = resultHex;
  } else if (selectedEncodingItem == 4) {
    encodingResult = enteredData
      .split("")
      .map((c) => c.charCodeAt(0).toString(2))
      .join(" ");
  } else if (selectedEncodingItem == 5) {
    encodingResult = encodeURIComponent(enteredData).replace(/%/g, "=");
  } else if (selectedEncodingItem == 6) {
    var resultASCIIEn = enteredData.split("");
    resultASCIIEn.forEach((element) => {
      encodingResult += element.charCodeAt(0) + " ";
    });
    encodingResult = encodingResult.slice(0, -1);
  }
  document.getElementById("resutl-encoding").value = encodingResult;
}
document.getElementById("encoded-copy").addEventListener("click", () => {
  navigator.clipboard.writeText(
    document.getElementById("resutl-encoding").value
  );
});

// decryppting task

document.getElementById("decode-btn").addEventListener("click", () => {
  decodingTask();
});
function decodingTask() {
  var decodingResult = "";
  var enteredDecodingData = document.getElementById(
    "entered-decode-string"
  ).value;
  var selecteddecodingItem = document.getElementById(
    "decoding-list-items"
  ).selectedIndex;
  if (selecteddecodingItem == 0) {
    decodingResult = atob(enteredDecodingData);
  } else if (selecteddecodingItem == 1) {
    decodingResult = decodeURIComponent(enteredDecodingData);
  } else if (selecteddecodingItem == 2) {
    decodingResult = enteredDecodingData
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"');
  } else if (selecteddecodingItem == 3) {
    var hexString = enteredDecodingData;
    var strOut = "";
    for (x = 0; x < hexString.length; x += 2) {
      strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
    }
    var decodeRes = "";
    for (let b = -1; b < strOut.length; b += 2) {
      decodeRes += strOut[b];
    }
    decodeRes = decodeRes.replace("undefined", "");
    decodingResult = decodeRes;
  } else if (selecteddecodingItem == 4) {
    decodingResult = enteredDecodingData
      .split(" ")
      .map((bin) => String.fromCharCode(parseInt(bin, 2)))
      .join("");
  } else if (selecteddecodingItem == 5) {
    decodingResult = decodeURIComponent(enteredDecodingData).replace(/=/g, "%");
  } else if (selecteddecodingItem == 6) {
    var resultASCIIDe = enteredDecodingData.split(" ");
    resultASCIIDe.forEach((element) => {
      decodingResult += String.fromCharCode(parseInt(element));
    });
  }
  document.getElementById("result-decoding").value = decodingResult;
}
document.getElementById("copy-decoded").addEventListener("click", () => {
  navigator.clipboard.writeText(
    document.getElementById("result-decoding").value
  );
});
