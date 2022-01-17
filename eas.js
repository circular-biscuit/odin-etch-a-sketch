//declare column and row arrays
const column = [];
const row = [];

//get container from html
const container = document.querySelector('#container');
// set size of grid
let gridSize = 16;

//create grid of divs
function createGrid(gridSize){
    for(let i=0; i<gridSize; i++){
        column[i] = document.createElement('div');
        column[i].classList.add('column');
        for(let j=0; j<gridSize; j++){
            row[j] = document.createElement('div');
            row[j].classList.add('element');
            row[j].addEventListener('mouseenter', etch);
            column[i].appendChild(row[j]);
        }
        container.appendChild(column[i]);
    }
}

//add etch to hovered over grid square 
function etch(){
    this.style.backgroundColor = 'aquamarine';
}

// const gridPrompt = document.querySelector('#gridPrompt');
// gridPrompt.addEventListener('click', newGrid);

// function newGrid(){
//     gridSize = prompt('how many rows & columns would you like your grid to be (max 100)', '16')
//     clearGrid();
//     createGrid(gridSize);
// }

// //clear original grid when button prompt answered
// function clearGrid({

// })

createGrid(gridSize);