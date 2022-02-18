// бургер меню
const menuIcon = document.querySelector('.header__menu-icon');
const headerMenu = document.querySelector('.header__menu');
   if (menuIcon) {      
      menuIcon.addEventListener("click", function(){
         document.body.classList.toggle('_lock');
         menuIcon.classList.toggle('_active');
         headerMenu.classList.toggle('_active');
      });
   }

// прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (menuIcon.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				menuIcon.classList.remove('_active');
				headerMenu.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

   // slick слайдер
   $(document).ready(function(){
      $('.slider').slick({
         arrows:true         
      });
    })

   //  magnific popup
    $(document).ready(function() {
      $('.popup-gallery').magnificPopup({
         delegate: 'a', // child items selector, by clicking on it popup will open
         type: 'image',
         // other options
         gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
       });
    });
   

