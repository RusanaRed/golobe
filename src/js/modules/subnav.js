const subnav = document.querySelector('.subnav');
const subnavToggle = document.querySelector('.nav__button');

subnavToggle.addEventListener('click', function(event) {
  event.preventDefault();
  
  subnav.classList.toggle('open');
})
