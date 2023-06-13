function userInput() {
  let userInputNum = document.getElementById('user-input-num').value;
  let inputNumArray = userInputNum.split('');
  console.log(inputNumArray);
}

  let answerFirstNum = Math.floor(Math.random() * 10);
  let answerSecondNum = Math.floor(Math.random() * 10);
  while (answerFirstNum === answerSecondNum) {
    answerSecondNum = Math.floor(Math.random() * 10);
  }
  let answerThirdNum = Math.floor(Math.random() * 10);
  while (answerFirstNum === answerThirdNum || answerSecondNum === answerThirdNum) {
    answerThirdNum = Math.floor(Math.random() * 10);
  }
  console.log(`${answerFirstNum}${answerSecondNum}${answerThirdNum}`)


  
//볼의 경우의 수
let ballNum = 0;

//스트라이크의 경우의수
let StrikeNum = 0;



console.log(`${ballNum}B${StrikeNum}S`);

