const subnavToggle = document.querySelector('.nav__button');

if (subnavToggle !== null) {
  const subnav = document.querySelector('.subnav');

  subnavToggle.addEventListener('click', function(event) {
    event.preventDefault();
    
    subnav.classList.toggle('open');
  });
}
