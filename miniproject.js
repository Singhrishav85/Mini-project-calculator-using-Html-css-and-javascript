let a = document.getElementById("first");
let b = document.getElementById("second");
let answer = document.getElementById("answer");

function add() {
  let x = document.getElementById("first").value;
  let y = document.getElementById("second").value;
  let s = parseInt(x);
  let g = parseInt(y);
  let c = s + g;
  answer.innerHTML = c;
}

function sub() {
  let c = a.value - b.value;
  answer.innerHTML = c;
}

function multiply() {
  let c = a.value * b.value;
  answer.innerHTML = c;
}

function divide() {
  let c = a.value / b.value;
  answer.innerHTML = c;
}

function reminder() {
  let c = a.value % b.value;
  answer.innerHTML = c;
}

function reset() {
  answer.innerHTML = "Answer";
}
