document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[target="_blank"]');
    links.forEach(link => {
        if (!link.hasAttribute('aria-label')) {
            link.setAttribute('aria-label', 'Opens in a new tab');
        }
    });
});
