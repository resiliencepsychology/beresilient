$(document).ready(function() {
  $('[href^=tel],[href^=mailto]').each(function() {
    var $this = $(this),
      href = $this.attr('href');

    $this.attr('data-href', href.substring(href.indexOf(':') + 1));
  });
});
