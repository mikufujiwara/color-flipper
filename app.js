const vividColors = [
  "#F90D1B",
  "#FE6006",
  "#FDE005",
  "#EC00FC",
  "#9D00FE",
  "#00CF35",
  "#D91D81",
  "#D91D81",
  "#D91D81",
  "#FF0000",
  "#00FFFF",
];
const pastelColors = [
  "#ca9bf7",
  "#ff9899",
  "#ffb7ce",
  "#fdfd96",
  "#f4bfff",
  "#c8ffb0",
  "#d6fffe",
  "#cef0cc",
  "#aa9499",
  "#bdb0d0",
  "#deece1",
];

let left = document.getElementById("left");
let right = document.getElementById("right");
let colorCode1 = document.getElementById("colorcode1");
let colorCode2 = document.getElementById("colorcode2");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const reset1 = document.getElementById("reset1");
const reset2 = document.getElementById("reset2");
const hex1 = document.getElementById("hex1");
const hex2 = document.getElementById("hex2");
const delay = 500;
let timeoutID;

const vColorHandler = () => {
  clearTimeout(timeoutID);
  const randomV = Math.floor(Math.random() * vividColors.length);
  const pickVcolor = vividColors[randomV];
  left.style.background = pickVcolor;
  colorCode1.innerHTML = pickVcolor;
};

const pColorHandler = () => {

  clearTimeout(timeoutID);
  const randomP = Math.floor(Math.random() * pastelColors.length);
  const pickPcolor = pastelColors[randomP];
  right.style.background = pickPcolor;
  colorCode2.innerHTML = pickPcolor;
};

const resetHandler1 = () => {

  clearTimeout(timeoutID);
  left.style.background = "white";
  colorCode1.innerHTML = "#ffffff";
};
const resetHandler2 = () => {

  clearTimeout(timeoutID);
  right.style.background = "white";
  colorCode2.innerHTML = "#ffffff";
};

const hexhandler1 = () => {
  const randomV = Math.floor(Math.random() * vividColors.length);
  const pickVcolor = vividColors[randomV];
  left.style.background = pickVcolor;
  timeoutID = setTimeout(hexhandler1, delay);
};

const hexhandler2 = () => {
  const randomP = Math.floor(Math.random() * pastelColors.length);
  const pickPcolor = pastelColors[randomP];
  right.style.background = pickPcolor;
  timeoutID = setTimeout(hexhandler2, delay);
};

btn1.addEventListener("click", vColorHandler);
btn2.addEventListener("click", pColorHandler);
reset1.addEventListener("click", resetHandler1);
reset2.addEventListener("click", resetHandler2);
hex1.addEventListener("click", hexhandler1);
hex2.addEventListener("click", hexhandler2);
