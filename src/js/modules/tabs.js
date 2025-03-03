const tabsFavourites = document.querySelectorAll('.favourites__tab');
const listsFavourites = document.querySelectorAll('.favourites__tab-wrapper');

tabsFavourites.forEach(onTabClickFavourites);

function onTabClickFavourites(item) {
  item.addEventListener('click', function() {
    const currentTab = item;
    const tabId = currentTab.getAttribute('data-tab');
    const currentList = document.querySelector(tabId);

    tabsFavourites.forEach(function(item) {
      item.classList.remove('active');
    });

    listsFavourites.forEach(function(item) {
      item.classList.remove('tab__wrapper--active');
    });

    currentTab.classList.add('active');
    currentList.classList.add('tab__wrapper--active');
  });
};

const tabsAccount = document.querySelectorAll('.account__tab');
const listsAccount = document.querySelectorAll('.account__tab-wrapper');

tabsAccount.forEach(onTabClickAccount);

function onTabClickAccount(item) {
  item.addEventListener('click', function() {
    const currentTab = item;
    const tabId = currentTab.getAttribute('data-tab');
    const currentList = document.querySelector(tabId);

    tabsAccount.forEach(function(item) {
      item.classList.remove('active');
    });

    listsAccount.forEach(function(item) {
      item.classList.remove('tab__wrapper--active');
    });

    currentTab.classList.add('active');
    currentList.classList.add('tab__wrapper--active');
  });
};
