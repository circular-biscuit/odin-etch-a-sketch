//declare column and row arrays
const column = [];
const row = [];
// set size of grid
let gridSize = 16;
//query selects
const container = document.querySelector('#container');
const newGridButton = document.querySelector('#newGridButton');
const clearGridButton = document.querySelector('#clearGridButton');
const removeGridButton = document.querySelector('#removeGridButton');
// const columnList = document.querySelectorAll('.column');
const columnList = document.getElementsByClassName('column');
// const rowList = document.querySelectorAll('.row');
const rowList = document.getElementsByClassName('row');

//event listeners
newGridButton.addEventListener('click', newGrid);
clearGridButton.addEventListener('click', clearGrid);
removeGridButton.addEventListener('click', removeGrid);

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
    // this.style.backgroundColor = 'aquamarine';
    this.classList.add('etch');
}

//initialize new grid with entered grid size
function newGrid(){
    gridSize = prompt('how many rows & columns would you like your grid to be (max 100)');
    if(gridSize !== null && gridSize<=100){
        removeGrid();
        createGrid(gridSize);
    }
}

//initialize blank grid
function clearGrid(){
    console.log('i am a clear grid button');
    for(let i=0; i<rowList.length; i++){
        // rowList[i].classList.add('initialize');
        rowList[i].style.backgroundColor = 'crimson';
    }
}

//remove grid
function removeGrid(){
    console.log('i am a remove grid button');
    for(let i=0; i<rowList.length; i++){
        rowList[i].remove();
    }
}

createGrid(gridSize);