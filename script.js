// add
const equationObj = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num2 === 0 ? 'no!' : num1 / num2,
}

const numObj = {
    num1: '',
    num2: '',
    equation: '',
};
const numHist = {
    num1: '',
    num2: '',
    equation: '',
    equals: '',
}
const lowerDisplay = document.querySelector('.lower');
const upperDisplay = document.querySelector('.upper');
const numberKey = document.querySelectorAll('.key.number');
const opKey = document.querySelectorAll('.key.operator');
const clearAll = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const backspace = document.querySelector('.delete')

let screenText = lowerDisplay.textContent;

backspace.addEventListener('click', (e) => {
    console.log(e.target);
    if (
        numObj.num1 != ''
    )
    console.log(typeof numObj.num1);
    let something = numObj.num1.split('')
    something.pop();
    numObj.num1 = something.join('');
    lowerDisplay.textContent = `${numObj.num1} ${numObj.equation} ${numObj.num2}`;

})

clearAll.addEventListener('click', (e)=>{
    console.log(e.target);
    numObj.num1 = '';
    numObj.num2 = '';
    numObj.equation = '';
    numHist.num1 = '';
    numHist.num2 = '';
    numHist.equation = '';
    numHist.equals = '';
    upperDisplay.textContent = `${numHist.num1} ${numHist.equation} ${numHist.num2} ${numHist.equals}`;

    lowerDisplay.textContent = `${numObj.num1} ${numObj.equation} ${numObj.num2}`;
lowerDisplay.classList.remove('smallText');
})

Array.from(opKey).forEach(key => key.addEventListener('click', (button) => { 
    if (numObj.equation === ''){
        numObj.equation = button.target.textContent;
    }
    
    lowerDisplay.textContent = `${numObj.num1} ${numObj.equation} ${numObj.num2}`;
}
)
)


Array.from(numberKey).forEach(key => key.addEventListener('click', (button) => { 
        if(numObj.num1.length < 4 && numObj.equation === ''){
        numObj.num1+=button.target.textContent;
        }
       
        if (numObj.equation !== '' && numObj.num2.length < 4){
            numObj.num2+=button.target.textContent;

        }
        if (numObj.num1.length >= 2 && numObj.num2.length>3){
            lowerDisplay.classList.add('smallText');

        }
        if (numObj.num1.length >= 3 && numObj.num2.length>2){
            lowerDisplay.classList.add('smallText');

        }
    lowerDisplay.textContent = `${numObj.num1} ${numObj.equation} ${numObj.num2}`;
                }
                                                        )
                            );

equals.addEventListener('click', (button) => {
    console.log(button.target);
    for(let key in numObj){
if(numObj[key] === ''){
    return;
}
    }
    if(numObj.equation === '﹢'){
        numHist.num1 = numObj.num1;
        numHist.num2 = numObj.num2;
        numHist.equation = numObj.equation;
        numHist.equals = '=';
        upperDisplay.textContent = `${numHist.num1} ${numHist.equation} ${numHist.num2} ${numHist.equals}`;

        numObj.num1 = equationObj.add(Number(numObj.num1), Number(numObj.num2));
        numObj.num2 = '';
        numObj.equation = '';
        lowerDisplay.textContent = `${numObj.num1} ${numObj.equation} ${numObj.num2}`;

    }
    else if(numObj.equation === '×'){
        numHist.num1 = numObj.num1;
        numHist.num2 = numObj.num2;
        numHist.equation = numObj.equation;
        numHist.equals = '=';
        upperDisplay.textContent = `${numHist.num1} ${numHist.equation} ${numHist.num2} ${numHist.equals}`;

        numObj.num1 = equationObj.multiply(Number(numObj.num1), Number(numObj.num2));
        numObj.num2 = '';
        numObj.equation = '';
        lowerDisplay.textContent = `${numObj.num1} ${numObj.equation} ${numObj.num2}`;

    }
    else if(numObj.equation === '÷'){
        numHist.num1 = numObj.num1;
        numHist.num2 = numObj.num2;
        numHist.equation = numObj.equation;
        numHist.equals = '=';
        upperDisplay.textContent = `${numHist.num1} ${numHist.equation} ${numHist.num2} ${numHist.equals}`;

        numObj.num1 = equationObj.divide(Number(numObj.num1), Number(numObj.num2));
        numObj.num2 = '';
        numObj.equation = '';
        lowerDisplay.textContent = `${numObj.num1} ${numObj.equation} ${numObj.num2}`;

    }
    else if(numObj.equation === '﹣'){
        numHist.num1 = numObj.num1;
        numHist.num2 = numObj.num2;
        numHist.equation = numObj.equation;
        numHist.equals = '=';
        upperDisplay.textContent = `${numHist.num1} ${numHist.equation} ${numHist.num2} ${numHist.equals}`;

        numObj.num1 = equationObj.subtract(Number(numObj.num1), Number(numObj.num2));
        numObj.num2 = '';
        numObj.equation = '';
        lowerDisplay.textContent = `${numObj.num1} ${numObj.equation} ${numObj.num2}`;

    }
    
    

})


//operate : takes an operator and 2 numbers and then 
//calls one of the functions on them.

const operate = (operator, num1, num2) => {
    return operator(num1,num2);
}

//clear button

//chosenOp = undefined;
//numberArray = [];

// delete button



// populate the display when buttons are pushed

//const rock = document.querySelector('#rock');
//rock.addEventListener('click', (e) => {
