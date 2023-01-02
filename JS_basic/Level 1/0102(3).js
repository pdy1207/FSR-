<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
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
        <p id="title" class="title1"> 알림창임</p>
        <button id="close">닫기</button>
    </div>
    
        <button onclick="retitle('아이디를 입력해주세요.')">버튼1</button>
        <button onclick="retitle('비밀번호를 입력해주세요.')">버튼2</button>
        
    <script>        
       
        // getElementsByClassName === 클래스 로서 셀렉을 하는방법 뒤에 [0] 인덱싱을 해야함.
        // 찾은것 중에 0 번째 1번째 등

        function retitle(title){
            document.getElementsByClassName('title1')[0].innerHTML = title;
            document.getElementById('alert').style.display = 'block';
        }

        //addEventListener()
        //클릭 키 입력 스크롤 등

        document.getElementById('close').addEventListener('click', function(){ //콜백 함수(파라미터 자리에 들어가는 함수)
            document.getElementById('alert').style.display = 'none';
        });

    </script>
</body>
    
</html>
