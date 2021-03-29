var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    decimalBtn = document.getElementById('decimalBtn'),
    c = document.getElementById('clear'),
    resultBtn = document.getElementById('equals');
//questionBtn = document.getElementById('question'),
//percentBtn = document.getElementById('percent');
var viewer = document.getElementById('viewer');


for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });
}

for (var i = 0; i < operations.length; i++) {
    var operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e){
        operation(e.target.textContent);
    });
}

decimalBtn.addEventListener('click', decimal);

c.addEventListener('click', clear);

resultBtn.addEventListener('click', result);

/*questionBtn.addEventListener('click', question);
percentBtn.addEventListener('click', percent);*/


function numberPress(number) {
    if(viewer.value === '0'){
        viewer.value = number;
    }else {
        viewer.value += number;
    }
};

function operation(op) {

    console.log("клик по кнопке с операцией " + op);
};

function decimal() {
    console.log("клик по кнопке с запятой");
};

function clear() {
    console.log("клик по кнопке С");
};

function result() {
    console.log("клик по кнопке равно");
}

/*
function question() {
    console.log("клик по кнопке +/-");
}
function percent() {
    console.log("клик по кнопке %");
}*/