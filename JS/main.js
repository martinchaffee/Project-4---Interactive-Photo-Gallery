    lightbox.option({
      'showImageNumberLabel': false,
      'maxHeight': 800,
      'maxWidth': 800,
      'positionFromTop': 100
    })

// Problem: Users need to be able to filter through the photos in
// real-time as you type, and only display photos that match the search.
// 1: User types input into seach
//2.1: collect user input as it is typed
//3.1: If input DOES NOT MATCH images caption text,
//3.2: Image's style = display value = none;

//Collect search input and store search input as a variable (searchInput)
  //Put an event listener on the "input" element
const searchInput = document.querySelector('input');

searchInput.addEventListener('input', (e) => {
  const image = document.getElementsByTagName('a');
  const imageCaption = a.getAttribute('data-title');
  console.log(imageCaption);

});
//Collect imageCaption descriptions (a's data-title) and store as variable (imageCaptions)
//Create a function that loops through the collection of caption descriptions;
  //captionImage = parent of
  //If searchInput === a word or phrase in captions, parent  display = zero
