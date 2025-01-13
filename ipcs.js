
//acessing elements by id
const heading = document.getElementById("main-heading");

heading.textContent="Welcome to IPCS";

const heading2 = document.getElementById("main-heading2");
heading2.textContent="anjum here";



//acessing elements by class name
const paragraphs = document.getElementsByClassName("paragraph");

for (let i = 0; i <paragraphs.length; i++) {
    console.log(paragraphs.length);

paragraphs[i].style.color = "red";
}



//acessing elements by tag name
const listItems = document.getElementsByTagName("li");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].textContent = `Item ${i + 1}`;
}



//acessing elements by query selector
const firsParagraph = document.querySelector(".paragraph");

firsParagraph.style.backgroundColor = "blue";
firsParagraph.style.color = "white";


//acessing elements by query selector all
const allParagraphs = document.querySelectorAll(".paragraph");

allParagraphs.forEach((para)=>{
    para.classList.add("highlight");
});


//adding elements 
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph of the document."; 
document.body.appendChild(newParagraph);


//dropdown example


//removing elements

const elementToRemove = document.querySelector(".paragraph");
elementToRemove.remove();











//EVENTS


//click
const button = document.getElementById("button");
button.addEventListener("click", () => {
  alert("Button clicked!");
});

//double click
const doubleButton = document.getElementById("double-button");
doubleButton.addEventListener("dblclick", () => {
  alert("Double button clicked!");
});