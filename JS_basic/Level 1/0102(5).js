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
          <button class="btn btn-danger" id="close">닫기</button>
        </div>
      </div> 


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

      <button class="login">로그인</button>
      
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

            $('.login').on('click',function(){
                $('.black-bg').addClass('show-modal'); //Class 추가
            })
            $('.btn').on('click',function(){
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


===========================================================================================================================
      
/* 
    css 애니메이션 만드는법 
    one-way UI  애니메이션 만드는법  A상태 -> B상태
    
    1. 시작 스타일
    2. 최종 스타일
    3. 원할때 최종스타일로 변하라고 코드짬
    4. 시작스타일에 transition 추가

*/
.alert-box{
    background-color: skyblue;
    padding: 20px;
    color: white;
    border-radius: 5px;
    display: none;
}
/* 슬라이드 애니메이션 */
.list-group{    
    height: 0;
    visibility: hidden;    
    overflow: hidden;
    transition: all 1s;
}
.show {
    display: block;
    height: 206px;
    visibility: inherit;
}
/* 여기까지 */
.black-bg {
    width : 100%;
    height : 100%;
    position : fixed;
    background : rgba(0,0,0,0.5);
    z-index : 5;
    padding: 30px;    
    
    /*
    display: none;
     ↑ 이거말고  
    */ 
    visibility: hidden;
    opacity: 0;
    transition: all 1s;
  }
  .white-bg {
    background: white;
    border-radius: 5px;
    padding: 30px;
  } 
  .show-modal{
    display: block;
    visibility: visible;
    opacity: 1;
}



      
