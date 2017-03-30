//When thumbnails are clicked, a lightbox opens showing the larger image file
//While in lightbox, user can cycle through images

//1. Create an overlay and attach it to the body
const $overlay = $("<div id='overlay'></div>");
const $imageBig = $('<img>');
const $caption = $('<p></p>');
	//1.1 Add larger image to overlay
$overlay.append($imageBig);
$overlay.append($caption);
$('body').append($overlay);
	//1.2 Add caption to overlay (text from image title)
	//1.3 Add arrows to navigate to previous and next images
//2. Reveal overlay when thumbnail is clicked
$("#gallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	$imageBig.attr("src",imageLocation);

	var captionText = $(this).children('img').attr("title");
	$caption.text(captionText);
	$overlay.show();
});

$overlay.click(function(){
	$overlay.hide();
});
//3. Hide overlay when overlay is clicked