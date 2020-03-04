/*jshint esversion: 6 */

$(document).ready(function() {

function handleClicks() {
  $('#hamburgerButton').on("click", function() {
    $('.navOptions').toggleClass('hidden');
  });
}

if ((screen.width<426)) {
    $(".navOptions").toggleClass('hidden');
    $('li').click(function() {
      $(".navOptions").toggleClass('hidden');
    });
}

$(handleClicks);

});
