// Function to highlight all <strong> elements
function highlight() {
    // Select all <strong> elements
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through the <strong> elements and change their color to green
    boldWords.forEach(function(boldWord) {
        boldWord.style.color = 'rgb(0, 128, 0)';
    });
}

// Function to return the color of <strong> elements to black
function return_normal() {
    // Select all <strong> elements
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through the <strong> elements and revert their color to black
    boldWords.forEach(function(boldWord) {
        boldWord.style.color = 'rgb(0, 0, 0)';
    });
}
