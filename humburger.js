
 function openBurgerMenu() {
    const html = document.querySelector('html');
    const headerBurgerButton = document.querySelector('.hamburger');
    const mobileNavigationMenu = document.querySelector('.header__navigation');
    const headerNavigationList = document.querySelector('.navigation');
  
    function openMenu() {
      mobileNavigationMenu.classList.toggle('open');
      headerBurgerButton.classList.toggle('open');
      html.classList.toggle('overlay');
      window.addEventListener('click', closeClickListener);
      window.addEventListener('keydown', closeKeydownListener);
    }
  
    function closeMenu() {
      headerBurgerButton.classList.remove('open');
      html.classList.remove('overlay');
      mobileNavigationMenu.classList.remove('open');
      window.removeEventListener('click', closeClickListener);
      window.removeEventListener('keydown', closeKeydownListener);
    }
  
    function closeClickListener(event) {
      // when you click on the button outside the burger menu
      // or on the items inside, the menu will close
      if (
        (!mobileNavigationMenu.contains(event.target)
        && !headerBurgerButton.contains(event.target))
        || headerNavigationList.contains(event.target)
        )
        {
        closeMenu();
        }
    }
  
    function closeKeydownListener(event) {
      if (event.key === 'Escape') {
        closeMenu();
      }
    }
  
    headerBurgerButton.addEventListener('click', openMenu);
  
  }


  window.onload = function () {
  
    openBurgerMenu();
    
  };