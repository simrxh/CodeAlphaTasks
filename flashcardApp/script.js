document.addEventListener('DOMContentLoaded', () => {

    const flashcards = [
        { question: "What's the capital of France?", answer: "Paris" },
        { question: "What is the speed of light?", answer: "3 × 10^8 m/s" },
        { question: "Where is the Statue of Liberty located?", answer: "USA" },
        { question: "Which planet in our solar system is commonly known as the Red Planet?", answer: "Mars" },
        { question: "What is considered the longest river in the world?", answer: "Nile River" },
        { question: "Which is the largest hot desert in the world?", answer: "Sahara Desert" },
        { question: "What is the chemical symbol for the element gold?", answer: "Au" },
        { question: "Deficiency of Iron leads to?", answer: "Anaemia" }
    ];

    let currentCard = 0;

    const flashcardElement = document.getElementById('flashcard');
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');

    function displayCard() {
        questionElement.textContent = flashcards[currentCard].question;
        answerElement.textContent = flashcards[currentCard].answer;
    }

    // Show / Hide Answer
    document.getElementById('show-answer').addEventListener('click', () => {
        flashcardElement.classList.toggle('is-flipped');
    });

    // Next Card
    document.getElementById('next').addEventListener('click', () => {

        if (flashcardElement.classList.contains('is-flipped')) {

            flashcardElement.classList.remove('is-flipped');

            setTimeout(() => {
                currentCard = (currentCard + 1) % flashcards.length;
                displayCard();
            }, 600);

        } else {

            currentCard = (currentCard + 1) % flashcards.length;
            displayCard();

        }
    });

    // Previous Card
    document.getElementById('previous').addEventListener('click', () => {

        if (flashcardElement.classList.contains('is-flipped')) {

            flashcardElement.classList.remove('is-flipped');

            setTimeout(() => {
                currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
                displayCard();
            }, 600);

        } else {

            currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
            displayCard();

        }
    });

    displayCard();
});