const basicBg = document.getElementById("basicBg");
const secondaryBg = document.getElementById("secondaryBg");
const colorBtn = document.querySelector(".color");
const dropDawnMenu = document.querySelector(".color-input");
const dropDawnBtnClose = document.querySelector(".header__color-close");
const apply = document.querySelector(".header__color-change");

const root = document.documentElement;
// Function to change a specific color variable
// Example usage:
// changeColor('--main-col', 'rgb(200, 200, 200)');
function changeColor(variableName, newColor) {
  root.style.setProperty(variableName, newColor);
}

// buttons
colorBtn.addEventListener("click", () => {
  if (dropDawnMenu.classList.contains("hidden")) {
    dropDawnMenu.classList.remove("hidden");
    colorBtn.classList.add("hidden");
  }
});

dropDawnBtnClose.addEventListener("click", () => {
  dropDawnMenu.classList.add("hidden");
  colorBtn.classList.remove("hidden");
});

apply.addEventListener("click", () => {
  const basicColor = basicBg.value;
  const secondaryColor = secondaryBg.value;
  changeColor("--main-col", basicColor);
  changeColor("--text-col", secondaryColor);
});

const fontFamilySelect = document.getElementById("font-family");
const customFontFamilyInput = document.getElementById("custom-font-family");
const btnBg = document.querySelector(".btn-bg ");
const colorText = document.querySelector(".color-input-text");
const fontFamilyText = document.querySelector(".font-family");
fontFamilySelect.addEventListener("change", () => {
  const selectedFont = fontFamilySelect.value;
  //   console.log(selectedFont);
  document.body.style.fontFamily = selectedFont;
  btnBg.style.fontFamily = "Times New Roman";
  colorText.style.fontFamily = "Times New Roman";
  fontFamilyText.style.fontFamily = "Times New Roman";
});

// customFontFamilyInput.addEventListener("input", () => {
//   const customFont = customFontFamilyInput.value;

//   // Применить пользовательский шрифт к элементам на странице
// });

// img upload
document
  .getElementById("uploadFileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const imgElement = document.getElementById("uploadedImage");
      imgElement.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });
document
  .getElementById("uploadFileInput0")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const imgElement = document.getElementById("uploadedImage0");
      imgElement.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });
document
  .getElementById("uploadFileInput1")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const imgElement = document.getElementById("uploadedImage1");
      imgElement.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });
document
  .getElementById("uploadFileInput2")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const imgElement = document.getElementById("uploadedImage2");
      imgElement.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });
document
  .getElementById("uploadFileInput3")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const imgElement = document.getElementById("uploadedImage3");
      imgElement.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });

//   drop dawn menu tiggle button
const toggleCheckbox = document.getElementById("toggle");
toggleCheckbox.addEventListener("change", handleToggleChange);
const overPhotoText = document.querySelectorAll(".photo-box__text");
function handleToggleChange() {
  // Дейтствие при переключении тумблера
  const isChecked = this.checked; // Получаем состояние тумблера

  if (isChecked) {
    overPhotoText.forEach((text) => {
      text.style.color = "white";
      text.style.background = "rgba(0, 0, 0, 0.5)";
      text.style.padding = "10px";
    });
  } else {
    overPhotoText.forEach((text) => {
      text.style.color = "black";
      text.style.background = "rgba(255, 255, 255, 0.5)";
      text.style.padding = "10px";
    });
  }
}
