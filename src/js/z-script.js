jQuery(document).ready(function($){  

  /* hamburger */
  $('.nav__hamburger--left .hamburger').click(function(e) { 
      e.preventDefault(); 
      $(this).closest('.page').find('.page__left').toggleClass('page__left--visible');
      $(this).closest('.page__center').toggleClass('page__center--moved-to-right');
  });
  $('.nav__hamburger--right .hamburger').click(function(e) { 
      e.preventDefault(); 
      $(this).closest('.page').find('.page__right').toggleClass('page__right--visible');
      $(this).closest('.page__center').toggleClass('page__center--moved-to-left');
  });

  /* разворачивающееся меню на планшетах и мобильниках */
  if ($(window).width() <= 768) {
    $('.menu__title-link:not(.menu__title-link--cost)').click(function(e) { 
        e.preventDefault(); 
        $(this).closest('.menu').find('.menu__list').slideToggle();
        $(this).closest('.menu').find('.menu__link-more').slideToggle();
    });
  }

  /* плавный скролл наверх */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 102) {
      $('.up').fadeIn();
    } else {
      $('.up').fadeOut();
    }
  });
  $('.up').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  // /* Form in modal window */
  // $('*[data-form]').click( function(e){
  //   e.preventDefault(); 
  //   var suffix = $(this).data('form'); 
  //   $('body').css({'overflow':'hidden'});   
  //   $('.overlay').show();
  //   var formClass = '.form--' + suffix;
  //   $('.overlay').find(formClass).fadeIn();
  // });
  // /* Close modal window */
  // $('.overlay__bg, .overlay__close').click( function(e){ 
  //   e.preventDefault();
  //   $('body').css({'overflow':'auto'});
  //   $(this).closest('.overlay').find('.form').fadeOut();
  //   $(this).closest('.overlay').fadeOut(400);
  // }); 

  /* Quiz in modal window */
  $('.btn--orange-bright').click( function(e){
    e.preventDefault();
    $('body').css({'overflow':'hidden'});   
    $('.overlay').show();
    $('.overlay').find('.quiz').fadeIn();
  });
  /* Close modal window */
  $('.overlay__bg, .overlay__close').click( function(e){ 
    e.preventDefault();
    $('body').css({'overflow':'auto'});
    $(this).closest('.overlay').find('.quiz').fadeOut();
    $(this).closest('.overlay').fadeOut(400);
  });

  /* Quiz */
  $('.quiz-step').each(function(indx, element){
    $(element).find('.btn--quiz').click(function(e){
      e.preventDefault();
      var stepInputCheckedValue = $(this).closest('.quiz-step').find('.quiz-step__input:checked').val();
      if (stepInputCheckedValue != undefined) {
        var formInput = '.form--quiz .form__input[name="step' + (indx+1) + '"]';
        $(formInput).val(stepInputCheckedValue);
        $(this).closest('.quiz-step').hide();
        $(this).closest('.quiz-step').next('.quiz-step').show();
      } else {
        alert('Выберите ответ');
      }
    });
  });

  // /* Меню выпадашки */
  // $('.menu__link--dropdown').click(function(){
  //   if($(this).next('.submenu').is(":visible")) {
  //     $(this).next('.submenu').fadeOut(250);
  //   } else {
  //     $(this).closest('.menu').find('.submenu').fadeOut(250);
  //     $(this).siblings('.submenu').fadeIn(250);
  //   }
  // }); 

  /* Map */
  $('.office__map').each(function (index, Element) {
      var map =new GMaps({
          el: Element,
          lat: 56.8378081,
          lng: 60.5950772,
          scrollwheel: false
      });
      map.addMarker({
          lat: 56.8378081,
          lng: 60.5950772,
      });
  });
});

