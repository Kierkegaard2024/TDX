document.addEventListener('DOMContentLoaded', function() {
  var answerInputs = document.querySelectorAll('input.form-control');

  answerInputs.forEach(function(answerInput) {
    answerInput.addEventListener('input', function() {
      var inputValue = answerInput.value.toLowerCase();

    if (inputValue === 'what is the answer to life') {
      alert('The answer to life, the universe, and everything is 42!');
    } else if (inputValue === 'what is the loneliest number') {
      alert('The loneliest number is 1.');
    } else if (inputValue === 'i want the truth') {
      alert('You can\'t handle the truth!');
    } else if (inputValue === 'the loneliest number') {
      alert('The loneliest number is 1.');
    } else if (inputValue === 'shirley you can\'t be serious') {
      alert('I am serious. And don\'t call me Shirley.');
    } else if (inputValue === 'are you stupid or something') {
      alert('Stupid is as stupid does.');
    } else if (inputValue === 'are we born free') {
      alert('Man is born free, and everywhere he is in chains.');
    } else if (inputValue === 'space the final frontier') {
      alert('These are the voyages of the starship Enterprise. Her continuing mission: to explore strange new worlds, to seek out new life and new civilizations. To boldly go where no one has gone before.');
    } else if (inputValue === 'birds birds birds') {
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
});
