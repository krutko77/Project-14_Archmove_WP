// // Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// // Подключение списка активных модулей
// import { flsModules } from "./modules.js";

// бургер меню
const iconMenu = document.querySelector('.header__icon-menu');
const headerMenu = document.querySelector('.header__menu');
   if (iconMenu) {      
      iconMenu.addEventListener("click", function(){
         document.body.classList.toggle('_lock');
         iconMenu.classList.toggle('_active');
         headerMenu.classList.toggle('_active');
      });
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
   
// let anchors = document.querySelectorAll('a[href*="#"]');

// for(let anchor of anchors ) {
//    anchor.addEventListener('click', function(event) {
//       event.preventDefault()
//       let blockID = anchor.getAttribute('href')
//       document.querySelector(blockID).scrollIntoView({
//           behavior: "smooth",
//           block: "start"
//       })
//   })
// }

// прокрутка при клике
const menuLinks = document.querySelectorAll('nav__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach( navLink => {
      navLink.addEventListener('click', onNavLinkClick);
   });
   
   function onNavLinkClick(e) {
      const navLink = e.target;
      if( navLink.dataset.goto && document.querySelectorAll(navLink.dataset.goto)) {
         const gotoBlock = document.querySelectorAll(navLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYoffset - document.querySelector('header').offsetHeight;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}

