const filtersSectionToggles = document.querySelectorAll('.filters__collapse-button');
const filterSections = document.querySelectorAll('.filters__group');

filterSections.forEach(onToggleClick);

function onToggleClick(item) {
  const currentFilterSection = item;
  const filterSectionToggle = currentFilterSection.querySelector('.filters__collapse-button');

  filterSectionToggle.addEventListener('click', function(event) {
    event.preventDefault();

    const filtersContent = currentFilterSection.querySelector('.filters__filter-content');
    
    filtersContent.classList.toggle('close');
    filterSectionToggle.classList.toggle('collapse');
  });
};
