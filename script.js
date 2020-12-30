$( document ).ready(function() {
  /* Open Panel */
  $( ".header__icon" ).on('click', function() {
    $(".header__menu").toggleClass("menu-open");
  });
  $('.menu__link').hover(function(){
    $(".submenu").toggleClass("submenu-open");
  });
  $('.hero-contatti').hover(function(){
    $(".submenu").removeClass("submenu-open");
  });
  $('span').hover(function(){
    $(".submenu").removeClass("submenu-open");
  });
  $('.menu__link').mouseleave(function(){
    $(".submenu").toggleClass("submenu-open");
  });
  $('.hero-contatti').on('click',function(){
    $(".submenu").removeClass("submenu-open");
  });
  $( ".menu__link" ).on('click', function() {
    $(".submenu").toggleClass("submenu-open");
  });
  $( ".menu__item__link" ).on('click', function() {
    $(".submenu").removeClass("submenu-open");
      $(".header__menu").removeClass("menu-open");
  });


  var scroll_pos = 0;
  $(document).scroll(function() {
  	scroll_pos = $(this).scrollTop();
  	if(scroll_pos > 300) {
  		$(".scrolltop").addClass( "scrolltop-visible" );
  	} else {
  		$(".scrolltop").removeClass( "scrolltop-visible" );
  	}
  });
  $('.scrolltop').on('click', function(){
    $("html,body").animate({scrollTop: 0}, 300, function(){});
  });

  var scroll_pos = 0;
  $(document).scroll(function() {
  	scroll_pos = $(this).scrollTop();
  	if(scroll_pos > 70) {
      $(".submenu").addClass("submenu-scroll");
      $(".menu__item__link").addClass("submenu-li-scroll");
  		$(".header").addClass( "header-scroll" );
  		$(".header__logo__img").addClass( "header-logo-scroll" );
  		$(".header__menu").addClass( "header-menu-scroll" );

  	} else {
      $(".submenu").removeClass("submenu-scroll");
      $(".menu__item__link").removeClass("submenu-li-scroll");
  		$(".header").removeClass( "header-scroll" );
  		$(".header__logo__img").removeClass( "header-logo-scroll" );
  		$(".header__menu").removeClass( "header-menu-scroll" );
  	}
  });
});
