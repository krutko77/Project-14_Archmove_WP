// // Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// // Подключение списка активных модулей
// import { flsModules } from "./modules.js";


const iconMenu = document.querySelector('.header__icon-menu');
const headerMenu = document.querySelector('.header__menu');
   if (iconMenu) {      
      iconMenu.addEventListener("click", function(){
         iconMenu.classList.toggle('_active');
         headerMenu.classList.toggle('_active');
      });
   }

   $(document).ready(function(){
      $('.slider').slick({
         arrows:true         
      });
    })

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
   