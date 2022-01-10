//declare column and row arrays
const column = [];
const row = [];

//get container from html
const container = document.querySelector('#container');

// set size of grid
let gridSize = 16;

//create grid of divs
for(let i=0; i<gridSize; i++){
    column[i] = document.createElement('div');
    column[i].classList.add('column');
    for(let j=0; j<gridSize; j++){
        row[j] = document.createElement('div');
        row[j].classList.add('row');
        // row[j].textContent = ('r' + (j+1)); 
        column[i].appendChild(row[j]);
    }
    //column[i].textContent = 'c' + (i+1);
    container.appendChild(column[i]);
}

