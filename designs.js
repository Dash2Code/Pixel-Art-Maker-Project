// Select color input
const colorPicker = document.getElementById('colorPicker');

// Select size input
const canvas = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');

// Function for click event to cell and and change color
function clickCell(event) {
  event.target.style.backgroundColor = colorPicker.value;
}

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  // Starts off on a clean canvas
  canvas.innerHTML = '';
  // Creates an empty DocumentFragment so that nodes can be inserted later
  const fragment = document.createDocumentFragment();

    // Loop to create rows
  for (let i = 0; i < gridHeight.value; i++) {
    const row = document.createElement('tr');
  // Loop to create cells and append to row
    for (let j = 0; j < gridWidth.value; j++) {
      const cell = document.createElement('td');
      row.appendChild(cell);
    }

    // Add click event to cells
    row.addEventListener('click', clickCell);
    // Append the row to Fragment
    fragment.appendChild(row);
  }
  //Append fragment to canvas
  canvas.appendChild(fragment);
};

// Add click event to submit
sizePicker.addEventListener('submit', clickSubmit);

// Function for click event to submit
function clickSubmit(event) {
  event.preventDefault();
  makeGrid();
}
