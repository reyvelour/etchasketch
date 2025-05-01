//global variables
const container = document.querySelector('.gridContainer');
const input = document.getElementById('number');
const button = document.getElementById('submit');

//creating the grid
function createGrid(size) {
    container.innerHTML = '';
    
    const totalSquares = size * size;
    const squareSize = 512 / size;

    for (i = 0 ; i < totalSquares ; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseenter', function() {
            square.style.backgroundColor = 'pink';
        });

        container.appendChild(square);
    }
}

createGrid(16);

button.addEventListener('click', function() {
    const newSize = parseInt(input.value);

    if (isNaN(newSize) || newSize < 2 || newSize > 100) {
        alert("Please enter a number between 2 and 100.");
        return; 
      }
   
    createGrid(newSize);
});

// for (i = 0 ; i < rows * cols ; i++) {
//     const square = document.createElement('div');
//     square.classList.add('square');
//     //coloring when hovering
//     square.addEventListener('mouseenter', function() {
//     square.style.backgroundColor = "pink";
//  });
//     container.appendChild(square);
// }

