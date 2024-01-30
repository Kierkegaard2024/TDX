document.addEventListener('DOMContentLoaded', function () {
  // Get the elements with the specified class
  var elements = document.querySelectorAll('ul.font-lg.list-unstyled');

  // Loop through the elements and set the new font size
  elements.forEach(function(element) {
    var currentSize = parseInt(window.getComputedStyle(element).fontSize);
    var newSize = currentSize * 0.7; // You can adjust the multiplication factor as needed
    element.style.fontSize = newSize + 'px';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Get the elements with the specified class
  var elements = document.querySelectorAll('div.font-lg');

  // Loop through the elements and set the new font size
  elements.forEach(function(element) {
    var currentSize = parseInt(window.getComputedStyle(element).fontSize);
    var newSize = currentSize * 0.9; // You can adjust the multiplication factor as needed
    element.style.fontSize = newSize + 'px';
  });
});
