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
    <!-- 
        UI만드는 stap
        1. HTML / CSS로 미리 디자인
        2. 필요할 때 보여달라고 코드짬 (JS로) 

        코드 TIP 
        자동완성 활용을 많이하자 초보들의 실수!

        긴 코드 짧은 단어로 축약 하는법
        => function 문법
            작명은 구체적인게 좋다.
            1. 소문자 시작
            2. camelCase
        재사용 용이함
    -->
    <div class="alert-box" id="alert">알림창임
        <button onclick="btnClose()">닫기</button>
    </div>
        <button onclick="btnOpen()">버튼</button>
        
    <script>

        // 조작할 html 의 하단에 코드짜야 잘됩니다.
        // 셀렉터 오타 주의
        // 그냥 기본문법 오타
        function btnOpen(){
            document.getElementById('alert').style.display='block';
        }


        function btnClose(){
            document.getElementById('alert').style.display='none';
        }  
    </script>
</body>
    
</html>
