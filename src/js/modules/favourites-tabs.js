const favouritesTabs = document.querySelectorAll('.favourites__tab');
const favouritesLists = document.querySelectorAll('.favourites__wrapper');

favouritesTabs.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', function() {
    const currentTab = item;
    const tabId = currentTab.getAttribute('data-tab');
    const currentList = document.querySelector(tabId);

    favouritesTabs.forEach(function(item) {
      item.classList.remove('active');
    });

    favouritesLists.forEach(function(item) {
      item.classList.remove('favourites__wrapper--active');
    });

    currentTab.classList.add('active');
    currentList.classList.add('favourites__wrapper--active');
  });
};
