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
const decimal = document.querySelector("#decimal")
const plusMinus = document.querySelector("#plus-minus")
let display = document.querySelector("#display");

let a = "";
let b = "";
let useB = false;
let symbol = undefined;
let aArray;
let bArray;
let decimalUsed = false;
display.textContent = " "

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
    if (a.length > 10) {
      alert("Max length reached")
    } else {
    a += "0";
    display.textContent = a;
    return a;
    };
  } else {
    if (b.length > 10) {
      alert("Max length reached")
    } else {
    b += "0";
    display.textContent = b;
    return b;
    };
  };
});

one.addEventListener("click", () => {
  if (useB === false) {
    if (a.length > 10) {
      alert("Max length reached")
    } else {
    a += "1";
    display.textContent = a;
    return a;
    };
  } else {
    if (b.length > 10) {
      alert("Max length reached")
    } else {
    b += "1";
    display.textContent = b;
    return b;
    };
  };
});

two.addEventListener("click", () => {
  if (useB === false) {
    if (a.length > 10) {
      alert("Max length reached")
    } else {
    a += "2";
    display.textContent = a;
    return a;
    };
  } else {
    if (b.length > 10) {
      alert("Max length reached")
    } else {
    b += "2";
    display.textContent = b;
    return b;
    };
  };
});

three.addEventListener("click", () => {
  if (useB === false) {
    if (a.length > 10) {
      alert("Max length reached")
    } else {
    a += "3";
    display.textContent = a;
    return a;
    };
  } else {
    if (b.length > 10) {
      alert("Max length reached")
    } else {
    b += "3";
    display.textContent = b;
    return b;
    };
  };
});

four.addEventListener("click", () => {
  if (useB === false) {
    if (a.length > 10) {
      alert("Max length reached")
    } else {
    a += "4";
    display.textContent = a;
    return a;
    };
  } else {
    if (b.length > 10) {
      alert("Max length reached")
    } else {
    b += "4";
    display.textContent = b;
    return b;
    };
  };
});

five.addEventListener("click", () => {
  if (useB === false) {
    if (a.length > 10) {
      alert("Max length reached")
    } else {
    a += "5";
    display.textContent = a;
    return a;
    };
  } else {
    if (b.length > 10) {
      alert("Max length reached")
    } else {
    b += "5";
    display.textContent = b;
    return b;
    };
  };
});

six.addEventListener("click", () => {
  if (useB === false) {
    if (a.length > 10) {
      alert("Max length reached")
    } else {
    a += "6";
    display.textContent = a;
    return a;
    };
  } else {
    if (b.length > 10) {
      alert("Max length reached")
    } else {
    b += "6";
    display.textContent = b;
    return b;
    };
  };
});

seven.addEventListener("click", () => {
  if (useB === false) {
    if (a.length > 10) {
      alert("Max length reached")
    } else {
    a += "7";
    display.textContent = a;
    return a;
    };
  } else {
    if (b.length > 10) {
      alert("Max length reached")
    } else {
    b += "7";
    display.textContent = b;
    return b;
    };
  };
});

eight.addEventListener("click", () => {
  if (useB === false) {
    if (a.length > 10) {
      alert("Max length reached")
    } else {
    a += "8";
    display.textContent = a;
    return a;
    };
  } else {
    if (b.length > 10) {
      alert("Max length reached")
    } else {
    b += "8";
    display.textContent = b;
    return b;
    };
  };
});

nine.addEventListener("click", () => {
  if (useB === false) {
    if (a.length > 10) {
      alert("Max length reached")
    } else {
    a += "9";
    display.textContent = a;
    return a;
    };
  } else {
    if (b.length > 10) {
      alert("Max length reached")
    } else {
    b += "9";
    display.textContent = b;
    return b;
    };
  };
});

plusMinus.addEventListener("click", () => {
  if (useB === false) {
    if (a > 0) {
    a = "-" + a;
    display.textContent = a;
    return a;
    } else {
    aArray = a.split("");
    aArray.shift();
    a = aArray.join();
    display.textContent = a;
    return a;
    };
  } else {
    if (b > 0) {
      b = "-" + b;
      display.textContent = b;
      return b;
      } else {
      bArray = b.split("");
      bArray.shift();
      b = bArray.join();
      display.textContent = b;
      return b;
      };
  };
});

decimal.addEventListener("click", () => {
  decimalUsed = true
  if (useB === false) {
    aArray = a.split("");
    if (aArray.includes(".")) {
      display.textContent = a;
      return a;
    } else {
      a += "."
      display.textContent = a;
      return a;
    }
  } else {
    bArray = b.split("");
    if (bArray.includes(".")) {
      display.textContent = b;
      return b;
    } else {
      b += "."
      display.textContent = b;
      return b;
    }
  }
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
  decimalUsed = false;
  aArray = [];
  bArray = [];
  display.textContent = "Cleared!";
}

function operate() {
  aArray = a.split("")
  if (aArray.includes(".")) {
    decimalUsed = true;
  }
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
  aArray = a.split("")
  if (aArray.includes(".")) {
    decimalUsed = true;
  }
  if (a.length > 10 && decimalUsed == true) {
    a = Number(a)
    display.textContent = a.toFixed(5);
    a = a + '';
    return a;
  } else {
    display.textContent = a;
    return a;
  };
};

function subtraction(a, b) {
  a = Number(a);
  b = Number(b);
  let total = a - b;
  a = total + '';
  aArray = a.split("")
  if (aArray.includes(".")) {
    decimalUsed = true;
  }
  if (a.length > 10 && decimalUsed == true) {
    a = Number(a)
    display.textContent = a.toFixed(5);
    a = a + '';
    return a;
  } else {
    display.textContent = a;
    return a;
  };
};

function multiplication(a, b) {
  a = Number(a);
  b = Number(b);
  let total = a * b;
  a = total + '';
  aArray = a.split("")
  if (aArray.includes(".")) {
    decimalUsed = true;
  }
  if (a.length > 10 && decimalUsed == true) {
    a = Number(a)
    display.textContent = a.toFixed(5);
    a = a + '';
    return a;
  } else {
    display.textContent = a;
    return a;
  };
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
  aArray = a.split("")
  if (aArray.includes(".")) {
    decimalUsed = true;
  }
  if (a.length > 10 && decimalUsed == true) {
    a = Number(a)
    display.textContent = a.toFixed(5);
    a = a + '';
    return a;
  } else {
    display.textContent = a;
    return a;
  };
  };
};
