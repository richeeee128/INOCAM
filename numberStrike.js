function userInput() {
  let userInputNum = document.getElementById('user-input-num').value;
  let inputNumArray = userInputNum.split('');
  console.log(inputNumArray);
}

function answerNum() {
  let answerFirstNum = Math.floor(Math.random() * 10);
  let answerSecondNum = Math.floor(Math.random() * 10);
  while (answerFirstNum === answerSecondNum) {
    answerSecondNum = Math.floor(Math.random() * 10);
  }
  let answerThirdNum = Math.floor(Math.random() * 10);
  while (answerFirstNum === answerThirdNum || answerSecondNum === answerThirdNum) {
    answerThirdNum = Math.floor(Math.random() * 10);
  }
  console.log(answerFirstNum);
  console.log(answerSecondNum);
  console.log(answerThirdNum);
  let answerArray = [answerFirstNum, answerSecondNum, answerThirdNum]
  console.log(answerArray);
  return;
}
answerNum();





