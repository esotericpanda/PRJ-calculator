
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

function updateDisplayedValue(x){
    displayedValue*=10;
    displayedValue+= +x;
    display.textContent=displayedValue
}



const display=document.querySelector(".display");

let displayedValue=0;
display.textContent=displayedValue;

const digitKeys=[...document.querySelectorAll(".digit")];
digitKeys.forEach(btn=>{
    btn.addEventListener('click',()=>{
        updateDisplayedValue(btn.textContent);
        console.log(btn.textContent)
    })
})