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
   if (n === 4) {
      $('.send').addClass('stap' + n);
   }

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


   $('.wappgroup__button, .footer__pricebutton').click(function (event) {

      $('.modals, .modals__01').addClass('open');
      $('.modals__body').addClass('h400');
      $('body').addClass('lock');
   });

   $('.modals__close').click(function (event) {

      $('.modals, .modals__01').removeClass('open');
      $('.modals__body').removeClass('h400');
      $('body').removeClass('lock');
   });



});

