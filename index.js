function handleClicks() {
  $('#hamburgerButton').on("click", function() {
    $('.navOptions').toggleClass('hidden');
  });
}

$(handleClicks);
