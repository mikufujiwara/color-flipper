const colors = [
  "#6495ed",
  "#4682b4",
  "#f4a460",
  "#cd5c5c",
  "#6a5acd",
  "#3cb371",
  "#2e8b57",
  "#d2b48c",
  "#deb887",
  "#add8e6",
  "#ffa07a",
];
let main = document.querySelector("main");
let colorCode = document.querySelector("span");
const btn = document.querySelector("h2");

const bgColorChanger = () => {
    const randomNum = Math.floor(Math.random() * colors.length);
    const pickColor = colors[randomNum];
    main.style.background = pickColor;
    colorCode.innerHTML = pickColor
};

btn.addEventListener("click", bgColorChanger);
