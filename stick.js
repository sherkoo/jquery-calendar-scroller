$(document).ready(function(){

  $(window).scroll(function(){

    $('.article').each(function(){
      if ($(this).offset().top < $(window).scrollTop()) {
        $(this).find('.stick').addClass('sticky');
        $(this).find('.right').addClass('sticky');
      } else {
        $(this).find('.stick').removeClass('sticky');
        $(this).find('.right').removeClass('sticky');
      }

      if ($(this).find('.stick-bottom-anchor').offset().top < $(window).scrollTop()) {
        $(this).find('.stick').removeClass('sticky');
        $(this).find('.right').removeClass('sticky');
      }

      if (($(this).find('.stick').offset().top + $(this).find('.stick').height()) >= $(this).find('.stick-bottom-anchor').offset().top) {
        $(this).find('.stick').removeClass('sticky');
        $(this).find('.stick').addClass('sticky-bottom');

        if($(this).find('.stick').hasClass('sticky-bottom') && $(this).find('.sticky-bottom').offset().top >= $(window).scrollTop()){
          $(this).find('.stick').removeClass('sticky-bottom');
          $(this).find('.stick').addClass('sticky');
        } else {
          $(this).find('.stick').addClass('sticky-bottom');
          $(this).find('.stick').removeClass('sticky');
        }
      }
    });

  });

});
