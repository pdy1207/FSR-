<!doctype html>
<html lang="en">
  <head>
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="main.css">
    <title>Hello, world!</title>
    <style>
      .alert-box{
        background-color: skyblue;
        padding: 20px;
        color: white;
        border-radius: 5px;
        display: none;
        }
        .list-group{
            display: none;
        }
        .show {
            display: block;
        }
    </style>
    
  </head>
  
  <body>
    

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


    
      <script>
             // 버튼을 누르면 show라는 클래스명을 추가하자

            document.getElementsByClassName('navbar-toggler')
            [0].addEventListener('click',function(){
                document.getElementsByClassName('list-group')[0].classList.toggle('show');  
                //toggle? 있으면 제거 없으면 추가해줘라는 태그
            })

            //queryselect 변환하기
            document.querySelector('.navbar-toggler').addEventListener('click',function(){
                document.querySelectorAll('.list-group')[0].classList.toggle('show');                
            })

            document.querySelector('.list-group')
            //css 문법이랑 똑같은 문법 querySelector() 
            //하지만 맨 위에 나오는 한개만 찾아준다. 그래서 나온게 querySelectorAll            
            document.querySelectorAll('.list-group-item')[]
            //허나 이건 뒤에 인덱싱을 해야한다.


      </script>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
  </body>
</html>
