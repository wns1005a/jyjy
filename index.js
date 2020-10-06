// 계산용 객체
let object = {
  firstNumber: "",
  secondNumber: "",
  operator: null,
};

// 버튼
function pushButton(char) {
  const resultinput = document.getElementById("resultinput");
  resultinput.value = resultinput.value + char;

  if (char == "+") {
    object.operator = add;
  } else if (char == "-") {
    object.operator = subtract;
  } else if (char == "*") {
    object.operator = multiply;
  } else if (char == "/") {
    object.operator = divide;
  } else {
    if (object.operator == null) {
      object.firstNumber += char;
    } else {
      object.secondNumber += char;
    }
  }
}

// 리셋
function reset() {
  const resultinput = document.getElementById("resultinput");

  resultinput.value = "";
  object = {
    firstNumber: "",
    secondNumber: "",
    operator: null,
  };
}

// 계산
function solve() {
  const resultinput = document.getElementById("resultinput");

  resultinput.value = object.operator(object.firstNumber, object.secondNumber);
  object = {
    firstNumber: "",
    secondNumber: "",
    operator: null,
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
