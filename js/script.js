$(document).ready(function () {


   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');

   });
   $('.header__burger1').click(function (event) {
      $('.header__burger1, .header__menu1').toggleClass('active');

   });
   var n = 1;
   $('.next').click(function (event) {
      n++;
      $('.order__button').addClass('stap' + n);
      $('.order__step' + n).addClass('active');
      $('.itemorder' + n).addClass('actives');
      $('.itemorder' + n).removeClass('hide');
      n--;
      $('.itemorder' + n).addClass('hide');
      $('.order__button').removeClass('stap' + n);
      $('.order__step' + n).removeClass('active');
      $('.itemorder' + n).removeClass('actives');


      n++;

   });


   $('.previous').click(function (event) {

      $('.order__button').removeClass('stap' + n);
      $('.itemorder' + n).addClass('hide');
      $('.order__step' + n).removeClass('active');
      $('.itemorder' + n).removeClass('actives');
      n--;
      $('.order__button').addClass('stap' + n);
      $('.order__step' + n).addClass('active');
      $('.itemorder' + n).addClass('actives');
      $('.itemorder' + n).removeClass('hide');
   });



});

