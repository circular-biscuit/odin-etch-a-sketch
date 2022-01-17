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

//call create grid
createGrid(gridSize);

//add etch to hovered over grid square 
function etch(){
    this.classList.remove('initialize');
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
    for(let i=0; i<elementList.length; i++){
        elementList[i].classList.remove('etch');
        elementList[i].classList.add('initialize');
        // elementList[i].style.backgroundColor = 'crimson';
    }
}

//remove grid
function removeGrid(){
    console.log('i am a remove grid button');
    for(let i=0; i<elementList.length; i++){
        elementList[i].remove();
    }
}



const columnList = document.querySelectorAll('.column');
const elementList = document.querySelectorAll('.element');