<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      /* 간단 코딩테스트 */
      function 삼육구게임(num) {
        if (num % 3 == 0) {
          console.log("박수");
        }
      } 
      function 삼육구게임업그레이드(num) {
        if (num % 9 == 0) {
          console.log("박수 x 2");
        } else if (num % 3 == 0) {
          console.log("박수");
        } else {
          console.log("통과");
        }
      }

      function 합격했냐(num1, num2) {
        if (num1 < 40 || num2 < 40) {
          console.log("불합격");
        } else if (num1 + num2 >= 120) {
          console.log("합격");
        } else {
          console.log("불합격");
        }
      }
      합격했냐(70, 70); 실행시 총점 120이상이니 콘솔창에 '합격'이 출력되어야합니다.
      합격했냐(30, 100); 실행시 하나 과락이니 콘솔창에 '불합격'이 출력되어야합니다.
      합격했냐(50, 50); 실행시 총점 120미만이니 콘솔창에 '불합격'이 출력되어야합니다.
    </script>
  </body>
</html>
