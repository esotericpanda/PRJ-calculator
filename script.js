function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, operator, y) {
    switch (operator) {
        case "+":
            return add(x, y);
        case "-":
            return add(x, y);
        case "*":
            return multiply(x, y);
        case "÷":
            return divide(x, y);
    }
}

const foo = document.querySelector('#test');

console.log(foo.textContent)