/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Anton Gorokhov";
let currentYear = 2024;
let profilePicture = "images/photo.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.src = profilePicture;
imageElement.alt = `Profile image of ${fullName}`;

/* Step 5 - Array */
let favoriteFoods = ["Fried eggs", "Salad", "Chewing Marmalade", "Pasta"];
foodElement.innerHTML = favoriteFoods;

let pizza = "Pizza";
favoriteFoods.push(pizza);
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;




