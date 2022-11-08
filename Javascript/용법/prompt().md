

    prompt();라는 함수는 사용자에게 창을 띄어 값을 받음.
    prompt();를 사용하면 답을 할때까지 코드의 실행을 멈추고, 매우 오래된 방법임. 별로 안이쁨. css로 바꾸지도 못함.

    const age = prompt("how old are you?");
    console.log(typeof age);
    typeof라는 키워드를 쓰면 type를 볼 수 있는데, prompt();에서 숫자를 입력해도 string이라고 뜬다. string이 디폴트이기 때문이다.

    한 type로 받아서 다른 type로 바꾸는 작업을 해야한다. "15"-->15
    string-->number로 변환해주는 함수 parseInt();
    console.log(typeof "15", typeof parseInt("15")); --> string number
    이렇게 숫자로 변환이 되야 비교를 할 수 있다.
    참고로 "숫자"가 아닌게 입력되면 변환이 안됨. NaN(not a number)

    const age = parseInt(prompt("how old are you?"));
    console.log(age);
