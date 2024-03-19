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

    // Create meta tags
    let metaTitle = document.createElement('meta');
    metaTitle.setAttribute('name', 'title');
    metaTitle.setAttribute('content', currentTitle);

    let metaOGTitle = document.createElement('meta');
    metaOGTitle.setAttribute('property', 'og:title');
    metaOGTitle.setAttribute('content', currentTitle);

    let metaTwitterTitle = document.createElement('meta');
    metaTwitterTitle.setAttribute('property', 'twitter:title');
    metaTwitterTitle.setAttribute('content', currentTitle);

    // Append meta tags to the head section
    document.head.appendChild(metaTitle);
    document.head.appendChild(metaOGTitle);
    document.head.appendChild(metaTwitterTitle);
});
