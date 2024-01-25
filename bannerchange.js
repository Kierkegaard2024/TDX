document.addEventListener('DOMContentLoaded', function() {
    var logoHeaderFull = document.getElementsByClassName('logo-header-full')[0]; // Assuming there is only one element with this class

    // Function to change background to an image
    function changeBackgroundToImage(element) {

        element.style.background = "url('https://cdn.jsdelivr.net/gh/Kierkegaard2024/TDX/img/space.png')";
        element.style.backgroundSize = "cover";  // You can adjust the background size property as needed
        element.style.backgroundRepeat = "no-repeat";
        element.style.backgroundPosition = "center";

// Apply brightness filter to make the image lighter
        //element.style.filter = "brightness(0.5)"; // You can experiment with different values

        // Reduce the opacity of the entire element
        //element.style.opacity = 0.2; // Adjust the value as needed (between 0 and 1)
    }

    // Call the function to change the background when needed
    // For example, you might trigger this based on user interaction or some event
    changeBackgroundToImage(logoHeaderFull);
});
