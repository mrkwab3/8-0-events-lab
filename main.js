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
const cells = document.querySelectorAll('.cell')

// Within the colors in the palette, if a color div is clicked, the current colors background will be changed to the color of the div clicked
for (color of paletteColors) {
  color.addEventListener('click', (event) => {
    currentColor.style.background = event.target.style.background
  })
}






