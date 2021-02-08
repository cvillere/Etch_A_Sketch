const containerDiv = document.body.querySelector(".container");
const numberToSquare = 16;
const squaredNumber = Math.pow(numberToSquare, 2);

const buttonDiv = document.querySelector(".user")

function restart () {
  
}

function generateChildDivs () {
  for (i = 0; i < squaredNumber; i++) {
    const childDiv = document.createElement("div");
    childDiv.classList.add("cDiv")
    containerDiv.appendChild(childDiv);
  }

}

generateChildDivs();
document.documentElement.style.setProperty('--columnsRowsValue', numberToSquare);

//Change the color of the divs on hover
const divs = document.querySelectorAll(".cDiv");
[...divs].forEach(e => 
  e.addEventListener('mouseenter', e => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    e.target.style.backgroundColor = bgColor;
}));

[...divs].forEach(e => 
  e.addEventListener('mouseleave', e => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    e.target.style.backgroundColor = bgColor;
}));

//stopped on the button
  //will need button to refresh the page
  //accept a prompt and assign the input to 
  //numberToSquare Variable
  //Add a check to ensure user doesn't input neg. number,
  //zero, or number above 100. 

