const sortingTabs = document.querySelectorAll('.sorting__item--flights');
const sortingLists = document.querySelectorAll('.flight-search-section__wrapper');

sortingTabs.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', function() {
    const currentTab = item;
    const tabId = currentTab.getAttribute('data-tab');
    const currentList = document.querySelector(tabId);

    sortingTabs.forEach(function(item) {
      item.classList.remove('active');
    });

    sortingLists.forEach(function(item) {
      item.classList.remove('flight-search-section__wrapper--active');
    });

    currentTab.classList.add('active');
    currentList.classList.add('flight-search-section__wrapper--active');
  });
};
