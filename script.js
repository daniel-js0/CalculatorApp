let displayValue = '';

function appendValue(value){
    displayValue += value;
    updateDisplay();
}

function clearDisplay(){
    displayValue = '';
    updateDisplay();
}

function calculate(){
    try{
        const result = eval(displayValue);
        displayValue = result;
        updateDisplay();
    }catch (error){
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay(){
    const input = document.getElementById('input');
    input.value = displayValue;
    
}