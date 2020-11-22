$(document).ready(function () {


   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');

   });
   $('.header__burger1').click(function (event) {
      $('.header__burger1, .header__menu1').toggleClass('active');

   });

   $('.next1').click(function (event) {
      $('.order__step2').addClass('active');
      $('.order__step1').removeClass('active');
      $('.previous1').addClass('previous2');
      $('.previous1').removeClass('previous1');
      $('.next1').addClass('next2');
      $('.next1').removeClass('next1');


      $('.next2').click(function (event) {
         $('.order__step3').addClass('active');
         $('.order__step2').removeClass('active');
         $('.previous2').addClass('previous3');
         $('.previous2').removeClass('previous2');
         $('.next2').addClass('next3');
         $('.next2').removeClass('next2');


         $('.next3').click(function (event) {
            $('.order__step4').addClass('active');
            $('.order__step3').removeClass('active');

            $('.previous3').addClass('previous4');
            $('.previous3').removeClass('previous3');

            $('.next3').addClass('next4');
            $('.next3').removeClass('next3');




            $('.previous4').click(function (event) {
               $('.order__step3').addClass('active');
               $('.order__step4').removeClass('active');

               $('.previous4').addClass('previous3');
               $('.previous4').removeClass('previous4');

               $('.next4').addClass('next3');
               $('.next4').removeClass('next4');

               $('.previous3').click(function (event) {
                  $('.order__step2').addClass('active');
                  $('.order__step3').removeClass('active');

                  $('.previous3').addClass('previous2');
                  $('.previous3').removeClass('previous3');

                  $('.next3').addClass('next2');
                  $('.next3').removeClass('next3');

                  $('.previous2').click(function (event) {
                     $('.order__step1').addClass('active');
                     $('.order__step2').removeClass('active');

                     $('.previous2').addClass('previous1');
                     $('.previous2').removeClass('previous2');

                     $('.next2').addClass('next1');
                     $('.next2').removeClass('next2');




                  });

               });

            });



         });



      });





   });



});

