//global variables
const container = document.querySelector('.gridContainer');
const rows = 16;
const cols = 16;

//creating the grid
for (i = 0 ; i < rows * cols ; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    //coloring when hovering
    square.addEventListener('mouseenter', function() {
    square.style.backgroundColor = "pink";
 });
    container.appendChild(square);
}

