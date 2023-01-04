<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="main.css" />
    <!-- jQuery cdn -->
    <script
      src="https://code.jquery.com/jquery-3.6.3.min.js"
      integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
      crossorigin="anonymous"
    ></script>
    <title>Hello, world!</title>
  </head>

  <body class="light">
    <div class="black-bg">
      <div class="white-bg">
        <h4>로그인하세요</h4>

        <form action="success.html">
          <div class="my-3">
            <input id="id" type="text" class="form-control" />
          </div>
          <div class="my-3">
            <input id="pw" type="password" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">전송</button>
          <button type="button" class="btn btn-danger" id="close">닫기</button>
        </form>
      </div>
    </div>

    <script>
      
      //이메일 정규식
      $("form").on("submit", function (e) {
        var email = document.getElementById('id').value;
        var password = document.getElementById('pw').value;
        if (email == "" ) {
          alert("아이디 입력해주세요.");
        } else if(/\S+@\S+.\S+/.test(email) == false){
          alert('이메일형식이 아닙니다.');
        } else if (password == "") {
          alert("비밀번호를 입력해주세요.");
        } else if (document.getElementById("pw").value.length < 6) {
          alert("더 길게 입력해주세요.");
        } //length 비밀번호 길이 및 대문자 정규화
        else if(/[A-Z]/.test(password) == false){
          alert('대문자가 없습니다.');
        }
        e.preventDefault(); //폼전송 막음
      });
    </script>

    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand">JSSHOP</span>
        <span class="badge bg-dark">Dark 🔄</span>
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>

    <!-- 스크롤 바  -->
    <script>
  
      //스크롤바 100px 이상 내리면 로고 폰트사이즈 줄이기
      $(window).on('scroll',function(){
       let tot = $(window).scrollTop();
        if(tot > 180){
          $('.navbar-brand').css('font-size','20px')
        }else {
          $('.navbar-brand').css('font-size','25px')
        }
      })

    </script>
    
    
    <script>
    
      var count = 0;
      $(".badge").on("click", function () {
        count += 1;
        if (count % 2 == 0) {
          $(".badge").html("Dark 🔄");
          $(".light").attr("class", "dark"); 
        } else {
          $(".badge").html("Light 🔄");
          $(".dark").attr("class", "light");
        }
      });



    </script>

    <ul class="list-group">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
      <li class="list-group-item">A fourth item</li>
      <li class="list-group-item">And a fifth one</li>
    </ul>
    <div class="alert alert-danger">
      <span id="num">5</span> 초 이내 구매시 사은품 증정!
    </div>
    <div class="main-bg">
      <h4>Shirts on Sale</h4>
      <button id="login" class="btn btn-danger">로그인</button>
    </div>
    
    
    <script>

        console.log(60000 * 0.1);


        //소수점 반올림 toFixed(몇자리)
        function vat(a){
          var num = (a* 1.1).toFixed(2);
          return num;
        }



    </script>

    <!-- 사이드 바 기능 구현 -->
    <div style="overflow: hidden;">
      <div class="slide-container">
        <div class="slide-box">
          <img src="car1.png">
        </div>
        <div class="slide-box">
          <img src="car2.png">
        </div>
        <div class="slide-box">
          <img src="car3.png">
        </div>
      </div>
    </div>
  <div style="margin-top: 25px;">
    <button class="slide-1 btn btn-outline-dark">1</button>
    <button class="slide-2 btn btn-outline-dark">2</button>
    <button class="slide-3 btn btn-outline-dark">3</button>
    <button class="defore btn btn-outline-dark">이전</button>
    <button class="next btn btn-outline-dark">다음</button>
  </div>

    <!-- 아무말 대잔치 -->
    <div class="lorem" style="width: 200px; height: 100px; overflow-y: scroll;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus a accusamus facere officia perferendis quaerat natus similique optio iusto reiciendis quia dolorem nobis, dolor hic, eveniet velit! Aspernatur, vitae impedit.</div>

    <script>
     //div의 스크롤바 내린 양 + 눈에보이는 div높이 === div의 실제높이
      $('.lorem').on('scroll',function(){

        // div 내의 스크롤바 내린 양 scrollTop
        var scrolltot = document.querySelector('.lorem').scrollTop; 

        // div 실제 높이늰 scrollHeight
        var scrollheight = document.querySelector('.lorem').scrollHeight;

        // div 높이
        var divheight = document.querySelector('.lorem').clientHeight;

        console.log(scrolltot,scrollheight,divheight);    

        //여유를 두고 비교를하는게 좋다.
        if((scrolltot+divheight) > scrollheight - 10){
          alert('다 읽었습니다.');
        }
      })
      // scroll 다룰때 주의점 
      // 1. scroll 이벤트 리스너 안의 코드는 1초에 60번 이상 실행
      // 2. 바닥체크도 여러번 중복으로 해줌..
      // ======================================================
      // 1. 스크롤바 조작할 때마다 코드 실행 가능
      // 2. 박스의 실제 높이 / 보이는 높이 
      // 3. 스크롤양도 구할 수 있다.
    </script>

    <script>

      //다음사진 
      var photo = 1;
     $('.next').on('click',function(){
        $('.slide-container').css('transform', 'translateX(-'+ photo +'00vw)');
        photo++;
     })
      //이전사진
      
     $('.defore').on('click',function(){
      $('.slide-container').css('transform', 'translateX(-'+ photo +'00vw)');
      photo--;
     })

      $('.slide-1').on('click',function(){
        $('.slide-container').css('transform' , 'translate(0vw)');
        
      })
      $('.slide-2').on('click',function(){
        $('.slide-container').css('transform' , 'translate(-100vw)');
         
      })
      $('.slide-3').on('click',function(){
        $('.slide-container').css('transform' , 'translate(-200vw)');
       
      })
    </script>


    <script>
      
          var count = 5;
          
          function timer(){
          count -= 1;
          var num = document.querySelector('#num').innerHTML = count;
          if(count === 0){            
            $('.alert').hide();            
            clearInterval(timerVar); 
          }
        }
        var timerVar = setInterval(timer, 1000);
        


    </script>
<div style="height: 1000px;"></div>

    <script>
      
      document
        .querySelector(".navbar-toggler")
        .addEventListener("click", function () {
          document.querySelectorAll(".list-group")[0].classList.toggle("show");
        });



      $("#login").on("click", function () {
        $(".black-bg").addClass("show-modal"); //Class 추가
      });
      $("#close").on("click", function () {
        $(".black-bg").removeClass("show-modal"); //Class 제거
      });
    </script>

    <!--         
         모든 js 라이브러리는 body 끝나기 전에 넣기
    -->
    <script
      src="https://code.jquery.com/jquery-3.6.3.min.js"
      integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
