const heroFormTabs = document.querySelectorAll('.hero-form__tab');
const heroForms = document.querySelectorAll('.hero-form__wrapper');

heroFormTabs.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', function() {
    const currentTab = item;
    const tabId = currentTab.getAttribute('data-tab');
    const currentForm = document.querySelector(tabId);

    heroFormTabs.forEach(function(item) {
      item.classList.remove('active');
    });

    heroForms.forEach(function(item) {
      item.classList.remove('hero-form__wrapper--active');
    });

    currentTab.classList.add('active');
    currentForm.classList.add('hero-form__wrapper--active');
  });
};
