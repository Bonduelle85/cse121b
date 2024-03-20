myInfo = {
  name: "Brother T",
  photo: "images/photo.jpg",
  favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
  hobbies: ["Reading", "Fishing", "Camping"],
  placesLived: [
    {
      place: "Rexburg, ID",
      length: "5 years",
    },
    {
      place: "Ammon, ID",
      length: "3 years",
    },
    {
      place: "Sandy, UT",
      length: "1 year",
    },
  ],
};


// Activity 1

    // My Solution forEach
myInfo.favoriteFoods.forEach((element) => {
  let favoriteFood = document.createElement("li");
  favoriteFood.textContent = element;
  document.querySelector("#favorite-foods").appendChild(favoriteFood);
});

    // My Solution map
myInfo.favoriteFoods.map((element) => {
  let favoriteFood = document.createElement("li");
  favoriteFood.textContent = element;
  document.querySelector("#favorite-foods").appendChild(favoriteFood);
});



// // Sample Solutions 
// const foodsElement = document.querySelector('#favorite-foods');

// // with .forEach

// function createandAppendFoodItem(food) {
//   let favoriteFood = document.createElement('li');
//   favoriteFood.textContent = food;
//   foodsElement.appendChild(favoriteFood);
// }

// // with .map
//   function mapFoodItem(food) {
//     let favoriteFood = document.createElement('li');
//     favoriteFood.textContent = food;
//     return favoriteFood;
//   }
//   // this function could also be written this way using a template literal:
//   function mapFoodItemSmall(food) {
//     return `<li>${food}</li>`;
//   }
//   const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
//   // we need to flatten the array of strings into one big string. .join does this.
//   foodsElement.innerHTML = foodListElements.join('');

// Activity 2
const foodsElement = document.querySelector("#favorite-foods");
    // !!! String Template
        // The map example could be simplified as below:
const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food} (string template)</li>`);
        // we need to flatten the array of strings into one big string. .join does this.
foodsElement.innerHTML = foodListElements.join("");

    // !!! One Line + String Template
        // OR we could in fact simplify this down to one line!
document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
  .map((food) => `<li>${food} (string template + one line)</li>`)
  .join("");


// Activity 3
const placesElement = document.querySelector("#places-lived");

// requires a list, and a callback that will produce an html string for each item in the list
// returns a string of html
function generateListMarkup(list, templateCallback) {
  const htmlList = list.map(templateCallback);
  return htmlList.join("");
}
// requires an food string
// returns that string embedded in HTML markup
function foodsTemplate(food) {
  return `<li>${food}</li>`;
}

// requires an place string
// returns that string embedded in HTML markup
function placesTemplate(place) {
  return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = generateListMarkup(
  myInfo.favoriteFoods,
  foodsTemplate
);
placesElement.innerHTML = generateListMarkup(
  myInfo.placesLived,
  placesTemplate
);