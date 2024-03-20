function countSelected(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  document.getElementById("countSelected").innerText = `${countSelected(
    musicTypes
  )} option(s).`;
});

// Check Your Understanding
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// for
for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

// while
let i = 0
while (i < studentReport.length){
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++
}

// forEach =>
studentReport.forEach(num => {
  if (num < LIMIT) {
    console.log(num);
  }
})

// forEach function
studentReport.forEach(function (item) {
  if (item < LIMIT) {
    console.log(item);
  }
});

// for in
for (let i in studentReport) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}


// Get Future Days from Today

const DAYS = 6;

const htmlList = document.getElementsByTagName("ul");
// Intl.DateTimeFormat Options
const options = { weekday: 'long'}; // vs. short, etc.

const today = new Date();
// TODAY test output
let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);

document.getElementById('today').innerHTML = `Today is ${todaystring}. `;

// next n days
for (let i = 1; i <= DAYS; i++ ) {
	let nextDay = new Date();
	nextDay.setDate(today.getDate() + i);

	let nextDayString = new Intl.DateTimeFormat('en-US', options).format(nextDay);
	listItem = document.createElement("li"); // list item
	listItem.textContent = nextDayString;
	htmlList[0].appendChild(listItem);
}
