var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    decimalBtn = document.getElementById('decimalBtn'),
    c = document.getElementById('clear'),
    questionBtn = document.getElementById('question');
    percentBtn = document.getElementById('percent');
    historyBtn = document.getElementById('history');

var viewer = document.getElementById('viewer'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '+';


for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });
}

for (var i = 0; i < operations.length; i++) {
    var operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
        operation(e.target.textContent);
    });
}

decimalBtn.addEventListener('click', decimal);

c.addEventListener('click', clear);

questionBtn.addEventListener('click', question);

percentBtn.addEventListener('click', percent);

historyBtn.addEventListener('click', gethistory);

function numberPress(number) {
    if (MemoryNewNumber) {
        viewer.value = number;
        MemoryNewNumber = false;
    } else {
        if (viewer.value === '0') {
            viewer.value = number;
        } else {
            if (viewer.value[viewer.value.length - 1] !== '%') viewer.value += number;
        }
    }
};

function operation(op) {
    var localOperationMemory = "";
    for (var i = 0; i < viewer.value.length - 1; i++) {
        localOperationMemory += viewer.value[i];
    }
    if (viewer.value[viewer.value.length - 1] !== '%') localOperationMemory += viewer.value[viewer.value.length - 1];

    var histroyexpr = "";
    histroyexpr += MemoryCurrentNumber;
    histroyexpr +=MemoryPendingOperation;
    histroyexpr += viewer.value;

    MemoryNewNumber = true;
    if (viewer.value[viewer.value.length - 1] === '%') {
        //console.log("!!!");
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber *= (1 + parseFloat(localOperationMemory) / 100);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber *= (1 - parseFloat(localOperationMemory) / 100);
        } else if (MemoryPendingOperation === 'х') {
            MemoryCurrentNumber *= (parseFloat(localOperationMemory) / 100);
        } else if (MemoryPendingOperation === '÷') {
            MemoryCurrentNumber /= (parseFloat(localOperationMemory) / 100);
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        }
    }
    else {
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === 'х') {
            MemoryCurrentNumber *= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '÷') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        }
    }

    if (op === "=") {
        makeJSON(histroyexpr);
        makeJSON("=" + MemoryCurrentNumber);
    }
    else if (MemoryPendingOperation !== "=") {
        makeJSON(histroyexpr);
    }

    viewer.value = MemoryCurrentNumber;
    if (op !== '=') viewer.value += op;
    MemoryPendingOperation = op;

};

function decimal() {
    var localDecimalMemory = viewer.value;

    if(MemoryNewNumber){
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    }else {
        if(localDecimalMemory.indexOf('.') === -1){
            localDecimalMemory += '.';
        };
    };

    viewer.value = localDecimalMemory;
};

function clear() {
    viewer.value = '0';
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0 ;
    MemoryPendingOperation = '+';

    makeJSON("Clear");
};

function question() {
    viewer.value = -viewer.value;
}


function percent() {
    viewer.value += '%';
}

function gethistory() {
    document.location = "http://localhost:8081/history";
}

function makeJSON(str) {
    //str += " ";
    var val = JSON.stringify({value : str});
    var request = new XMLHttpRequest();
    request.open("POST", "/hist", true);
    request.setRequestHeader("Content-Type", "application/json");
    //console.log(val);
    request.send(val);
}