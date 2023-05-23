$('.header__catalog-button').click(function(event){
	event.preventDefault();
	$(this).toggleClass('active');
	$('#header__catalog-menu').toggleClass('active');
});
$('.header__search-button').click(function(event){
  if(!$(this).hasClass('disable')){
    event.preventDefault();
    $(this).addClass('disable').addClass('active');
    $(this).parent().find('.header__search-input').addClass('active');
  }
});
$('.checkbox-other').click(function(event){
  $(this).toggleClass('active');
  $(this).find('input').prop("checked", function(i, val){
      return !val;
  });
});
$('.seacrh__catagory > div').click(function(event){
  $('.seacrh__catagory > div').removeClass('active');
  $(this).addClass('active');
  $('.result__box').css('display', 'none');
  $('#'+ $(this).attr('data-id') + '_box').css('display', 'block');
});


$('header .burger__icon').click(function(event){
  $(this).toggleClass('active');
  $('#header__menu').toggleClass('active');
  $('#header__catalog').removeClass('active');
});
$('#header__search .burger__icon').click(function(event){
  $('#header__search').removeClass('active');
});
$('.city__box-item span.title').click(function(event){
  if(!$(this).parents('.city__box-item').hasClass('active')){
    $('.city__box-item').removeClass('active');
    $('.city__box-item .list').fadeOut();
    $(this).parents('.city__box-item').addClass('active');
    $(this).parents('.city__box-item').find('.list').fadeIn();
  }else{
    $('.city__box-item').removeClass('active');
    $('.city__box-item .list').fadeOut();
  }
});


$('.filter__mobile .close').click(function(event){
  $(this).parents('.filter__mobile').fadeOut();
});
$('.filter__mobile-box_item > span').click(function(event){
  if(!$(this).hasClass('active')){
    $('.filter__mobile-box_item > span').removeClass('active');
    $('.filter__mobile .list').fadeOut();
    $(this).addClass('active');
    $(this).parent().find('.list').fadeToggle();
    if ($(this).parent().find('.slider-range').length && $(this).parent().find('.ui-slider').length == 0) {
      var $this = $(this);
      var range = $(this).parent().find('.slider-range');
      range.slider({
        range: true,
        min: parseInt(range.attr('data-min')),
        max: parseInt(range.attr('data-max')),
        values: [ parseInt(range.attr('data-min-act')), parseInt(range.attr('data-max-act')) ],
        slide: function( event, ui ) {
          $this.parent().find('.min').val(ui.values[0]);
          $this.parent().find('.max').val(ui.values[1]);
        }
      });
     }
  }else{
    $('.filter__mobile-box_item > span').removeClass('active');
    $('.filter__mobile .list').fadeOut();
  }
});
$('.filter__item.mobile .filter__item-name').click(function(event){
  $(this).parent().find('.filter__mobile').fadeIn();
});
$('.list.select .filter__item-name').click(function(event){
  $(this).toggleClass('active');
  $(this).parent().toggleClass('active');
  $('.list.select .filter__active-box').fadeToggle();
});
$('.filter__box .filter__item-name').click(function(event){
    
  if(!$(this).hasClass('active')){
    $('.filter__item-name').removeClass('active');
    $('.filter__active-box').fadeOut();
    $(this).addClass('active');
    $(this).parent().find('.filter__active-box').fadeToggle();
    if ($(this).parent().find('.slider-range').length && $(this).parent().find('.ui-slider').length == 0) {
      var $this = $(this);
      var range = $(this).parent().find('.slider-range');
      range.slider({
        range: true,
        min: parseInt(range.attr('data-min')),
        max: parseInt(range.attr('data-max')),
        values: [ parseInt(range.attr('data-min-act')), parseInt(range.attr('data-max-act')) ],
        slide: function( event, ui ) {
          $this.parent().find('.min').val(ui.values[0]);
          $this.parent().find('.max').val(ui.values[1]);
        }
      });
     }
  }else{
    $('.filter__item-name').removeClass('active');
    $('.filter__active-box').fadeOut();
  }
});
$('.header__catalog-mobile').click(function(event){
  $('#header__catalog').addClass('active');
});
$('#header__catalog > a').click(function(event){
  $('#header__catalog').removeClass('active');
});
$('.header__search-mobile').click(function(event){
  $('#header__search').addClass('active');
});
$('.modal .close').click(function(event){
  $(this).parents('.modal').fadeOut();
});
$('.modal .close').click(function(event){
  $(this).parents('.modal').fadeOut();
});

$('.question__list > div .detect').click(function(event){
  $(this).toggleClass('active');
  $(this).parent().find('.content').fadeToggle();
});

$('.project__list-item').click(function(event){
  $('.modal').fadeIn();
  if ($('.modal').find('.slick-initialized').length == 0) {
      var $this = $('.slider__modal'),
          $blockArrows = $('.catalog__slider-control', $this),
          $slick = $('.slider__items', $this),
          $next = $('.slider__modal').find('.sprite-next'),
          $prev = $('.slider__modal').find('.sprite-prev');
      $slick.slick({
          dots: false,
          arrows: true,
          infinite: true,
          slidesToScroll: 1,
          slidesToShow: 1,
          nextArrow: $next,
          prevArrow: $prev,
      });
    if ($slick.find('.item').length > 1) {
      $slick.siblings('img').show();
    }

    $slick.on('afterChange', function(event, slick, currentSlide){
      $this.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
    });

    var sliderItemsNum = $slick.find('.slick-slide').not('.slick-cloned').length;
    $this.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));
  }
  
});

if($('.slider__main').length){
    $('.slider__main').each(function(){
      $(this).slick({
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
      });
  });
}
var helpers = {
  addZeros: function (n) {
    return (n < 10) ? '0' + n : '' + n;
  }
}; 
$(document).on('click', function(e) {
  if (!$(e.target).closest("#header__catalog-menu, .header__catalog-button").length) {
    $('#header__catalog-menu, .header__catalog-button').removeClass('active');
  }
  if (!$(e.target).closest(".header__search").length) {
    $('.header__search-input,.header__search-button').removeClass('active');
    $('.header__search-button').removeClass('disable')
  }
  if (!$(e.target).closest(".filter__box .filter__item").length) {
    $('.filter__box .filter__item-name').removeClass('active');
    $('.filter__box .filter__active-box').fadeOut();
  } 
  if (!$(e.target).closest(".list.select").length) {
    $('.list.select .filter__item-name').removeClass('active');
    $('.list.select .filter__active-box').fadeOut();
  }  
  e.stopPropagation();
});



$(".range .numbers input").bind('change keyup input click', function () {
  if (this.value.match(/[^0-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, '');
  }
  var values = $(this).parents('.range__box').find('.slider-range').slider( "option", "values" );
  if ($(this).hasClass('min')) {
    if(parseInt($(this).val()) < values[1]){
      $(this).parents('.range__box').find('.slider-range').slider( "option", "values", [ parseInt($(this).val()), values[1] ] );
    }else{
      $(this).parents('.range__box').find('.slider-range').slider( "option", "values", [ values[0], values[1] ] );
      $(this).val(values[0]);
    }
  }else{
    if(parseInt($(this).val()) > values[0]){
      $(this).parents('.range__box').find('.slider-range').slider( "option", "values", [ values[0], parseInt($(this).val()) ] );
    }else{
      $(this).parents('.range__box').find('.slider-range').slider( "option", "values", [ values[0], values[1] ] );
      $(this).val(values[1]);
    }
  }
  
});
$("#count").bind('change keyup input click', function () {
  if (this.value.match(/[^0-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, '');
  }
});
$('.count > svg').click(function(event){
  if($(this).hasClass('min')){
    $("#count").val(parseInt($("#count").val()) - 1 >= 0 ? parseInt($("#count").val()) - 1 : 0);
  }else{
    $("#count").val(parseInt($("#count").val()) + 1);
  }
});


var $this = $('.section__preview-slider'),
    $slick = $('.slider__comment-list', $this),
    $next = $('.section__preview-slider').find('.sprite-next'),
    $prev = $('.section__preview-slider').find('.sprite-prev');
  $('.section__preview-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__comment-list'
  });
  $slick.slick({
    asNavFor: '.section__preview-img',
    focusOnSelect: true,
    dots: false,
    arrows: true,
    slidesToShow: 3,
    nextArrow: $next,
    prevArrow: $prev,
    responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
          ]
});

$('.slider__block').each(function(){
  var $this = $(this),
      $slick = $('.slider__block-list', $this),
      $next = $(this).find('.sprite-next'),
      $prev = $(this).find('.sprite-prev');
  $slick.slick({
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: $next,
      prevArrow: $prev,
  });
});
$('.section__product-slider').each(function(){
  var $this = $(this),
      $slick = $('.section__product-slider_list', $this),
      $next = $(this).find('.sprite-next'),
      $prev = $(this).find('.sprite-prev');
  $slick.slick({
      dots: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: $next,
      prevArrow: $prev,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
  });
});

  $('.product__list').slick({
      dots: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: $next,
      prevArrow: $prev,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
  });
  $(window).on('load resize', function() {
    if ($(window).width() < 900) {
      $('.product__list:not(.slick-initialized)').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1
      });
    } else {
      $(".product__list.slick-initialized").slick("unslick");
    }
  });

var $this = $('.section__information-min_slider'),
    $slick = $('.slider__buff', $this),
    $next = $('.section__information-min_slider').find('.sprite-next'),
    $prev =$('.section__information-min_slider').find('.sprite-prev');
  $('.section__information-big_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__buff'
  });
  $slick.slick({
    vertical: true,
    asNavFor: '.section__information-big_slider',
    focusOnSelect: true,
    dots: false,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    nextArrow: $next,
    prevArrow: $prev,
});

var $this = $('.slider__mobile-card'),
 $slick = $('.slider', $this),
 $next = $('.sprite-next', $this),
 $blockDots = $('.controls-dots', $this),
 $prev = $('.sprite-prev', $this);
 $slick.slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    appendDots: $blockDots,
    nextArrow: $next,
    prevArrow: $prev,
 }); 

 var $this = $('.section__information-mobile'),
 $slick = $('.slider__buff', $this),
 $next = $('.sprite-next', $this),
 $blockDots = $('.controls-dots', $this),
 $prev = $('.sprite-prev', $this);
 $slick.slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    appendDots: $blockDots,
    nextArrow: $next,
    prevArrow: $prev,
 }); 


 // Form
$('form.form input').on('input',function(e){
  $(this).parent().removeClass('error');
  if($('.input__box.error').length == 0){
    $('.erorr__form').removeClass('active');
  }
  $('form.form button').removeClass('disable');
});

function Valid_Name(el){
    if (el.val() == "" && el.val() < 3) {
        el.parent().addClass('error');
        $('.erorr__form').addClass('active');
        return 0;
    }else{
        return 1;
    }
}
function Valid_Email(el){
    if (el.val() == "" || el.val() == undefined || el.val().length < 6 || !el.val().includes('@') || !el.val().includes('.')) {
        el.parent().addClass('error');
        $('.erorr__form').addClass('active');
        return 0;
    }else{
        return 1;
    }
}
function Valid_Phone(el){
    if (el.val() == "" || el.val() == undefined || el.val().replace(/[^0-9]/g,"").length != 11) {
        el.parent().addClass('error');
        $('.erorr__form').addClass('active');
        return 0;
    }else{
        return 1;
    }
}

$( "form.form" ).submit(function( event ) {
  var buff = 0;
  var name = $('form.form input[name="name"]');
  var surname = $('form.form input[name="surname"]');
  var phone = $('form.form input[name="phone"]');
  var email = $('form.form input[name="email"]');
  if (Valid_Name(name)) {
      buff++;
  }
  if (Valid_Name(surname)) {
      buff++;
  }
  if (Valid_Phone(phone)) {
      buff++;
  }
  if (Valid_Email(email)) {
      buff++;
  }
  if(buff == 4){
    console.log('DA');
  }
  event.preventDefault();
});


 // /Form

$('.information__sections-list > a').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
          scrollTop: $(dest).offset().top - 80 // прокручиваем страницу к требуемому элементу
        }, 500 // скорость прокрутки
        );
    }
    return false;
});


$("#scrollTop").bind('click', function(e){
    e.preventDefault();
    $('body,html').animate({scrollTop: 0}, 400);    
});

$(window).scroll(function(event) {
  if ($(this).scrollTop() < 100) {
    $('#scrollTop').removeClass('active');
  }else{
    $('#scrollTop').addClass('active');
  }
});