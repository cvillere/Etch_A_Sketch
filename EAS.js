const containerDiv = document.body.querySelector(".container");

function columnCount (cols) {
  let square = Math.pow(cols, 2);
  return square;
}

let initialGrid = columnCount(16);

function generateChildDivs (colNum) {
  for (i = 0; i < colNum; i++) {
    let childDiv = document.createElement("div");
    childDiv.classList.add("cDiv")
    containerDiv.appendChild(childDiv);
    console.log("hello");
  }
}

generateChildDivs(initialGrid);
let columnValue = document.documentElement.style.setProperty('--columnsRowsValue', Math.sqrt(initialGrid));

//Change the color of the divs on hover
let divs = document.querySelectorAll(".cDiv");
let colorChangeIn = [...divs].forEach(e => 
  e.addEventListener('mouseenter', e => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    e.target.style.backgroundColor = bgColor;
}));

let colorChangeOut = [...divs].forEach(e => 
  e.addEventListener('mouseleave', e => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    e.target.style.backgroundColor = bgColor;
}));

function clearGrid () {
  [...divs].forEach(
     e => e.parentNode.removeChild(e));
    }

const restartButton = document.querySelector(".button")
restartButton.addEventListener('click', () => {
  clearGrid();
  let newSquaredNumber = prompt("Please enter a number!")
  console.log(newSquaredNumber);
  if (newSquaredNumber < 1 || newSquaredNumber > 100) {
    alert("Please enter a number between 1 and 100")
  }
  columnValue = document.documentElement.style.setProperty('--columnsRowsValue', newSquaredNumber);
  let squaredNumber = Math.pow(newSquaredNumber, 2);
  generateChildDivs(squaredNumber);
});





