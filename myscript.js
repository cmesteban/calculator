
const numBtns = document.querySelectorAll('[data-number]');
const opBtns = document.querySelectorAll('[data-op]');
const equalsBtn = document.querySelector('[data-equals]');
const clearBtn = document.querySelector('[data-clear]');
const minusBtn = document.querySelector('[data-minus]');
const perBtn = document.querySelector('[data-percentage]');

let previousElement = document.querySelector('[data-previous]');
let inputTextElement = document.querySelector('[data-input]');

let opPressed = false;
let numPressed = false;
//initialize variables for computation
let a ="";
let op="";
let b="";

//create math functions
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operation(a,op,b){
    let result;

    switch(operation){
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case 'x':
            result = multiply(a,b);
            break;
        case '÷':
            result = divide(a,b);
            break;
    }

    return result;
}

//Set up Event Listeners for the different buttons
numBtns.forEach(button => button.addEventListener('click',()=>{
    
}));