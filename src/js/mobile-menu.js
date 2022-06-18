(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuBtnOne = document.querySelector('.closeMenuBtnOne');
  const closeMenuBtnTwo = document.querySelector('.closeMenuBtnTwo');
  const closeMenuBtnThree = document.querySelector('.closeMenuBtnThree');
  const closeMenuBtnFour = document.querySelector('.closeMenuBtnFour');
  const closeMenuBtnFive = document.querySelector('.closeMenuBtnFive');
  const heroBtn = document.querySelector('.heroBtn');
  const btnbuymob = document.querySelector('.nav-tools__button');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
    heroBtn.classList.toggle('hiddenBtn')
  };
  
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtnOne.addEventListener('click', toggleMenu);
  closeMenuBtnTwo.addEventListener('click', toggleMenu);
  closeMenuBtnThree.addEventListener('click', toggleMenu);
  closeMenuBtnFour.addEventListener('click', toggleMenu);
  closeMenuBtnFive.addEventListener('click', toggleMenu);
  btnbuymob.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
