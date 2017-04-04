// Lightbox Options
lightbox.option({
  'showImageNumberLabel': false,
  'maxHeight': 750,
  'maxWidth': 750,
  'positionFromTop': 75,
  'wrapAround': true
});

// Search Function Using jQuery
$(function(){
  $('#searchbox').keyup(function(){
    var search = $(this).val().toLowerCase();

  $('#gallery a').each(function(){
    var text = $(this).attr('data-title');

    if(text.includes(search)) {
      $(this).show();                                 //Shows matching images
    } else {
      $(this).fadeOut(300).attr('data-lightbox', ''); //Hides images from gallery and slideshow
    };
  });
  });
});
