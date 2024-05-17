const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");
let display = document.querySelector("#display");

let a = "";
let b = "";
let useB = false;
let symbol = undefined;

add.addEventListener("click", () => {
    if (symbol == undefined) {
    symbol = "+";
    useB = true;
    display.textContent = "+";
    return symbol, useB;
    } else {
        operate();
        symbol = "+";
        useB = true;
    };
});

subtract.addEventListener("click", () => {
    if (symbol == undefined) {
    symbol = "-";
    useB = true;
    display.textContent = "-";
    return symbol, useB;
    } else {
        operate();
        symbol = "-";
        useB = true;
    };
});

multiply.addEventListener("click", () => {
    if (symbol == undefined) {
    symbol = "*";
    useB = true;
    display.textContent = "*";
    return symbol, useB;
    } else {
        operate();
        symbol = "*";
        useB = true;
    };
});

divide.addEventListener("click", () => {
    if (symbol == undefined) {
    symbol = "/";
    useB = true;
    display.textContent = "/";
    return symbol, useB;
    } else {
        operate();
        symbol = "/";
        useB = true;
    };
});



zero.addEventListener("click", () => {
    if (useB === false) {
        a += "0";
        display.textContent = a;
        return a;
    } else {
        b += "0";
        display.textContent = b;
        return b;
    };
});

one.addEventListener("click", () => {
    if (useB === false) {
        a += "1";
        display.textContent = a;
        return a;    
    } else {
        b   += "1";
        display.textContent = b;
        return b;
    };
});

two.addEventListener("click", () => {
    if (useB === false) {
        a += "2";
        display.textContent = a;
        return a;    
    } else {
        b   += "2";
        display.textContent = b;
        return b;
    };
});

three.addEventListener("click", () => {
    if (useB === false) {
        a += "3";
        display.textContent = a;
        return a;    
    } else {
        b   += "3";
        display.textContent = b;
        return b;
    };
});

four.addEventListener("click", () => {
    if (useB === false) {
        a += "4";
        display.textContent = a;
        return a;    
    } else {
        b   += "4";
        display.textContent = b;
        return b;
    };
});

five.addEventListener("click", () => {
    if (useB === false) {
        a += "5";
        display.textContent = a;
        return a;    
    } else {
        b   += "5";
        display.textContent = b;
        return b;
    };
});

six.addEventListener("click", () => {
    if (useB === false) {
        a += "6";
        display.textContent = a;
        return a;    
    } else {
        b   += "6";
        display.textContent = b;
        return b;
    };
});

seven.addEventListener("click", () => {
    if (useB === false) {
        a += "7";
        display.textContent = a;
        return a;    
    } else {
        b   += "7";
        display.textContent = b;
        return b;
    };
});

eight.addEventListener("click", () => {
    if (useB === false) {
        a += "8";
        display.textContent = a;
        return a;    
    } else {
        b   += "8";
        display.textContent = b;
        return b;
    };
});

nine.addEventListener("click", () => {
    if (useB === false) {
        a += "9";
        display.textContent = a;
        return a;    
    } else {
        b   += "9";
        display.textContent = b;
        return b;
    };
});

equal.addEventListener("click", () => {
    if (a != "" && symbol != undefined && b == "") {
        alert("You must select a second value!")
        clearTheCalc();
    } else {
        operate();
    }
});

clear.addEventListener("click", () => {
    clearTheCalc();
});

function clearTheCalc() {
    a = "";
    b = "";
    useB = false;
    symbol = undefined;
    display.textContent = "Cleared!";
}

function operate() {
    if (symbol == "+") {
        a = addition(a, b);
        b = "";
        return a, b;
    } else if (symbol == "-") {
        a = subtraction(a, b);
        b = "";
        return a, b;
    } else if (symbol == "*") {
        a = multiplication(a, b);
        b = "";
        return a, b;
    } else if (symbol == "/") {
        a = division(a, b);
        b = "";
        return a, b;
    };
};

function addition(a, b) {
    a = Number(a);
    b = Number(b);
    let total = a + b;
    a = total + '';
    display.textContent = a;
    return a;
};

function subtraction(a, b) {
    a = Number(a);
    b = Number(b);
    let total = a - b;
    a = total + '';
    display.textContent = a;
    return a;
};

function multiplication(a, b) {
    a = Number(a);
    b = Number(b);
    let total = a * b;
    a = total + '';
    display.textContent = a;
    return a;
};

function division(a, b) {
    a = Number(a);
    if (b == "0") {
        alert("You cant divide by zero!")
        clearTheCalc()
    } else {
    b = Number(b);
    let total = a / b;
    a = total + '';
    display.textContent = a;
    return a;
    };
};
