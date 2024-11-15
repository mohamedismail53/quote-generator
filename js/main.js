var quotes = [
  {
    content: `"Be yourself; everyone else is already taken."`,
    author: "-- Oscar Wilde",
  },
  {
    content: `"You only live once, but if you do it right, once is enough."`,
    author: "-- Mae West",
  },
  {
    content: `"So many books, so little time."`,
    author: "-- Frank Zappa",
  },
  {
    content: `"Be the change that you wish to see in the world."`,
    author: "-- Mahatma Gandhi",
  },
  {
    content: `"A room without books is like a body without a soul."`,
    author: "-- Marcus Tullius Cicero",
  },
  {
    content: `"If you tell the truth, you don't have to remember anything"`,
    author: "-- Mark Twain",
  },
];

var lastQuoteIdx = -1;

function quoteGenerator() {
  var quoteIdx;
  do {
    quoteIdx = Math.floor(Math.random() * quotes.length);
  } while (quoteIdx == lastQuoteIdx);

  lastQuoteIdx = quoteIdx;

  document.getElementById("quote-content").innerHTML = quotes[quoteIdx].content;
  document.getElementById("quote-author").innerHTML = quotes[quoteIdx].author;
}
