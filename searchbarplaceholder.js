document.addEventListener("DOMContentLoaded", function() {
    var inputs = document.querySelectorAll(".form-control");
    inputs.forEach(function(input) {
        input.setAttribute("placeholder", "Search this site");
    });
});
