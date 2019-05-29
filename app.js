const h2 = document.querySelector('h2');
let color = 155;
let letterColor = 100;

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 38) {
    if (color < 255) {
      color++;
      letterColor--;
      console.log(color, letterColor);
    }
  } else if (e.keyCode === 40) {
    if (color > 0) {
      color--;
      letterColor++;
      console.log(color, letterColor);
    }
  }

  document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
  h2.style.color = `rgb(${letterColor}, ${letterColor}, ${letterColor})`;
})