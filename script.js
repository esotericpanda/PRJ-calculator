
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

function performLastOperation(){
    if(!chosenKey) return;
    let result= operate(memorizedValue, chosenKey, displayedValue);
    memorizedValue=0;
    displayedValue=result;
    display.textContent=result;
}



const display=document.querySelector(".display");

let memorizedValue=0;
let displayedValue=0;
display.textContent=displayedValue;

let chosenKey="";

const digitKeys=[...document.querySelectorAll(".digit")];
digitKeys.forEach(btn=>{
    btn.addEventListener('click',()=>{
        updateDisplayedValue(btn.textContent);
        // console.log(btn.textContent)
    });
});


const operatorKeys=[...document.querySelectorAll(".operator")]

operatorKeys.forEach(btn=>{
    btn.addEventListener('click',()=>{
        performLastOperation();
        memorizedValue=displayedValue;
        displayedValue=0;
        chosenKey=btn.textContent;
    });
});

const equalKey=document.querySelector('#equal')

equalKey.addEventListener('click',performLastOperation);

const AC = document.querySelector("#AC");
AC.addEventListener('click',()=>{
    memorizedValue=0;
    displayedValue=0;
    display.textContent=0;
})