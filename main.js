// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

let paletteColors = document.querySelectorAll('#palette, .color')
let currentColor = document.querySelector('#current-color')
let cells = document.querySelectorAll('.cell')

// Within the colors in the palette, if a color div is clicked, the current colors background will be changed to the color of the div clicked
for (color of paletteColors) {
  color.addEventListener('click', (event) => {
    currentColor.style.background = event.target.style.background
  })
}

// for (cell of cells) {
//   cell.addEventListener('click', () => {
//     cell.style.background = currentColor.style.background
//   })
// }

// Why does for Each work but not a 'for of' loop?
// For each cell, if the cell is clicked its background color will switch to the color of the current color
cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    cell.style.background = currentColor.style.background
  })
})

// When the button is clicked, all cells will change to the current color
const changeAll = document.querySelector('.changeALL')

changeAll.addEventListener('click', () => {
  cells.forEach((cell) => {
    cell.style.background = currentColor.style.background
  })
})

// When the button is clicked, all cells will be reset to their default color
const resetAll = document.querySelector('.resetALL')

resetAll.addEventListener('click', () => {
  cells.forEach((cell) => {
    cell.style.background = 'white'
  })
})




