<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="main.css">
    <style>
        .alert-box{
            background-color: skyblue;
            padding: 20px;
            color: white;
            border-radius: 5px;
            display: none;
        }
    </style>
</head>

<body>
   
    <div class="alert-box" id="alert">
        <p id="title"> 알림창임</p>
        <button onclick="btn('none')">닫기</button>
    </div>
    
        <button onclick="retitle('아이디를 입력해주세요.')">버튼1</button>
        <button onclick="retitle('비밀번호를 입력해주세요.')">버튼2</button>
        
    <script>
        // 파라미터 문법
        // 파라미터 안의 값을 넣고 이해하자
        // 함수를 1개로서 다양한 코드 실행하기.
        function btn(test){
            document.getElementById('alert').style.display= test;
            
        }
        // 파라미터 예시
        function plus(구멍){
            2 + 구멍
        }
        plus(1);
        
        
        // 잘 모르겠다 그러면 차근차근 한글로서 내가 하고싶은 일을 적어보자.
        // 1. p 태그의 이름을 아이디로 입력해주세요 비밀번호를 입력해주세요 
        // 2. 띄움
        function rename(){
            document.getElementById('title').innerHTML = '아이디를 입력해주세요.';
            document.getElementById('alert').style.display = 'block';
        }
        function rename2(){
            document.getElementById('title').innerHTML = '비밀번호를 입력해주세요.';
            document.getElementById('alert').style.display = 'block';
        }
        //그러나 중복이 됨으로~~

        function retitle(title){
            document.getElementById('title').innerHTML = title;
            document.getElementById('alert').style.display = 'block';
        }


    </script>
</body>
    
</html>


