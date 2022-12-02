/* 버튼0누르면 
- 모든버튼에 붙은 orange 클래스명 제거
- 버튼 0 에 오렌지 클래스명추가 
- 모든 div에 붙은 show 클래스명 제거
- div 0에 show 클래스명 추가
*/

/* 
    var ? let ? 재선언 차이도 있지만 변수의 범위차이.

    "제 코드가 좋은 코드인지 모르겠어요" 

    1. 원하는 기능이 잘 구현되었는가
    2. 확장성좋은가
    3. 나중에 관리가 쉬울 것인가
    4. 성능문제 없는가

    이런거 체크해보면 됩니다. 그럼 자연스럽게 좋은 코드임  
    ===
    for 문법의 용도를 잘 기억해둡시다.  
    코드를 반복실행
    비슷한 코드들을 직접 복붙하는게 귀찮으면 for 반복문을 쓰는 것일 뿐이지 
    for 부터 써놓고 무슨 코드를 채울지 고민하고 그러면 안됩니다.  
*/

// for (let i = 0; i < $(".tab-button").length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       탭열기(i);
//     });
// }
$(".list").click(function (e) {
  /* 지금누른버튼 e.targer 
    html  data-id="0" 대입함
    이벤트 리스너 1개만 써도 개발가능.
  */
  console.log(e.target.dataset.id);
  탭열기(e.target.dataset.id);
});

function 탭열기(숫자) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(숫자).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(숫자).addClass("show");
}

var car = ["소나타", 50000, "white"]; //배열
var car2 = { name: "소나타", price: [50000, 30000, 40000] }; //Object

document.querySelector(".car-title").innerHTML = car2.name;
document.querySelector(".car-price").innerHTML = car2.price[2];

/* array/object 차이점
   array : 자료간 순서 존재
          자료간 정리 가능 car.sort()...
          중간에 자르기도 가능 car.slice(1,3).... 
   object : 순서개념 x 
            아무거나 다 넣을 수 있음
            object, array 넣기도 가능..!

  복잡하게 생긴 array , Object 자료 다룰 땐 출력해보고 시작기호도
  확인하면 쉽다~!
*/
var pants = [28, 30, 32, 34];
var shirts = [95, 100, 105];
$(".form-select")
  .eq(0)
  .on("input", function () {
    var value = this.value;
    if (value == "셔츠") {
      $(".form-select").eq(1).removeClass("form-hide");
      $(".form-select").eq(1).html("");
      shirts.forEach(function (a) {
        $(".form-select").eq(1).append(`<option>${a}</option>`);
      });
    } else if (value == "바지") {
      $(".form-select").eq(1).removeClass("form-hide");
      $(".form-select").eq(1).html("");
      pants.forEach((a) => {
        $(".form-select").eq(1).append(`<option>${a}</option>`);
      }); //arrow function this값이 달라질 수 있음.
    }
  });
var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

products.forEach((a, i) => {
  var 템플릿 = `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100">
          <h5>${products[i].title}</h5>
          <p>가격 : ${products[i].price}</p>
        </div>`;
  $(".row").append(템플릿);
});
