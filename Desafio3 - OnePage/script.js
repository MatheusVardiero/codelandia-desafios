const cards = document.querySelectorAll('.cards');
const resetColor = document.querySelector('#btnReset');
const main = document.querySelector('.main');

cards.forEach(card => {
  card.addEventListener('click', changeBackgroundColor);
  const backgroundColor =  card.querySelector('.card-color').getAttribute('data-background');
  card.querySelector('.card-color').style.backgroundColor = backgroundColor;
  console.log('background', backgroundColor);
})

function changeBackgroundColor() {
  const _this = this;
  const color = _this.querySelector('.card-color').getAttribute('data-background');

  main.style.backgroundColor = color;
}

resetColor.addEventListener('click', resetBackgroundColor => {
  main.style.backgroundColor = '#FFFFFF';
})
