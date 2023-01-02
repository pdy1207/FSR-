<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>태조 이성계가 태어난 년도는?</p>
    <input type="text" id="answer">
    <button id="send-answer">제출</button>

    <script>
        var count = 0;         
        document.querySelector('#send-answer').addEventListener('click',function(){
            count += 1;
            var answer = document.querySelector('#answer').value;
            if(answer == '1335'){
                alert('정답')
            } else if (count >= 3 && answer != '1335'){
                alert('멍청이')
            }
        })

        //이자율 계산하기
        //첫 예금액이 5만원 미만이면 이율이 연 15퍼센트,
        // 첫 예금액이 5만원 이상이면 이율이 연 20퍼센트라고 합니다.

        var 예금액 = 10000;
        var 미래예금액 = 0;

        if(예금액 >= 50000){
            미래예금액 = 예금액 * 1.2 * 1.2;
        } else {
            미래예금액 = 예금액 * 1.15 * 1.15;
        }


        console.log(미래예금액);


        // 3분의 2만큼 총 2번 리필해주는 카페 최대한 마실 수 있는 커피 양은?
        //커피를 90ml 주문하면 첫 리필은 60ml를 해주며, 그 다음 리필은 40ml를 해주는 카페

        var first = 360;
        var total = 0;
        total = first + first * 2 / 3 + first * 2 / 3 * 2 / 3;

        console.log(total);


    </script>
</body>
</html>
