// // Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// // Подключение списка активных модулей
// import { flsModules } from "./modules.js";


const iconMenu = document.querySelector('.header__icon-menu');
   if (iconMenu) {
      const headerMenu = document.querySelector('.header__menu');
      iconMenu.addEventListener("click", function(e){
         iconMenu.classList.toggle('_active');
         headerMenu.classList.toggle('_active');
      });
   }

   $(document).ready(function(){
      $('.slider').slick({
         arrows:true         
      });
    })