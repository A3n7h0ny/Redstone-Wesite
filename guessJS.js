// Generate a random number between 1 and 30
let randomNumber = Math.floor(Math.random() * 30) + 1;
let attempts = 0;
const maxAttempts = 5;

function checkNumber() {
    const userGuess = parseInt(document.querySelector('input[type="number"]').value);
    const message = document.getElementById('display');
    const inputField = document.querySelector('input[type="number"]');
    
    // Validate input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 30) {
        message.innerHTML = "Please enter a valid number between 1 and 30!";
        message.style.backgroundColor = "#ffeb3b";
        message.style.color = "#333";
        inputField.value = "";
        inputField.focus();
        return;
    }
    
    attempts++;
    
    // Check the guess
    if (userGuess === randomNumber) {
        message.innerHTML = ` Congratulations! You guessed it right!<br>The number was ${randomNumber}.<br>It took you ${attempts} attempt(s).`;
        message.style.backgroundColor = "#4CAF50";
        message.style.color = "white";
        disableGame();
    } else if (attempts >= maxAttempts) {
        message.innerHTML = ` Game Over! The number was ${randomNumber}.<br>Better luck next time!`;
        message.style.backgroundColor = "#f44336";
        message.style.color = "white";
        disableGame();
    } else {
        // Give hints
        if (userGuess < randomNumber) {
            message.innerHTML = `Too low! Try a higher number.<br>Attempts left: ${maxAttempts - attempts}`;
        } else {
            message.innerHTML = `Too high! Try a lower number.<br>Attempts left: ${maxAttempts - attempts}`;
        }
        message.style.backgroundColor = "#ff9800";
        message.style.color = "white";
    }
    
    // Clear input and focus for next guess
    inputField.value = "";
    inputField.focus();
}

function disableGame() {
    document.querySelector('button').disabled = true;
    document.querySelector('input[type="number"]').disabled = true;
    document.querySelector('button').style.opacity = "0.6";
    document.querySelector('button').style.cursor = "not-allowed";
    
    // Add restart button
    const restartBtn = document.createElement('button');
    restartBtn.textContent = "Play Again";
    restartBtn.onclick = restartGame;
    document.querySelector('.container').appendChild(restartBtn);
}

function restartGame() {
    // Reset game state
    randomNumber = Math.floor(Math.random() * 30) + 1;
    attempts = 0;
    
    // Reset UI
    const message = document.getElementById('display');
    message.innerHTML = "";
    message.style.backgroundColor = "";
    
    const inputField = document.querySelector('input[type="number"]');
    inputField.disabled = false;
    inputField.value = "";
    inputField.focus();
    
    const checkBtn = document.querySelector('button');
    checkBtn.disabled = false;
    checkBtn.style.opacity = "1";
    checkBtn.style.cursor = "pointer";
    
    // Remove restart button
    const restartBtn = document.querySelectorAll('button')[1];
    if (restartBtn) {
        restartBtn.remove();
    }
}

// Add event listener for Enter key
document.querySelector('input[type="number"]').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkNumber();
    }
});

// Add some animation to the message box
const messageBox = document.querySelector('.message');
messageBox.style.transition = 'all 0.5s ease';

// Focus on input when page loads
window.onload = function() {
    document.querySelector('input[type="number"]').focus();
};