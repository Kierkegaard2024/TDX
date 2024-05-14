// Array of philosophers and their quotes
const philosophers = [
  {
    name: "Ludwig Wittgenstein",
    quote: "The limits of my language mean the limits of my world.",
    link: "https://plato.stanford.edu/entries/wittgenstein/"
  },
  {
    name: "Søren Kierkegaard",
    quote: "Life can only be understood backward, but it must be lived forwards.",
    link: "https://plato.stanford.edu/entries/kierkegaard/"
  },
  {
    name: "Immanuel Kant",
    quote: "Dare to know! Have the courage to use your own reason.",
    link: "https://plato.stanford.edu/entries/kant/"
  },
  {
    name: "Plato",
    quote: "At the touch of love, everyone becomes a poet.",
    link: "https://plato.stanford.edu/entries/plato/"
  },
  {
    name: "Aristotle",
    quote: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    link: "https://plato.stanford.edu/entries/aristotle/"
  },
  {
    name: "Thomas Aquinas",
    quote: "To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.",
    link: "https://plato.stanford.edu/entries/aquinas/"
  },
  {
    name: "Augustine",
    quote: "Thou hast made us for thyself, O Lord, and our heart is restless until it finds its rest in thee.",
    link: "https://plato.stanford.edu/entries/augustine/"
  },
  {
    name: "René Descartes",
    quote: "Cogito, ergo sum. (I think, therefore I am.)",
    link: "https://plato.stanford.edu/entries/descartes/"
  },
  {
    name: "John Locke",
    quote: "No man's knowledge here can go beyond his experience.",
    link: "https://plato.stanford.edu/entries/locke/"
  },
  {
    name: "Baruch Spinoza",
    quote: "Peace is not the absence of war, but a virtue based on strength of character.",
    link: "https://plato.stanford.edu/entries/spinoza/"
  },
  {
    name: "Georg Wilhelm Friedrich Hegel",
    quote: "Nothing great in the world has ever been accomplished without passion.",
    link: "https://plato.stanford.edu/entries/hegel/"
  },
  {
    name: "Jean-Paul Sartre",
    quote: "Existence precedes essence.",
    link: "https://plato.stanford.edu/entries/sartre/"
  },
  {
    name: "Friedrich Nietzsche",
    quote: "He who has a why to live can bear almost any how.",
    link: "https://plato.stanford.edu/entries/nietzsche/"
  },
  {
    name: "John Stuart Mill",
    quote: "The worth of a state in the long run is the worth of the individuals composing it.",
    link: "https://plato.stanford.edu/entries/mill/"
  },
  {
    name: "Albert Camus",
    quote: "In the depth of winter, I finally learned that there was in me an invincible summer.",
    link: "https://plato.stanford.edu/entries/camus/"
  },
  {
    name: "Gottfried Wilhelm Leibniz",
    quote: "The present is big with the future.",
    link: "https://plato.stanford.edu/entries/leibniz/"
  },
  {
    name: "Jacques Derrida",
    quote: "There is nothing outside the text.",
    link: "https://plato.stanford.edu/entries/derrida/"
  },
  {
    name: "Michel Foucault",
    quote: "Knowledge is not made for understanding; it is made for cutting.",
    link: "https://plato.stanford.edu/entries/foucault/"
  },
  {
    name: "Jeremy Bentham",
    quote: "It is the greatest happiness of the greatest number that is the measure of right and wrong.",
    link: "https://plato.stanford.edu/entries/bentham/"
  },
  {
    name: "Socrates",
    quote: "The only true wisdom is in knowing you know nothing.",
    link: "https://plato.stanford.edu/entries/socrates/"
  },
  {
    name: "David Hume",
    quote: "Beauty in things exists in the mind which contemplates them.",
    link: "https://plato.stanford.edu/entries/hume/"
  },
  {
    name: "Marcus Aurelius",
    quote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    link: "https://plato.stanford.edu/entries/marcus-aurelius/"
  }
];

// Function to randomly select a philosopher and update the HTML
function randomizeQuote() {
  const randomIndex = Math.floor(Math.random() * philosophers.length);
  const philosopher = philosophers[randomIndex];

  const quoteElement = document.querySelector(".quote");
  const authorElement = document.querySelector(".author");

  if (quoteElement && authorElement) {
    const quoteContent = `<span class="fa fa-quote-left fa-border" aria-hidden="true"></span><i>${philosopher.quote}</i>`;
    const linkedQuote = `<a href="${philosopher.link}" style="color: #ffffff">${quoteContent}</a>`;

    quoteElement.innerHTML = linkedQuote;
    authorElement.innerHTML = ` &mdash; <a href="${philosopher.link}" style="color: #ffffff">${philosopher.name}</a>`;
  }
}

const targetNode = document.body;
const config = { childList: true, subtree: true };

const callback = function(mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      const quoteElement = document.querySelector(".quote");
      const authorElement = document.querySelector(".author");

      if (quoteElement && authorElement) {
        randomizeQuote();
        observer.disconnect(); // Stop observing after finding the elements
        break;
      }
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
