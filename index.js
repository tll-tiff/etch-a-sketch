const gridContainerDimension = 910;


let gridContainer = document.querySelector('#grid-container');
let newGridBtn = document.querySelector("#new-grid-btn");


newGridBtn.addEventListener('click', promptUser);

function promptUser(){
    clearGrid();
    numOfSquares = prompt("How many squares per side?");
    generateGrid(numOfSquares);
}

function clearGrid(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function generateGrid(numOfSquares){
    for (var i = 0; i < numOfSquares * numOfSquares; i++){
        let gridSquare = document.createElement("div");
        let gridSquareDimension = (gridContainerDimension/numOfSquares);
        console.log("square dimensions: " + gridSquareDimension);
        gridSquare.style.width = gridSquareDimension + 'px';
        gridSquare.style.height = gridSquareDimension + 'px';
        gridSquare.classList.add("grid-square");
        gridContainer.appendChild(gridSquare);

        gridSquare.addEventListener('mouseenter', ()=> gridSquare.style.backgroundColor = "black");
        gridSquare.addEventListener('mouseleave', ()=> gridSquare.style.backgroundColor = getRandomColor());
    }

}

function getRandomColor() {
    // Generate random values for red, green, and blue components
    var r = Math.floor(Math.random() * 256); // Random number between 0 and 255
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Convert the RGB components to a hexadecimal color code
    var hexColor = "#" + r.toString(16).padStart(2, '0') +
                          g.toString(16).padStart(2, '0') +
                          b.toString(16).padStart(2, '0');

    return hexColor;
}


/* document.addEventListener('keypress', function(event){
    if((event.key).toLowerCase() == 'c'){
        promptUser();
    };
}); */