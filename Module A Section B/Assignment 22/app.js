function oppenedToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function clearedEntry() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

function calculate() {
    var expression = document.getElementById('display').value;
    var result = parseExpression(expression);
    document.getElementById('display').value = result !== undefined ? result : 'Error';
}

function parseExpression(expression) {
    try {
        return Function('"use strict";return (' + expression + ')')();
    } catch (error) {
        return undefined;
    }
}
