const btn = document.getElementById('btn');
const colorSpan = document.getElementById('color');

btn.addEventListener('click', function() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});

// Function to generate a random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(color);
