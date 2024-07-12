const texts = ["Hello, World!","Welcome to My Website", "I’m H.Ngoc", "I’m Dev"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("title").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(() => {
            document.getElementById("title").style.animation = 'none'; // Stop animation temporarily
            document.getElementById("title").offsetHeight; // Trigger reflow
            document.getElementById("title").style.animation = ''; // Restart animation
        }, 8000); // Pause before next word
    }
    setTimeout(type, 220); // Speed of typing
}());
