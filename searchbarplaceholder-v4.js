document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with class "form-control" and placeholder "Search the client portal"
    let elements = document.querySelectorAll('.form-control[placeholder="Search the client portal"]');

    // Iterate over each element and update its placeholder value
    elements.forEach(element => {
        element.placeholder = "Search this site";
    });
});
