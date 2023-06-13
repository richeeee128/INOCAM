//답안 생성
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
console.log(`${answerFirstNum}${answerSecondNum}${answerThirdNum}`);

//입력값


//입력값과 답안 비교

