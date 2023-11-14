const texts = ["</Web Developer>", "</Designer>", "</Freelancer>", "</CHAROT LANG!>"]; // Add your desired typewriter texts here
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typewriter").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200);
})();
const navLinks = document.querySelectorAll('.responsive-button');

// Add an event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        // Get the target section from the href attribute
        const targetId = link.getAttribute('href');

        // Use the element's ID to scroll to the target section
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
        
