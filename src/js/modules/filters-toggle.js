const filtersSectionToggles = document.querySelectorAll('.filter__collapse-button');
const filterSections = document.querySelectorAll('.filters__filter');

filterSections.forEach(onToggleClick);

function onToggleClick(item) {
  const currentFilterSection = item;
  const filterSectionToggle = currentFilterSection.querySelector('.filter__collapse-button');

  filterSectionToggle.addEventListener('click', function(event) {
    event.preventDefault();

    const filtersContent = currentFilterSection.querySelector('.filter__content');
    
    filtersContent.classList.toggle('close');
    filterSectionToggle.classList.toggle('collapse');
  });
};
