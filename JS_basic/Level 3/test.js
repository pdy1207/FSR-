<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
  <script>
    //array에서 철수 찾기
    var 출석부 = ["흥민", "영희", "철수", "재석"];
    function 이름찾기(name) {
      for (var i = 0; i < 4; i++) {
        if (name == 출석부[i]) {
          console.log("있어요");
        }
      }
    }
    //구구단
    for (var i = 2; i < 10; i++) {
      console.log(i + "단");
      for (var j = 1; j < 10; j++) {
        console.log(i * j);
      }
    }
    //함수([10, 20, 30, 40, 50], 40) 이렇게 쓰면 콘솔창에 "평균보다 10점이 올랐네요"가 떠야합니다. (평균이 30이니까)

    // 함수([40, 40, 40], 20) 이렇게 쓰면 콘솔창에 "평균보다 20점이 떨어졌네요 재수추천"이 떠야합니다. (평균이 40이니까)

    function 함수(arr, b) {
      var result = 0;
      for (let i = 0; i < arr.length; i++) {
        result = result + arr[i];
      }

      if (result / arr.length < b) {
        console.log("올랐네요");
      } else {
        console.log("같거나 떨어졌네요 재수추천");
      }
    }
  </script>
</html>
