
$(function () {

   $('.header__burger').click(function (event) {
      $('.header__burger, .menu__nav').toggleClass('active');
      $('.header').toggleClass('active');
      $('body').toggleClass('lock');
   });

   const burger = document.querySelector('.burger'),
      swiper1 = document.querySelector('.slider-container'),
      swiper2 = document.querySelector('.swiper-container'),
      close = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu'),
      playButtonsFirst = document.querySelectorAll('.main-slider__play');


   let swiperSlider1 = new Swiper(swiper1, {
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 105,
   });

   let swiperSlider2 = new Swiper(swiper2, {
      centeredSlides: true,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      fadeEffect: {
         crossFade: true
      },
      effect: 'fade',
      navigation: {
         nextEl: '.btn-right',
         prevEl: '.btn-left'
      },
   });

   swiperSlider2.on('transitionEnd', function () {
      let videos = document.querySelectorAll('.first__slider video');
      videos.forEach((el) => {
         el.pause();
         el.currentTime = 0;
      });
      playButtonsFirst.forEach((el) => {
         el.style.display = 'block';
      })
   });



   playButtonsFirst.forEach((el) => {
      el.addEventListener('click', (e) => {
         let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
         video.play();
         e.currentTarget.style.display = "none";
         setTimeout(() => {
            video.volume = 0.5;
         }, 1000);
      });
   });



});


// burger.addEventListener('click', () => {
//    menu.classList.add('menu__visible');
// });
// ! добавление класса
// close.addEventListener('click', () => {
//    menu.classList.remove('menu__visible');
// });


// inputMask
let selector = document.querySelectorAll('input[type=tel]');

let im = new Inputmask('+(380) 999-999-999');

im.mask(selector);


// validate forms
let validateForms = function (selector, rules) {

   new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function (form, values, ajax) {
         var formData = new FormData(form);

         var xhr = new XMLHttpRequest();


         xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {

               if (xhr.status === 200) {
                  console.log('Отправлено!')
               } else {

               }
            }
         }

         // Add any event handlers here...
         xhr.open('POST', "mail.php", true);
         xhr.send(formData);

         form.reset();
      },
   });
}

// validateForms('.mailing__form', { email: { required: true, email: true } }, 'mailing-window', 'materialy s proshloj konferencii');
validateForms('.newsletter__form', { email: { required: true, email: true }, tel: { required: true } });
validateForms('.subs-form', { email: { required: true, email: true } });
