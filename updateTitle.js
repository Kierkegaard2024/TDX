document.addEventListener('DOMContentLoaded', function() {
    // Get the current title
    let currentTitle = document.title;

    // Check if the title starts with "Article - "
    if (currentTitle.startsWith("Article - ")) {
        // Remove the "Article - " prefix
        currentTitle = currentTitle.substring("Article - ".length);
    }

    // Check if the title starts with "Service - "
    if (currentTitle.startsWith("Service - ")) {
        // Remove the "Service - " prefix
        currentTitle = currentTitle.substring("Service - ".length);
    }

    // Set the new title
    document.title = currentTitle;
});
