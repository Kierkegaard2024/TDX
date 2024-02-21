document.addEventListener('DOMContentLoaded', function() {
  var answerInput = document.querySelector('input.form-control');

  answerInput.addEventListener('input', function() {
    var inputValue = answerInput.value.toLowerCase();

    if (inputValue === 'birds birds birds') {
      VANTA.BIRDS({
        el: "body",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xffffff,
        color1: 0xb400ff
  })
  }
 });
});
