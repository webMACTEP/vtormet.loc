$(document).ready(function () {


   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');

   });
   $('.header__burger1').click(function (event) {
      $('.header__burger1, .header__menu1').toggleClass('active');

   });


});

