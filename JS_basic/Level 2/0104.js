<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello, world!</title>
    <link rel="stylesheet" href="main.css">
    <script
    src="https://code.jquery.com/jquery-3.6.3.min.js"
    integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
    crossorigin="anonymous"
    ></script>
</head>
<body>
    

    <div class="container mt-5">
        <ul class="list">
          <li class="tab-button" data-id="0">Products</li>
          <li class="tab-button" data-id="1">Information</li>
          <li class="tab-button" data-id="2">Shipping</li>
        </ul>
        <div class="tab-content">
          <p>상품설명입니다. Product</p>
        </div>
        <div class="tab-content">
          <p>스펙설명입니다. Information</p>
        </div>
        <div class="tab-content">
          <p>배송정보입니다. Shipping</p>
        </div>
      </div> 
      <script src="tab.js">
        
      </script>
  
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
</body>
</html>
====================================================================================================================================
      
      
      
// TAB기능 개발
// 좋은 관습 : 자주쓰는 셀렉터 변수에 넣어쓰기

// var let 차이 변수의 범위차이가 있음. 코드를 반복 실행할때 === for 문

// "제 코드가 좋은 코드인지 모르겠어요" 라고 묻는 분들이 많은데

// 1. 원하는 기능이 잘 구현되었는가

// 2. 확장성좋은가

// 3. 나중에 관리가 쉬울 것인가

// 4. 성능문제 없는가


// for(let i =0; i<$('.tab-button').length; i++){
//     $('.tab-button').eq(i).on('click',function(){
//         tabOpen(i);
//      });
// }
    // 함수로 축약 할때 변수 있으면 파라미터로 바꿔보자
    // data-id로 몰래 숨기기 가능하다
    // 이벤트리스너 1개만 써도 개발이 가능하다.
    $('.list').click(function(e){
       tabOpen(e.target.dataset.id);
    })
    
    function tabOpen(숫자){ //함수로 축약을 할땐 파라미터 를 잘 수정하자
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(숫자).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(숫자).addClass('show');
    }

// $('.tab-button').eq(0).on('click',function(){
//    $('.tab-button').removeClass('orange');
//    $('.tab-button').eq(0).addClass('orange');
//    $('.tab-content').removeClass('show');
//    $('.tab-content').eq(0).addClass('show');
// });
// $('.tab-button').eq(1).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });
// $('.tab-button').eq(2).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });


      
      
