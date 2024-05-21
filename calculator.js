// Basic operation functions
function add (n1, n2) {
    return n1 + n2;
}

function subtract (n1, n2) {
    return n1 - n2;
}

function multiply (n1, n2) {
    return n1 * n2;
}

function divide (n1, n2) {
    if (n2 === 0) {
        return 'Can\'t divide by 0';
    }
    return (n1/n2).toFixed(5);
}

// Variables for displaying
let num1;
let operator;
let num2;
let decimalPoint = false;

function operate (n1, operator, n2) {
    switch (operator) {
        case '+':
            return add(n1, n2);

        case '-':
            return subtract(n1, n2);

        case '*':
            return multiply(n1, n2);

        case '/':
            return divide(n1, n2);
    }
}

const body = document.querySelector('body');
const display = document.querySelector('.display');
const displayNum = document.createElement('span');

body.addEventListener('click', (event) => {

    const target = event.target.className;
    switch (target) {

        case '0':
            displayNum.insertAdjacentText('beforeend', 0);
            display.appendChild(displayNum);
            break;

        case '1':
            displayNum.insertAdjacentText('beforeend', 1);
            display.appendChild(displayNum);
            break;

        case '2':
            displayNum.insertAdjacentText('beforeend', 2);
            display.appendChild(displayNum);
            break;
            
        case '3':
            displayNum.insertAdjacentText('beforeend', 3);
            display.appendChild(displayNum);
            break;
            
        case '4':
            displayNum.insertAdjacentText('beforeend', 4);
            display.appendChild(displayNum);
            break;
            
        case '5':
            displayNum.insertAdjacentText('beforeend', 5);
            display.appendChild(displayNum);
            break;
            
        case '6':
            displayNum.insertAdjacentText('beforeend', 6);
            display.appendChild(displayNum);
            break;
            
        case '7':
            displayNum.insertAdjacentText('beforeend', 7);
            display.appendChild(displayNum);
            break;
            
        case '8':
            displayNum.insertAdjacentText('beforeend', 8);
            display.appendChild(displayNum);
            break;
            
        case '9':
            displayNum.insertAdjacentText('beforeend', 9);
            display.appendChild(displayNum);
            break;
        
        case '.':
            if (!decimalPoint) {
                displayNum.insertAdjacentText('beforeend', '.') ;
                decimalPoint = true;
            }
            break; 

        case 'percent':
            displayNum.textContent = parseFloat(displayNum.textContent)/100;
            break;

        case '+':
        case '-':
        case '*':
        case '/':
            num1 = parseFloat(displayNum.textContent);
            // highlight selected operator
            operator = target;
            // allow decimal again
            decimalPoint = false;
            // clear screen
            displayNum.textContent = '';
            break;
        
        case 'del':
            displayNum.textContent = displayNum.textContent.slice(0,-1);
            break;

        case 'equal':
            num2 = parseFloat(displayNum.textContent);
            displayNum.textContent = operate(num1, operator, num2);
            break;

        case 'clear':
            num1 = null;
            num2 = null;
            operator = null;
            decimalPoint = false;
            displayNum.textContent = '';
    }

})
