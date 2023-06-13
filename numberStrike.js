//정답만드는 함수
let answer = '정답숫자담는변수'; 
function answerNum() {
  let answerFirstNum = Math.floor(Math.random() * 10);
  let answerSecondNum = Math.floor(Math.random() * 10);
  while (answerFirstNum === answerSecondNum) {
    answerSecondNum = Math.floor(Math.random() * 10);
  }
  let answerThirdNum = Math.floor(Math.random() * 10);
  while (
    answerFirstNum === answerThirdNum ||
    answerSecondNum === answerThirdNum
  ) {
    answerThirdNum = Math.floor(Math.random() * 10);
  }
  answer = `${answerFirstNum}${answerSecondNum}${answerThirdNum}`
}
answerNum();
console.log(typeof answer);

//사용자가 정답을 입력하고 그 입력받은 것을 배열로 담는 로직
function gameStart() {
  let userInputNum = document.getElementById('user-input-num').value;
  let inputNumArray = userInputNum.split('');
  console.log(inputNumArray);
  //볼의 경우의 수
  let ballNum = 0;

  //스트라이크의 경우의수
  let StrikeNum = 0;
    
  console.log(`${ballNum}B${StrikeNum}S`);
}
