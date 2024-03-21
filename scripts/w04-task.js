/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Anton Gorokhov",
  photo: "images/photo.jpg",
  favoriteFoods: ["Fried eggs", "Salad", "Chewing Marmalade", "Pasta"],
  hobbies: ["Snowboarding", "Listening to Music", "Computer Games", "Travel"],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
// array of places:
let places = [
  { place: "Moscow", length: "1 year" },
  { place: "Perm", length: "10 years" },
  { place: "Tchaikovsky", length: "8 years" },
  { place: "Kueda", length: "5 years" },
];
// adding places to myProfile.placesLived:

places.forEach(place => {
    myProfile.placesLived.push(place);
  });
console.log(myProfile.placesLived);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = `Photo of ${myProfile.name}`;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let liElement = document.createElement("li");
    liElement.textContent = food
    document.querySelector("#favorite-foods").appendChild(liElement)
})
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let liElement = document.createElement("li");
    liElement.textContent = hobby
    document.querySelector("#hobbies").appendChild(liElement)
})
/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dtElement = document.createElement("dt")
    dtElement.textContent = placeLived.place
    document.querySelector("#places-lived").appendChild(dtElement)
    
    let ddElement = document.createElement("dd")
    ddElement.textContent = placeLived.length
    document.querySelector("#places-lived").appendChild(ddElement)
})
