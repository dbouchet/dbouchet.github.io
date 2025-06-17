$(document).ready(function () {
  var $grid = $(".grid");

  // Wait until all images are fully loaded
  $grid.imagesLoaded(function () {
    $grid.masonry({
      gutter: 10,
      horizontalOrder: true,
      itemSelector: ".grid-item",
    });
  });
});
