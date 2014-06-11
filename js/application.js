$(document).on('click', '[href^=tel],[href^=mailto]', function() {
  var $this = $(this),
      href = $this.attr('href');

  $this.text(href.substring(href.indexOf(':') + 1));
});
