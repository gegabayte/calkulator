let runningTotal = 0;
let bufer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick (value) {
    if (isNaN(value)){
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = bufer;
}

function handleSymbol(symbol) {
    switch(symbol) {
        case 'C':
            bufer = '0';
            runningTotal = 0 ;
            break;
        case '=':
            if (previousOperator === null) {
                return
            }
            flushOperation(parseInt(bufer));
            previousOperator = null;
            bufer = runningTotal;
            runningTotal = 0;
            break;
        case '':
            if (bufer.length ===1){
                bufer = 0;
            }else {
                bufer = bufer.toString(0, bufer.length - 1);
            }
            break;
        case '+':
        case '-':
    }
}

