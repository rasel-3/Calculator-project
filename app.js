//INPUTS
const added = document.getElementById("added");
const input = document.getElementById("input");
// RESULT
const result = document.getElementById("result");
// BUTTONS
const add = document.getElementById("add");
const substract = document.getElementById("substract");
const multiplication = document.getElementById("multiplication");
const divition = document.getElementById("divition");
// EQUAL BUTTON
const equal = document.getElementById("equal");

let addedValue = 0; // 100
let formula = ""; // +

function functionality(inp, f) {
  addedValue = inp;
  formula = f;

  input.value = null;
  added.innerText = inp +" "+ f;
}

function calculation(inp2) {
  let rs = 0;

  if (formula === "+") {
    rs = addedValue + inp2;
  } 
  else if (formula === "-") {
    rs = addedValue - inp2;
  } 
  else if (formula === "*") {
    rs = addedValue * inp2;
  } 
  else {
    rs = addedValue / inp2;
  }

  result.innerText = rs;
}

add.addEventListener("click", () => {
  functionality(parseFloat(input.value), "+");
});
substract.addEventListener("click", () => {
  functionality(parseFloat(input.value), "-");
});
multiplication.addEventListener("click", () => {
  functionality(parseFloat(input.value), "*");
});
divition.addEventListener("click", () => {
  functionality(parseFloat(input.value), "/");
});

equal.addEventListener("click", () => {
  calculation(parseFloat(input.value));
});
