document.addEventListener('DOMContentLoaded', function () {
    function addAriaLabel(link) {
        if (!link.hasAttribute('aria-label')) {
            link.setAttribute('aria-label', 'Opens in a new tab');
        }
    }

    function scanAndAddAriaLabels() {
        const links = document.querySelectorAll('a[target="_blank"]');
        links.forEach(link => addAriaLabel(link));
    }

    // Initial scan
    scanAndAddAriaLabels();

    // Observe changes in the DOM
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    if (node.tagName === 'A' && node.target === '_blank') {
                        addAriaLabel(node);
                    } else {
                        node.querySelectorAll('a[target="_blank"]').forEach(link => addAriaLabel(link));
                    }
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
});
