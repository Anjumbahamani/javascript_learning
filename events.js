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


//mouse over
const highlight = document.getElementById("highlight");
highlight.addEventListener("mouseover", () => {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((paragraph) => {
    paragraph.style.backgroundColor = "red";
  });
});

function geeks() {
    alert("Mouse move over");
}


//mouse enter and leave 

const box = document.querySelector(".box");

box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "green";
    box.textContent = "Mouse entered!";
});

box.addEventListener("mouseleave",()=>{
    box.style.backgroundColor="red";
    box.textContent="Again hover over me";
});


//keyup and keydown
const output = document.getElementById("output");
 document.addEventListener("keydown", (event)=>{
    output.textContent = `key "${event.key}" was pressed`;
 });

 document.addEventListener("keyup",(event)=>{
    output.textContent = `key "${event.key}" was released`;
 });

//submit event

const form = document.getElementById("myForm");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    alert("Form submitted!");
    console.log("Form submitted!");
});


//Focus
const inputField = document.getElementById("email");

inputField.addEventListener("focus", ()=>{
    console.log("Input field focused");
});


//Blur
inputField.addEventListener("blur", ()=>{
    console.log("Input field blurred");
});

//Change
 const colorSelect = document.getElementById("color");
 const message = document.getElementById("message");

 colorSelect.addEventListener("change",function () {
const selectedColor = colorSelect.value;
message.textContent = `You selected ${selectedColor}`;
 })