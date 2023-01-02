<!doctype html>
<html lang="en">
  <head>
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="main.css">
    <!-- jQuery cdn -->
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <title>Hello, world!</title>
    
  </head>
  
  <body>
    
    <div class="black-bg ">
        <div class="white-bg">
          <h4>로그인하세요</h4>

          <form action="success.html">
            <div class="my-3">
              <input id="id" type="text" class="form-control">
             </div>
             <div class="my-3">
               <input id="pw" type="password" class="form-control">
             </div>
             <button type="submit" class="btn btn-primary">전송</button>
             <button type="button" class="btn btn-danger" id="close">닫기</button>
          </form>           

        </div>
      </div> 

      <script>

        //조건문 쓰는법 if(조건){조건이 참일 때 실행할 코드}

        if(1 == 3){
            console.log('맞아요');
        } else if(3 == 3){
            console.log('맞아요2');
        } //앞의 조건식이 참이면 else 문 뒤는 아예 실행 x 


        $('form').on('submit',function(e){
            if(document.getElementById('id').value == ''){
                alert('아이디 입력해주세요.')
            } 
            if (document.getElementById('pw').value == ''){
                alert('비밀번호를 입력해주세요.')
            } else if(document.getElementById('pw').value.length < 6 ){
                alert('더 길게 입력해주세요.')
            } //length 비밀번호 길이 
                e.preventDefault(); //폼전송 막음            
        });

      </script>

    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand">Navbar</span>
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav> 


      <ul class="list-group">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
       <div class="main-bg">
        <h4>Shirts on Sale</h4>
        <button id="login" class="btn btn-danger">로그인</button>
       </div>
      <script>
          //queryselect  / queryselectAll
          document.querySelector('.navbar-toggler').addEventListener('click',function(){
              document.querySelectorAll('.list-group')[0].classList.toggle('show');                
            })
            
            //  HTML 조작 문법을 쉽게 바꿔주는 라이브러리들
            // jQuery , React, Vue 등 React , Vue js 잘해야함
            // jQuery === html 조작하는 코드가 짧아짐. 
            
            // document.querySelector('.hello').innerHTML = '바보';
            // $('.hello').html('바보');

            $('#login').on('click',function(){
                $('.black-bg').addClass('show-modal'); //Class 추가
            })
            $('#close').on('click',function(){
                $('.black-bg').removeClass('show-modal'); //Class 제거
            })
            
    </script>



    <!--         
         모든 js 라이브러리는 body 끝나기 전에 넣기
    -->
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
  </body>
</html>
