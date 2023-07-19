
const menu = document.querySelector('.links');
const hamburger = document.querySelector('.navlinks-mobile');

hamburger.addEventListener('click', function(e) {
  menu.classList.toggle('show');
});

menu.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    menu.classList.remove('show');
  }
});