//정답만드는 함수
let answer = '정답숫자담는변수';
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

answer = [`${answerFirstNum}`, `${answerSecondNum}`, `${answerThirdNum}`];

//하하 ^^ 너는 전역변수란다.
let counter = 0;

//사용자가 정답을 입력하고 그 입력받은 것을 배열로 담는 로직
function gameStart() {
  let userInputNum = document.getElementById('user-input-num').value;
  let inputNumArray = userInputNum.split('');

  //볼의 경우의 수
  let ballNum = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (inputNumArray[i].includes(answer[j])) {
        ballNum++;
      }
    }
  }
 
  //스트라이크의 경우의수 - 배열매서드(forEach)를 사용
  let StrikeNum = 0;

  inputNumArray.forEach((item, index) => {
    if (item.includes(answer[index])) {
      StrikeNum++;
    }
  });

  ballNum = ballNum - StrikeNum;

  console.log(counter);
  counter ++;


  if(StrikeNum === 3){
      alert(`${counter}번째 시도! 정답을 맞췄습니다! 게임이 종료됩니다`);
    }
    let hintMessage = document.getElementById('hint')
    
    hintMessage.innerHTML= `${ballNum}B${StrikeNum}S`;
    
}
