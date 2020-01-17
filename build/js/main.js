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

  //проверка на пустоту поля ввода при загрузке страницы
  $('.js-input').each(function() {
    if($(this).val() != '') {
      $(this).parent('.input-label').addClass('filled');
    }
  });

  //проверка на пустоту поля ввода
  $('.js-input').blur(function () {
    if($(this).val() != '') {
      $(this).parent('.input-label').addClass('filled');
    } else {
      $(this).parent('.input-label').removeClass('filled');
    }
  });

  //слайдер серий
  if ($('.js-series-slider').length) {
    $('.js-series-slider').slick({
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      centerMode: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
      dots: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 767,
          settings: "unslick"
        }
      ]
    });
  }

  //слайдер раздвижных систем
  if ($('.js-systems-slider').length) {
    $('.js-systems-slider').slick({
      adaptiveHeight: true,
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
          breakpoint: 767,
          settings: "unslick"
        }
      ]
    });
  }

  //запуск плавающего фильтра
  if ($(".js-sticky-block").length) {
    if ($("body").width() >= 768 && $("body").width() < 1200) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 200
        });
      }, 100);
    } else if ($("body").width() >= 1200) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 30
        });
      }, 100);
    } else {

    }

    //если блок для контента пустой, открепляем
    if ($(".js-content-with-sticky").length) {
      if ($('.js-content-with-sticky').html().trim() === '') {
        $(".js-sticky-block").trigger("sticky_kit:detach");
      }
    }
  }

  //переключение табов
  $('.js-tab').on('click', function() {
    $('.js-tab').removeClass("is-active");
    $(this).addClass("is-active");
    $('.js-tab[data-link=' + $(this).attr("data-link") + ']').addClass("is-active");
    $('.tab').removeClass("is-active");
    $('.tab[data-target=' + $(this).attr("data-link") + ']').addClass("is-active");
    return false;
  });

  //кастомный скролл
  $('.js-custom-scroll').each(function(index, element) {
    new SimpleBar(element, { autoHide: false })
  });
});

//открепляем и перезапускаем прилипающий блок при резайзе
$(window).resize(function() {
  if ($(".js-sticky-block").length) {
    if ($("body").width() >= 768 && $("body").width() < 1200) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 200
        });
      }, 100);
    } else if ($("body").width() >= 1200) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 30
        });
      }, 100);
    } else {

    }
  }
});

//открепляем и перезапускаем прилипающий блок при повороте устройства
$(window).on("orientationchange", function(event) {
  if ($(".js-sticky-block").length) {
    if ($("body").width() >= 768 && $("body").width() < 1200) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 200
        });
      }, 100);
    } else if ($("body").width() >= 1200) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 30
        });
      }, 100);
    } else {

    }
  }
});
