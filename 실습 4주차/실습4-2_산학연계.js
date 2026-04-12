const firstNumberInput = document.querySelector("#first-number");
const secondNumberInput = document.querySelector("#second-number");
const resultText = document.querySelector("#result");

const addButton = document.querySelector("#add-button");
const subtractButton = document.querySelector("#subtract-button");
const multiplyButton = document.querySelector("#multiply-button");
const divideButton = document.querySelector("#divide-button");
const clearButton = document.querySelector("#clear-button");

function getNumbers() {
  const firstNumber = Number(firstNumberInput.value);
  const secondNumber = Number(secondNumberInput.value);

  return { firstNumber, secondNumber };
}

function showResult(resultValue) {
  resultText.textContent = resultValue;
}

addButton.addEventListener("click", function () {
  const numbers = getNumbers();

  // TODO:
  // firstNumber와 secondNumber를 더한 결과를 result 변수에 저장해보세요.
  const result = numbers.firstNumber + numbers.secondNumber;

  showResult(result);
});

subtractButton.addEventListener("click", function () {
  const numbers = getNumbers();

  // TODO:
  // firstNumber에서 secondNumber를 뺀 결과를 result 변수에 저장해보세요.
  const result = numbers.firstNumber - numbers.secondNumber;

  showResult(result);
});

multiplyButton.addEventListener("click", function () {
  const numbers = getNumbers();

  // TODO:
  // firstNumber와 secondNumber를 곱한 결과를 result 변수에 저장해보세요.
  const result = numbers.firstNumber * numbers.secondNumber;

  showResult(result);
});

divideButton.addEventListener("click", function () {
  const numbers = getNumbers();

  // TODO:
  // secondNumber가 0인지 먼저 확인해보세요.
  // 0이면 "0으로 나눌 수 없습니다."를 보여주고 함수를 종료해보세요.

  // TODO:
  // firstNumber를 secondNumber로 나눈 결과를 result 변수에 저장해보세요.
  if (numbers.secondNumber === 0) {
    showResult("0으로 나누기 불가능!!!");
    return;
  }

  const result = numbers.firstNumber / numbers.secondNumber;

  showResult(result);
  
});

clearButton.addEventListener("click", function () {
  firstNumberInput.value = "";
  secondNumberInput.value = "";
  resultText.textContent = "0";
  alert("계산 결과를 초기화 하기 위해 C버튼이 필요!");
});
