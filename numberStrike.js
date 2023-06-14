//정답만드는 함수
const answer = [];
const answerFirstNum = createRandomNum();
let answerSecondNum = createRandomNum();
let answerThirdNum = createRandomNum();

while(isDuplicateNum(answerFirstNum, answerSecondNum, answerThirdNum)) {
  answerSecondNum = createRandomNum();
  answerThirdNum = createRandomNum();
}

answer.push(answerFirstNum, answerSecondNum, answerThirdNum);

function createRandomNum() {
  return Math.floor(Math.random() * 10);
}

function isDuplicateNum(answerFirstNum, answerSecondNum, answerThirdNum) {
  if (answerFirstNum === answerSecondNum) {
    return true;
  }

  if (
    answerFirstNum === answerThirdNum ||
    answerSecondNum === answerThirdNum
  ) {
    return true;
  }

   return false;

}

console.log(answer);

//하하 ^^ 너는 전역변수란다.
let counter = 0;

//사용자가 정답을 입력하고 그 입력받은 것을 배열로 담는 로직
function gameStart() {
  const userInputNum = document.getElementById('user-input-num').value;
  const inputNumArray = userInputNum.split('').map(Number);

  //볼의 경우의 수
  let ballCount  = 0;

  const countOfCheckDuplicateNum = 3
  for (let i = 0; i < countOfCheckDuplicateNum; i++) { {
    console.log(isIncludes(answer, inputNumArray[i]));
      if (isIncludes(answer, inputNumArray[i])) {
        ballCount ++;
      }
    }
  }

function isIncludes(answer, inputNumber) {
  return answer.includes(inputNumber) 
}

  //스트라이크의 경우의수 - 배열매서드(forEach)를 사용
  let strikeCount  = 0;

  inputNumArray.forEach((item, index) => {
    if (item === answer[index]) {
      strikeCount ++;
    }
  })


  ballCount = ballCount - strikeCount;

  console.log(ballCount);
  console.log(strikeCount);

  counter++;

  if (strikeCount === 3) {
    alert(`${counter}번째 시도! 정답을 맞췄습니다! 게임이 종료됩니다`);
  }
  let hintMessage = document.getElementById('hint');

  hintMessage.innerHTML = `${ballCount}B${strikeCount}S`;
}
