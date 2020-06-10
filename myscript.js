
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

    switch(op){
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

//Set up Event Listeners for the different Number Buttons
numBtns.forEach(button => button.addEventListener('click',()=>{
    equalsBtn.classList.remove("pressed"); //removes equalsBtn highlight

    //if nothing has been pressed before pressing this button
    if(opPressed && numPressed === false){
        inputTextElement.value = "";//input box becomes empty
        numPressed = true; 
    }
    //if number is less than 9 characters long
    if(inputTextElement.value.length < 9){
        //if the value in the input field is 0 and the button pressed isnt .
        if(inputTextElement.value === '0' && button.innerText !== '.'){
            inputTextElement.value =+ button.innerText;//makes sure that theres not a 0 before the number
        }
        else if(button.innerText === '.'){
            if(inputTextElement.value.indexOf('.')<0){
                inputTextElement.value += button.innerText;//puts a 0 before the '.'
            }
        } else if(inputTextElement.value === '-0') {
            let arr = inputTextElement.value.split("")
            arr[1] = button.innerText
            arr.toString()
            inputTextElement.value = arr.join("")
        } else {
            inputTextElement.value += button.innerText
        }
        
    }
    //changes AC to C whenever input field isnt empty
    if(inputTextElement.value !== '0'){
        clearBtn.textContent = "C";
    }

}));

//Set Up Event Listener for Different Op Buttons
opBtns.forEach(button => button.addEventListener('click', () =>{
    
    button.classList.remove("notpressed");//removes css class
    button.classList.add("pressed");// adds css class
    if(previousElement.textContent !== "" && numPressed){// if theres alreay a previousElement and numPressed is true
        a = Number(previousElement.textContent);//first element in the operation which is the previousElement
        b = Number(inputTextElement.value);//second element in operation is what was just inputed
        inputTextElement.value = operation(a, op, b);//input value shows the result of the desired operation
        previousElement.textContent = inputTextElement.value;// changes the previous Element to the new solution
    }
    a = Number(inputTextElement.value);
    previousElement.textContent = a;
    op = button.innerText;
    opPressed = true;
    numPressed = false;  


}));