let btnValueUp = document.getElementById('btn-value-up');
let btnValueReset = document.getElementById('btn-reset');
let btnValueDown = document.getElementById('btn-value-down');

let valueBlock = document.querySelector('.panel-value');

let value = 0;

function incrementValue() {
    ++value;
    valueBlock.innerHTML = value;
    checkValue();
}

function decrementationValue() {
    --value;
    valueBlock.innerHTML = value;
    checkValue();
}

function resetValue() {
    value = 0;
    valueBlock.innerHTML = value;
    checkValue();
}

function checkValue() {
    if (value < 0) {
        valueBlock.classList.add('negative-number');
    } else {
        valueBlock.classList.remove('negative-number');
    }
}

btnValueUp.addEventListener('click', incrementValue);
btnValueReset.addEventListener('click', resetValue);
btnValueDown.addEventListener('click', decrementationValue);