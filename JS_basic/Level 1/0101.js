<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JS study</title>
  </head>
  <body>
    <h1 id="hello">안녕하세요</h1>
    <h1 id="hi">JS 초보에요</h1>
    <script>
      document.getElementById("hello").innerHTML = "안녕";
      //html문서 . ~~의  html 요소를 가져와라 Id가 'hello' 인 / 내부의 html
      document.getElementById("hello").style.color = "red";
      //getElementById === 셀렉터
      document.getElementById("hi").innerHTML = "JS 고수에요";
      // 1. 바꿀요소ID 2. 무엇을 3. 어떻게

      //하나하나 상세히 설명할수 있어야함

      = 숙제) 16px 글씨 사이즈를 줄이자 
      document.getElementById("hello").style.fontSize = "16px";
    </script>
  </body>
</html>
