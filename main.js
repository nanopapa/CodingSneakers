'use strict';

$(function(){
    $('.toggle_btn').on('click',function(){
      $('.toggle_btn,.mask,header nav').toggleClass('open');
    });
  

    $('.mask').on('click',function(){
      $('.toggle_btn,.mask,header nav').removeClass('open');
    });

    $('.navi a').on('click',function(){
      $('.toggle_btn,.mask,header nav').removeClass('open');
    });
  });

  
  
  $(function(){
    $('a[href^="#"]').click(function(){
      let speed = 500;
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
  
  

    $(window).scroll(function() {
      $('.fadein').each(function() {
        let scroll = $(window).scrollTop();
        let target = $(this).offset().top;
        let windowHeight = $(window).height();
        if (scroll > target - windowHeight + 200) {
          $(this).css('opacity','1');
          $(this).css('transform','translateY(0)');
        }
      });
    });
  
  
    $('.slick-area').slick({
      arrows: false,
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '50px',
            slidesToShow: 1
          }
        }
      ]
    });
  
  