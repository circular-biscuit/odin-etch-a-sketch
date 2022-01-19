
function masterMaker(){
    //declare column and row arrays
    const column = [];
    const row = [];
    // set size of grid
    let gridSize = 10;
    let elementHeight = (640/gridSize); 
    //query selects
    const grid = document.querySelector('#grid');
    const newGridButton = document.querySelector('#newGridButton');
    const clearGridButton = document.querySelector('#clearGridButton');
    const removeGridButton = document.querySelector('#removeGridButton');

    //event listeners
    newGridButton.addEventListener('click', newGrid);
    clearGridButton.addEventListener('click', clearGrid);
    removeGridButton.addEventListener('click', removeGrid);

    //call create grid
    createGrid(gridSize);

    //create grid of divs
    function createGrid(gridSize){
        for(let i=0; i<gridSize; i++){
            column[i] = document.createElement('div');
            column[i].classList.add('column');
            for(let j=0; j<gridSize; j++){
                row[j] = document.createElement('div');
                row[j].classList.add('element');
                row[j].style.height = ''
                row[j].addEventListener('mouseenter', etch);
                column[i].appendChild(row[j]);
            }
            grid.appendChild(column[i]);
        }
    }
    //add etch to hovered over grid square 
    function etch(){
        this.classList.remove('initialize');
        this.classList.add('etch');
    }

    const columnList = document.querySelectorAll('.column');
    const elementList = document.querySelectorAll('.element');
    

    //initialize blank grid
    function clearGrid(){
        for(let i=0; i<elementList.length; i++){
            elementList[i].classList.remove('etch');
        }
    }

    //remove grid
    function removeGrid(){
        for(let i=0; i<columnList.length; i++){
            columnList[i].remove();
        }
    }

    //initialize new grid with entered grid size
    function newGrid(){
        // gridSize = prompt('how many rows & columns would you like your grid to be (max 100)');
        // if(gridSize !== null && gridSize<=100){
        //     removeGrid();
        //     createGrid(gridSize);
        // }
        removeGrid();
        masterMaker();
    }

    
}
masterMaker();