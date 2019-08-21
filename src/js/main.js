$(document).ready(function () {
  $('.js-menu-opener').click(function () {
    $('body').toggleClass('overflow');
    $(this).toggleClass('is-active');
    $('.menu-block').toggleClass('is-open');
    return false;
  });

  //главный баннер-слайдер
  if ($('.js-main-slider').length) {
    var $status = $('.js-main-slider-count');
    var $slickElement = $('.js-main-slider');

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.html('<span class="current-slide">'+i+'</span>' + ' / ' +slick.slideCount);
    });

    $slickElement.slick({
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      arrows: true,
      appendArrows: '.js-main-banner-nav',
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
      dots: false
    });
  }
});
