var a = [];

function add(z1, z2) {
    return parseFloat(z1) + parseFloat(z2);
}

function substract(z1, z2) {
    return parseFloat(z1) - parseFloat(z2);
}

function multiply(z1, z2) {
    return parseFloat(z1) * parseFloat(z2);
}

function divide(z1, z2) {
    return parseFloat(z1) / parseFloat(z2);
}

function addp(z1, z2) {
    return parseFloat(z1) * (1 + parseFloat(z2) / 100);
}

function substractp(z1, z2) {
    return parseFloat(z1) * (1 - parseFloat(z2) / 100);
}

function multiplyp(z1, z2) {
    return parseFloat(z1) * (parseFloat(z2) / 100);
}

function dividep(z1, z2) {
    return parseFloat(z1) / (parseFloat(z2) / 100);
}

function multiplypp(z1, z2) {
    return (parseFloat(z1) / 100) * (parseFloat(z2) / 100);
}

function dividepp(z1, z2) {
    return (parseFloat(z1) / 100) / (parseFloat(z2) / 100);
}

function getc(input) {
    var f = 0;
    var st = document.getElementById("output").innerHTML.toString();
    for (i = 0; i < st.length; i++) {
        if (st[i] == '.') f = 1;
    }
    if (f == 1 && value == '.') return;
    if (input == '*' || input == '/' || input == '+' || input == '%' || input == ',') {
        if (st.length == 0) return;
    }
    if (input == ',' || input == '%') {
        if (st[st.length - 1] > '9' || st[st.length - 1] < '0') return;
    }
    document.getElementById("output").innerHTML += value;
}