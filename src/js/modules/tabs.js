const sortingTabs = document.querySelectorAll('.tabs__tab');
const sortingLists = document.querySelectorAll('.tabs__wrapper');

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
      item.classList.remove('tabs__wrapper--active');
    });

    currentTab.classList.add('active');
    currentList.classList.add('tabs__wrapper--active');
  });
};
