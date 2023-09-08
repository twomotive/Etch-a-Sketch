const sizepicker = document.querySelector("#sizepicker");
const board = document.querySelector(".board");
const reset = document.querySelector("#clear");
const color = document.querySelector("#colorpicker");
const showsize = document.querySelector("#size");

sizepicker.addEventListener("input", function () {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => cell.remove());
  return createGrid(sizepicker.value);
});

function createGrid(size) {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", function () {
      cell.style.backgroundColor = color.value;
    });
    board.appendChild(cell);
  }
}

sizepicker.addEventListener("input", function () {
  showsize.textContent = ` ${sizepicker.value} x ${sizepicker.value}`;
});

reset.addEventListener("click", function () {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => (cell.style.backgroundColor = "white"));
});

createGrid(16);
