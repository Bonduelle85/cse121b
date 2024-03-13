// Activity 1
const stringNumbers = ["one", "two", "three"];

let myList = document.getElementById("myList");

  // without map
stringNumbers.forEach(step => {
  let listItem = document.createElement("li");
  listItem.textContent = step;
  myList.appendChild(listItem);
});

  // with map
const htmlNumbersWithMap = stringNumbers.map(function (number, index, array) {
  return `<li>${number}, with index ${index}, from array [${array}]</li>`;
});
myList.innerHTML = htmlNumbersWithMap.join("");

  // without map + array function
const htmlNumbersWithMapArrow = stringNumbers.map(number => 
  `<li>${number}</li>`);
myList.innerHTML = htmlNumbersWithMapArrow.join("");


// Activity 2
const grades = ['A', 'B', 'A'];
const gpas = grades.map( grade => {
  let gpa
  switch(grade) {
    case 'A':
      gpa = 4
      break;
    case 'B':
      gpa = 3
      break;
    case 'C':
      gpa = 2
      break;
    case 'D':
      gpa = 1
      break;
    default:
      gpa = 0
  }
  return gpa
});

  // Solution with function
function gradesToGpas(grade){
  switch(grade) {
    case 'A':
      return 4
    case 'B':
      return 3
    case 'C':
      return 2
    case 'D':
      return 1
    default:
      return 0
  }
}


// Activity 3
const gpaPoints = grades.map(gradesToGpas);
const avrGpa = gpaPoints.reduce((acc, value) => (acc + value) / gpaPoints.length);


// Activity 4
const goods = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const moreSixCharGoods = goods.filter(good => good.length > 6);


// Activity 5
const numbers = [12, 34, 21, 54];
const luckNumber = 21;
const index = numbers.indexOf(luckNumber);

console.log(index);