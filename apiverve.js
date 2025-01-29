let quoteFetched = false; // Track if the quote has already been fetched

// Function to fetch a quote
async function fetchQuote() {
    if (quoteFetched) return; // Prevent fetching again if the quote is already fetched
    
    quoteFetched = true; // Mark that the quote is being fetched

    try {
        const response = await fetch('https://api.apiverve.com/v1/randomquote', {
            headers: {
                'x-api-key': 'd48c002d-8bd9-4f61-8e91-fe3981bdf244'
            }
        });
        const data = await response.json();
        if (data.status === 'ok' && data.data) {
            updateQuote(data.data.quote, data.data.author);
        } else {
            console.error('Error in API response:', data.error);
        }
    } catch (error) {
        console.error('Error fetching the quote:', error);
    }
}

// Function to update the quote and author on the page
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

// Ensure quote is fetched after the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait for the elements to exist before fetching the quote
    const quoteElement = document.querySelector('.quote');
    const authorElement = document.querySelector('.author');

    if (quoteElement && authorElement) {
        fetchQuote();  // Fetch and display the quote
    } else {
        // Optionally, observe for the elements if they are added dynamically
        const observer = new MutationObserver((mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    const quoteElement = document.querySelector('.quote');
                    const authorElement = document.querySelector('.author');
                    if (quoteElement && authorElement && !quoteFetched) {
                        fetchQuote();
                        observer.disconnect(); // Stop observing once the quote is updated
                    }
                }
            }
        });

        // Observe the body for dynamically added elements
        observer.observe(document.body, { childList: true, subtree: true });
    }
});
