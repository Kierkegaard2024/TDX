let tapCount = 0;

document.body.addEventListener('click', function() {
  tapCount++;

  if (tapCount === 42) {
    document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg/1596px-Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg')";
    alert("Congratulations on tapping the screen 42 times without moving to another page! In the repetition of this seemingly trivial act, you have embarked on a profound journey of self-reflection. Embrace the absurdity of this moment, for it is in the ordinary actions that the extraordinary nature of existence reveals itself.");
    tapCount = 0; // Reset tap count after the alert
  }
});
