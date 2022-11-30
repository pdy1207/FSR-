/* ================================= */
var 이름 = "kim";
let 이름 = "kim";
const 이름 = "kim";
/* 무슨차이? 
        let ? 재 선언 x 변수 까먹고 또만들 수  있는걸 방지
        const ? 재 선언 x 재 할당조차 안됨. 변하면 안되는 값을 보관하기.
        var ? 재 선언도 되고 재 할당도 되고 범위로서는 함수 나머지는 {}
      */
/* 애니메이션은 css로 해야함. */
$(".login").on("click", function () {
  $(".black-bg").addClass("show-modal");
});
$(".btn").on("click", function () {
  $(".black-bg").css("display", "none");
});
// document.querySelector('.hello').innerHTML = "바보";
// $(".hello").html = "바보";
/* HTML 조작문법을 쉽게 바꿔주는 라이브러리들
   jQuery, React, Vue등  프론트3대장은 JS를 잘해야함.
*/
/* jQuery
  JS 의 라이브러리며, 코드가 짧아지고 간편함.
  */

document.querySelector(".list-group");
/*
  querySelector
  하지만 맨 위에 나오는 한개만 찾아줌.
  다 찾아주는건 querySelector + All
  즉 몇번째? querySelectorAll()[0]...
*/

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.querySelector(".list-group").classList.toggle("show");
  });
/*
    toggle? show가 있으면 제거 없으면 추가
  */
/* ================================= */

function 삼육구게임(num) {
  if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
} //3의 배수일땐 박수 아니면 통과~!
function 삼육구게임업그레이드(num) {
  if (num.value == "") {
    alert("장난 ㄴㄴ");
  }
  if (num % 9 == 0) {
    console.log("박수x2");
  } else if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
} //3의 배수일땐 박수 / 9의 배수에서는 박수 x 2
function 합격했냐(num1, num2) {
  if (num1 < 40 || num2 < 40) {
    console.log("불합격");
  } else if (num1 + num2 >= 120) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
} //시험합격?
//다크모드 ajax문법
var count = 0;
$(".badge").on("click", function () {
  count += 1;
  if (count % 2 == 1) {
    $(".badge").html("Light 🔄");
  } else {
    $(".badge").html("Dark 🔄");
  }
});
