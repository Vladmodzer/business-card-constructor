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
