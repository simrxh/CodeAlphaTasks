const quotes = [
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    }
];

function newQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText =
        `"${quotes[randomIndex].text}"`;

    document.getElementById("author").innerText =
        `— ${quotes[randomIndex].author}`;
}

window.onload = newQuote;