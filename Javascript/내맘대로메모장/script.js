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

for (let i = 0; i < $(".tab-button").length; i++) {
  $(".tab-button")
    .eq(i)
    .on("click", function () {
      $(".tab-button").removeClass("orange");
      $(".tab-button").eq(i).addClass("orange");
      $(".tab-content").removeClass("show");
      $(".tab-content").eq(i).addClass("show");
    });
}
