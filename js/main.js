$(function () {
  // $('[data-fancybox]').fancybox({
  //   youtube: {
  //     controls: 0,
  //     showinfo: 0
  //   }
  // });
  $('.card-deck a').fancybox({
    caption : function( instance, item ) {
      return $(this).parent().find('.card-text').html();
    }
  });
});