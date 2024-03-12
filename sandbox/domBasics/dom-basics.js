const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImg = document.createElement("img");
newImg.src = 'https://picsum.photos/200'
newImg.alt = 'Description of image'
document.body.appendChild(newImg)

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "CSE 121b";
const newParagraph2 = document.createElement("p");
newParagraph2.innerText = "Welcome to Javascript Language";
newSection.appendChild(newH2);
newSection.appendChild(newParagraph2);
document.body.appendChild(newSection);