// operator input
const operation = prompt('enter operator( either +,-,* or /): ');

// taking the operandi operator
const number1 = parseFloat(prompt('Enter First Prompt:'));
const number2 = parseFloat(prompt('Enter Second Prompt:'));

let result;
if (operation=='+'){
    result= number1+number2;
}
else if(operation=='-'){
    result=number1-number2;
}
else if(operation=='*'){
    result= number1 * number2;
}
else if(operation=='/'){
    result=number1 / number2;
}
else{
    result=number1%number2;
}

alert(result);