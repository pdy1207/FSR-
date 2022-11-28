const clock = document.querySelector(".clock");

function getClock() {
  const date = new Date(); //현재 시간 시각 분초 알려주는 JS 기본
  //padStart ?? === 숫자를 문자화 해서 00 01 02 03 04 ...
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //↓ 바인딩하기~!
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //즉시 호출하고 1초뒤에 쭉실행하려고.
setInterval(getClock, 1000); //1초씩 계속 ing..

/* setInterval(sayHello, 5000); //5초마다 ... 띄어줘

setTimeout(sayHello, 5000); //5초뒤에 나와줘 */
