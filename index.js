const container = document.querySelector(".container");
const gridButton = document.querySelector("#submit-grid");
const clearGridButton = document.querySelector("#clear-grid");
const gridWidth = document.querySelector("#width-range");
const gridHeight = document.querySelector("#height-range");
const colorButton = document.querySelector("#color-input");
const eraseBtn = document.querySelector("#erase-btn");
const eraseAll = document.querySelector("#erase-all");
const paintBtn = document.querySelector("#paint-btn");
const widthValue = document.querySelector("#width-value");
const heightValue = document.querySelector("#height-value");

let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType = "";

let draw = false;
let erase = false;

var isTouchDevise = () => {
  try {
    document.createElement("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

gridButton.addEventListener("click", () => {
  container.innerHTML = "";
  count = 0;
  for (i = 0; i < gridHeight.value; i++) {
    count += 2;
    let div = document.createElement("div");
    div.classList.add("gridRow");

    for (let j = 0; j < gridWidth.value; j++) {
      count += 2;
      let col = document.createElement("div");
      col.classList.add("gridCol");
      col.setAttribute("id", `gridCol${count}`);
      col.addEventListener(events[deviceType].down, () => {
        draw = true;
        if (erase) {
          col.style.backgroundColor = "transparent";
        } else {
          col.style.backgroundColor = colorButton.value;
        }
      });
      div.appendChild(col);
    }
    container.appendChild(div);
  }
});

gridWidth.addEventListener("input", () => {
  widthValue.innerHTML =
    gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
});

gridHeight.addEventListener("input", () => {
  heightValue.innerHTML =
    gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;
});

window.onload = () => {
  gridHeight.value = 0;
  gridWidth.value = 0;
};
