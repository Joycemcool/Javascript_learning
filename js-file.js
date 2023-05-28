const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
const redText=document.createElement('p');
const blueText=document.createElement('h3');
const blackBorder=document.createElement('div');
const h1Text=document.createElement('h1');
const meTooText=document.createElement('p');
h1Text.textContent="I'm in a div"
meTooText.textContent='ME TOO'
blackBorder.style.border="2px solid black";
blackBorder.style.borderColor='black';
blackBorder.appendChild(h1Text);
blackBorder.appendChild(meTooText);
redText.textContent='Hey I am red!';
blueText.textContent="I'm a blue h3";
blueText.style.color='blue';
redText.style.cssText='color:red;';
container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueText);
container.appendChild(blackBorder);

//Event
// You can specify function attributes directly on your HTML elements, you can set properties 
// of form on[eventType] (onclick, onmousedown, etc.) on the DOM nodes in your JavaScript, or you can attach event listeners to the DOM nodes in your JavaScript. 

const button = document.createElement("button");
button.id = "myButton";
button.innerText = "Click Me";
// button.onclick = handleButtonClick;

// var container = document.getElementById("buttonContainer");
container.appendChild(button);

// function handleButtonClick() {
//   alert("Button clicked!");
// }

// function buttonFunction() {
//     meTooText.textContent = "play";
// }
const buttonFunctionArrow = () => meTooText.textContent = "Arrowplay";
// button.addEventListener('click',buttonFunction);
button.addEventListener('click',buttonFunctionArrow);

// button.onclick=buttonFunction;

// function alertFunction() {
//     alert("YAY! YOU DID IT!");
//   }

// button.onclick = alertFunction;