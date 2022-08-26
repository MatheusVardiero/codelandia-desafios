const cards = document.querySelectorAll('.cards');

cards.forEach(card => {
  card.addEventListener('click', changeBackgroundColor);
  const backgroundColor =  card.querySelector('.card-color').getAttribute('data-background');
  card.querySelector('.card-color').style.backgroundColor = backgroundColor;
  console.log('background', backgroundColor);
})

function changeBackgroundColor() {
  let main = document.querySelector('.main');
  const _this = this;
  const color = _this.querySelector('.card-color').getAttribute('data-background');

  main.style.backgroundColor = color;

}
