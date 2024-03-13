// getting elements
const buttonElement = document.getElementById("submitButton");
const log = document.querySelector("#log");


// setting events
buttonElement.addEventListener("click", copyInput);
document.addEventListener("keydown", logKeydown);
document.addEventListener("keyup", logKeyup);


// Event click
function copyInput(event) {
    console.log(event);
    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = inputElement.value;
  }


// keydown example
function logKeydown(e) {
  // how do we know which key was pressed?
  console.log(e);
  // checkout e.code, e.key, and e.keyCode
  // what is the difference?
}


// keyup example
function logKeyup(e) {
  // how do we know which key was pressed?
  console.log(e);
  // checkout e.code, e.key, and e.keyCode
  // what is the difference?
}