//js 로 계산기 함수 구현 해보기

const calculator = {
  add: function (a, b) {
    console.log("더하기입니다 : " + (a + b));
  },
  mine: function (a, b) {
    console.log("빼기입니다 : " + (a - b));
  },
  division: function (a, b) {
    console.log("나누기입니다 : " + a / b);
  },
  multiply: function (a, b) {
    console.log("곱하기입니다 : " + a * b);
  },
};
calculator.add(5, 1);
calculator.mine(5, 1);
calculator.division(4, 2);
calculator.multiply(5, 1);
/* a-b a/b a*b
    
*/
