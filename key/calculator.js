function addToScreen() {
    let displayText = document.getElementById("id-displayText");
    // this.innerText is the inner text of pressed button
    displayText.innerText += this.innerText;
}

function removeFromScreen() {
    let displayText = document.getElementById("id-displayText");
    let innerText = displayText.innerText;
    displayText.innerText = innerText.slice(0, -1);
}

function evaluateText() {
    let displayText = document.getElementById("id-displayText");
    let innerText = displayText.innerText;
    displayText.innerText = eval(innerText);
}

/**
 * Sets event listeners to number buttons.
 */
function setupNumberButtons() {
    let buttons = document.querySelectorAll(".button-operator, .button-number");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', addToScreen, false);
    }
}

/**
 * Sets the backspace button.
 */
function setupBackspaceButton() {
    let backspaceButton = document.getElementById("id-backspace");
    backspaceButton.addEventListener('click', removeFromScreen, false);
}

/**
 * Sets the evaluation button.
 */
function setupEvaluationButton() {
    let evaluationButton = document.getElementById("id-evaluate");
    evaluationButton.addEventListener('click', evaluateText, false);
}


function setup() {
    setupNumberButtons();
    setupBackspaceButton();
    setupEvaluationButton();
}

document.addEventListener('DOMContentLoaded', setup, false);
