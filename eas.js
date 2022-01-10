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
            row[j].addEventListener('mouseenter', () => etch(i, j));
            column[i].appendChild(row[j]);
        }
        container.appendChild(column[i]);
    }
}
// for(let i=0; i<gridSize; i++){
//     column[i];
//     for(let j=0; j<gridSize; j++){
//         row[j].addEventListener('mouseenter', () => etch(j));
//     }
// }

//add etch to hovered over grid square 
function etch(i, j){
    row[j].style.backgroundColor = 'aquamarine';
}

// const gridPrompt = document.querySelector('#gridPrompt');
// gridPrompt.addEventListener('click', newGrid);

// function newGrid(){
//     gridSize = prompt('how many rows & columns would you like your grid to be (max 100)')
//     clearGrid();
//     createGrid(gridSize);
// }

// //clear original grid when button prompt answered
// function clearGrid({

// })

createGrid(gridSize);