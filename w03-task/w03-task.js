/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}
function addNumbers() {
    let number1 = Number(document.getElementById("add1").value);
    let number2 = Number(document.getElementById("add2").value);

    document.getElementById("sum").value = add(number1, number2);
}
document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function(number1, number2) {
    return number1 - number2;
  };
let  subtractNumbers = function(){
    let number1 = Number(document.getElementById("subtract1").value);
    let number2 = Number(document.getElementById("subtract2").value);

    document.getElementById("difference").value = subtract(number1, number2);
}
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let  multiplyNumbers = () => {
    let number1 = Number(document.getElementById("factor1").value);
    let number2 = Number(document.getElementById("factor1").value);
    document.getElementById("product").value = multiply(number1, number2);
}
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => {
    return number1 / number2
}

let divideNumbers = () => {
    let number1 = Number(document.getElementById("dividend").value);
    let number2 = Number(document.getElementById("divisor").value);
    document.getElementById("quotient").value = divide(number1, number2);
}
document.getElementById("divideNumbers").addEventListener("click", divideNumbers)

/* Decision Structure */
function getTotalDue() {
    const checkbox = document.getElementById("member");
    let numeric = document.getElementById("subtotal").value
    const totalElement = document.getElementById("total")
    if (checkbox.checked) {
        numeric = numeric - numeric * 0.2
        totalElement.innerText = `$${numeric.toFixed(2)}`
    } else {
        numeric *= 1
        totalElement.innerText = `$${numeric.toFixed(2)}`
    }
  }
document.getElementById("getTotal").addEventListener("click", getTotalDue);

/* ARRAY METHODS - Functional Programming */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.getElementById("array").innerHTML = numbers;
/* Output Odds Only Array */
document.getElementById("odds").innerHTML = numbers.filter(number => number % 2 === 1);
/* Output Evens Only Array */
document.getElementById("evens").innerHTML = numbers.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = numbers.reduce((acc, value) => acc + value);
/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = numbers.map(value => value * 2);
/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerHTML = numbers.map(value => value * 2).reduce((acc, value) => acc + value);