function handleClicks() {
  $('#hamburgerButton').on("click", function() {
    $('.navOptions').toggle();
  });
}

$(handleClicks);
