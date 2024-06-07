const quoteElement = document.getElementById("quote-text");

function fetchQuoteOfDay() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quoteElement.textContent = `"${data.content}" - ${data.author}`;
    })
    .catch((error) => {
      console.error("Error fetching quote of the day:", error);
      quoteElement.textContent = "Failed to fetch the quote of the day.";
    });
}

window.onload = fetchQuoteOfDay;

function generateRandomQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quoteElement.textContent = `"${data.content}" - ${data.author}`;
    })
    .catch((error) => {
      console.error("Error fetching random quote:", error);
      quoteElement.textContent = "Failed to fetch a random quote.";
    });
}

function searchByAuthor() {
  const authorName = document.getElementById("search-input").value.trim();
  if (!authorName) {
    quoteElement.textContent = "Please enter an author's name.";
    return;
  }

  fetch(`https://api.quotable.io/quotes?author=${authorName}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const quote = data.results[randomIndex];
        quoteElement.textContent = `"${quote.content}" - ${quote.author}`;
      } else {
        quoteElement.textContent = "No quotes found for this author.";
      }
    })
    .catch((error) => {
      console.error("Error searching quotes by author:", error);
      quoteElement.textContent = "Failed to search quotes by author.";
    });
}
