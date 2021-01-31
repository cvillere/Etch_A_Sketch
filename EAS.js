const containerDiv = document.body.querySelector(".container");
const numberToSquare = 16;
const squaredNumber = 256;

function generateChildDivs () {
  for (i = 0; i < squaredNumber; i++) {
    const childDiv = document.createElement("div");
    containerDiv.appendChild(childDiv);
  }

}

