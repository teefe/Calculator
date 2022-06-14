let option1 = [];
let op1;
let op2;
let operator;
let operator2;

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const minus = document.querySelector('.minus');
const equals = document.querySelector('.equals');
const divideBtn = document.querySelector('.divide');
const addition = document.querySelector('.addition');
const point = document.querySelector('.modulus');
const multiplyBtn = document.querySelector('.multiply');
const clearBtn = document.querySelector('.upper-btn1');
const delBtn = document.querySelector('.upper-btn');
const display = document.querySelector('.Display-div');

delBtn.addEventListener('click',()=>{
    option1.pop();
    if (option1.length === 0) {
        display.textContent = '0';
        clear();
    }else{
        display.textContent = option1.join("").toString();
    }
})

clearBtn.addEventListener('click',()=>{
   clear();
})

one.addEventListener('click',()=>{
    let choice = one.textContent; 
    selection(choice)
 })

two.addEventListener('click',()=>{
    let choice = two.textContent; 
    selection(choice)
})

three.addEventListener('click',()=>{
    let choice = three.textContent; 
    selection(choice)
})

four.addEventListener('click',()=>{
    let choice = four.textContent; 
    selection(choice)
})

five.addEventListener('click',()=>{
    let choice = five.textContent; 
    selection(choice)
})

six.addEventListener('click',()=>{
    let choice = six.textContent; 
    selection(choice)
})

seven.addEventListener('click',()=>{
    let choice = seven.textContent; 
    selection(choice)
})

eight.addEventListener('click',()=>{
    let choice = eight.textContent; 
    selection(choice)
})

nine.addEventListener('click',()=>{
    let choice = nine.textContent; 
    selection(choice)
})

zero.addEventListener('click',()=>{
    let choice = zero.textContent; 
    selection(choice)
})

equals.addEventListener('click',()=>{
    operator2 = equals.textContent; 
    optionsPopulation();
    display.textContent =  operate(operator,op1,op2);
})

point.addEventListener('click',()=>{
    if (option1.includes('.')) {    
    }else{
        let choice = point.textContent; 
        selection(choice);
    }
})

minus.addEventListener('click',()=>{
    let choice = minus.textContent;
    operatorWork(choice);
})

addition.addEventListener('click',()=>{
    let choice = addition.textContent; 
    operatorWork(choice);
})

multiplyBtn.addEventListener('click',()=>{
    let choice = multiplyBtn.textContent; 
    operatorWork(choice);
})

divideBtn.addEventListener('click',()=>{
    let choice = divideBtn.textContent;
    operatorWork(choice); 
})

function selection(select){
    option1.push(select);
    display.textContent = option1.join("").toString();
}

function operatorWork(opChoice){
    optionsPopulation();
    operator = opChoice;
    option1 = [];
}
function clear(){
    option1 = [];
    op1 = undefined;
    op2 = undefined;
    operator = undefined;
    display.textContent = '0';
}

function optionsPopulation(){
    if (op1 >= 0) {
        op2 = parseFloat(option1.join('').toString());
        
    }else{
        op1 = parseFloat(option1.join('').toString());
    }
    if (operator2 == '=') {
    }else{
        if (op1 >= 0 && op2 >= 0) {
            operate(operator,op1,op2);
            op1 = operate(operator,op1,op2);
        }
    }
    operator2 = '';
}

function add(op1,op2) {
	return op1+op2;
};

function subtract(op1,op2) {
	return op1-op2;
};

function multiply(op1,op2) {
	return op1*op2;
};

function divide(op1,op2){
    return op1/op2
}

function operate(operator,op1,op2){
    switch (operator) {
        case "+":
            return add(op1,op2)
        case "-":
            return subtract(op1,op2)
        case "x":
            return multiply(op1,op2)
        case "÷":
            if (op2===0) return 'Error'
            return divide(op1,op2)
        default:
            return null
    }
}
