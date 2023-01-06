<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   
</body>
<script>
    //array에서 철수 찾기
    var 출석부 = ['흥민','영희','철수','재석'];
    function 이름찾기(name){
       for(var i = 0; i < 4; i++){
        if(name == 출석부[i]){
            console.log('있어요');
        }
       }
    }
    //구구단
    for(var i = 2; i < 10; i++){
        console.log( i+'단')                  
        for(var j=1; j < 10; j++){
            console.log( i * j)                  
        }
    }
    //
</script>
</html>
