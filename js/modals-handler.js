$(function() {

    $('.youtube-iframe-destroyed .modal').each(function() {
      var modalIframe = $(this).find('iframe');

      // Keep Iframe URL in mind.
      $(this).data('iframe-src', modalIframe.attr('src'));

      // Fill iframe src when opening.
      $(this).on('show.bs.modal', function (e) {
        modalIframe.attr('src', $(this).data('iframe-src'));
      });

      // Empty it when closing.
      $(this).on('hide.bs.modal', function (e) {
        modalIframe.attr('src', '#');
    });
  });

});