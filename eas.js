const gridContainer = document.querySelector('#gridContainer');
//create etch-a-sketch grid
const createGrid = (gridSize = 10) => {
    //create grid div, append to container
    const grid = document.createElement('div');
    grid.classList.add('grid');
    gridContainer.append(grid);
    //declare column and row arrays
    const column = [];
    const row = [];
    //create column and row divs
    for(let i=0; i<gridSize; i++){
        column[i] = document.createElement('div');
        column[i].classList.add('column');
        for(let j=0; j<gridSize; j++){
            row[j] = document.createElement('div');
            row[j].classList.add('element');
            column[i].append(row[j]);
        }
        grid.append(column[i]);
    }
    //add etch event listener
    grid.addEventListener('mouseover', e => {
        e.target.classList.add('etch');
    });
};

//call create grid
createGrid();

//clear grid function
const clearGrid = () => {
    const elementList = document.querySelectorAll('.element');
    elementList.forEach(element => {
        element.classList.remove('etch');           
    });
};
//clear grid button
const clearGridButton = document.querySelector('#clearGridButton');
clearGridButton.addEventListener('click', clearGrid);

//remove grid function
const removeGrid = () => {
    const grid = document.querySelector('.grid');
    grid.remove();
};

//initialize new grid with entered grid size
const newGrid = () => {
    removeGrid();
    let newGridSize = prompt('enter new grid size');
    createGrid(newGridSize);
}
//new grid button
const newGridButton = document.querySelector('#newGridButton');
newGridButton.addEventListener('click', newGrid);