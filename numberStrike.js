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

console.log(answer);
console.log(answer[0]);
console.log(answer[1]);
console.log(answer[2]);

//사용자가 정답을 입력하고 그 입력받은 것을 배열로 담는 로직
function gameStart() {
  let userInputNum = document.getElementById('user-input-num').value;
  let inputNumArray = userInputNum.split('');
  console.log(inputNumArray);

  //볼의 경우의 수
  let ballNum = 0;

  //   for (let i = 0; i < 3; i++) {
  //     if (inputNumArray.includes(answer[i])) {
  //       ballNum++;
  //       console.log(ballNum);
  //     }
  // }
  //     console.log(inputNumArray.includes(answer[1]));

  inputNumArray.forEach((item, index) => {
    if (item.includes(answer[index])) {
      ballNum++;
    }
  });

  console.log(ballNum);

  //스트라이크의 경우의수
  let StrikeNum = 0;
  if (
    inputNumArray[0] === answer[0] ||
    inputNumArray[1] === answer[1] ||
    inputNumArray[2] === answer[2]
  ) {
    StrikeNum ++;
  }
  console.log(`${ballNum}B${StrikeNum}S`);
}
