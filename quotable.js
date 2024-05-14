async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        updateQuote(data.content, data.author);
    } catch (error) {
        console.error('Error fetching the quote:', error);
    }
}

function updateQuote(quote, author) {
    const quoteElement = document.querySelector('.quote');
    const authorElement = document.querySelector('.author');

    if (quoteElement) {
        quoteElement.innerHTML = `<center><span class="fa fa-quote-left fa-border" aria-hidden="true"></span><i>${quote}</i></center>`;
    }

    if (authorElement) {
        authorElement.innerHTML = `<center>&mdash; ${author}</center>`;
    }
}

// Observe for dynamically added elements
const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const quoteElement = document.querySelector('.quote');
            const authorElement = document.querySelector('.author');
            if (quoteElement && authorElement) {
                fetchQuote();
                observer.disconnect(); // Stop observing once elements are found and updated
            }
        }
    }
});

// Start observing the body for added child nodes
observer.observe(document.body, { childList: true, subtree: true });

// Optional: Fetch a quote if elements are already present at load time
document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.querySelector('.quote');
    const authorElement = document.querySelector('.author');
    if (quoteElement && authorElement) {
        fetchQuote();
    }
});
