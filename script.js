// Function to append characters to the display
function appendCharacter(character) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}
