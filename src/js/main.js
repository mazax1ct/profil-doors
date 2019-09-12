$(document).ready(function () {
  //открытие/закрытие меню
  $('.js-menu-opener').click(function () {
    $('body').toggleClass('overflow');
    $(this).toggleClass('is-active');
    $('.mobile-menu').toggleClass('is-open');
    return false;
  });

  //открытие/закрытие меню второго уровня
  $('.js-root').click(function () {
    $(this).toggleClass('is-active');
    $(this).next('.second-level-menu').toggleClass('is-open');
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

  //слайдер товаров
  if ($('.js-products-slider').length) {
    $('.js-products-slider').slick({
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
      dots: false,
      responsive: [
        {
          breakpoint: 559,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 639,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            appendArrows: '.js-products-slider-nav'
          }
        }
      ]
    });
  }
});
