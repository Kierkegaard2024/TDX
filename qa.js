document.addEventListener('DOMContentLoaded', function() {
  var answerInput = document.querySelector('input.form-control');

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
  }
 });
});
