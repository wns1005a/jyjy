// 계산용 객체
let object = {
  currentNumber: '',
  numbers: [],
  operators: []
};

// 버튼
function pushButton(char) {
  const resultinput = document.getElementById("resultinput");
  resultinput.value = resultinput.value + char;

  if (char == "+") {
    object.operators.push(char);
    object.numbers.push(Number(object.currentNumber));
    object.currentNumber = "";
  } else if (char == "-") {
    object.operators.push(char);
    object.numbers.push(Number(object.currentNumber));
    object.currentNumber = "";
  } else if (char == "*") {
    object.operators.push(char);
    object.numbers.push(Number(object.currentNumber));
    object.currentNumber = "";
  } else if (char == "/") {
    object.operators.push(char);
    object.numbers.push(Number(object.currentNumber));
    object.currentNumber = "";
  } else {
    object.currentNumber += char;
  }
}

// 리셋
function reset() {
  const resultinput = document.getElementById("resultinput");

  resultinput.value = "";
  object = {
    currentNumber: '',
    numbers: [],
    operators: []
  };
}

// 계산
function solve() {
  const resultinput = document.getElementById("resultinput");

  resultinput.value = eval(resultinput.value);
  object = {
    currentNumber: '',
    numbers: [],
    operators: []
  };
}

// 덧셈
function add(a, b) {
  return Number(a) + Number(b);
}

// 뺄셈
function subtract(a, b) {
  return Number(a) - Number(b);
}

// 곱셈
function multiply(a, b) {
  return Number(a) * Number(b);
}

// 나눗셈
function divide(a, b) {
  if (b == 0) {
    return "ERROR";
  } else {
    return Number(a) / Number(b);
  }
}
