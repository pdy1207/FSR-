### js사용하는 이유?

 > html 상호작용하기 위해서 <br>
그 말인 즉슨, html의 element들을 js를 통해 변경하고 읽을 수 있다는 점 <br>
브라우저의 핵심 object 


### Events 
   
    ex) title.addEventListener("click",handleTitleClick)
    여기서 handleTitleClick에 ()을 붙여주지 않는게 정말 중요하다.
    우리는 JavaScript에 function만을 넘겨주고, 유저가 click이라는 행위를 할 경우에 JS가 실행버튼을 눌러주길 바라는 거다.

### document

    document의 body,head,title 이런것들은 중요하기 때문에
    document.body.style~의 명령이 허용되지만, div같은것들은 호출이 안됨
    나머지 element들은 querySelector나 getElementById로 불러와야됨!!!!!!!

### prompt();


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


<hr>
1. 배열 `Array`


    
            데이터를 나열하기 위한 방법 중 하나.
            항상 [ ] 안에 콤마(,)로 데이터들을 나열한다. 변수도 쓰일 수 있고, boolean, text, 숫자 등 데이터 정렬이 가능하다.
            ex) const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

            만약, 위의 변수에서 5번째 element 값을 알려주세요. 라고 한다면 어떻게 출력해야 할까?
            ex) console.log(daysOfWeek[4]) 라고 해야 5번째 값을 출력할 수 있다.

            왜?? 컴퓨터는 숫자를 0부터 세기 때문에, “mon”은 0번째라고 생각하면 된다.
            JS의 주석처리는 //

            위의 상태에서 daysOfWeek이란 변수에 하나의 값을 더 넣고 싶다면 다음과 같이한다.
            ex) daysOfWeek.push(“holiday”) .push는 추가하는 기능.

            암튼, array는 하나의 변수 안에 데이터의 list를 가지는 것. 
            다른 프로그래밍 언어에도 있는 가장 기초적이고 필수적인 데이터 구조! 값을 리스트로 정리하는 것

2. 배열 `Objects`

        object는 property를 가진 데이터를 저장해주며, { } 를 사용한다.

        const player = {
        name : tomato,
        color : red,
        food : true,
        };

        console.log(player);

        property를 불러오는 방법은 2가지가 있다.

        1. console.log(player.name); => tomato
        2. console.log(player["name"]); => tomato

        또한 property를 바꾸는 것은 가능하지만 선언된 object를 바꾸는 것은 불가능하다.

        ex) const player = {
        name : tomato,
        color : red,
        food : true,
        };

        console.log(player);
        player.color = "blue";
        console.log(player.color);
        --> blue

        그리고 property를 추가 할 수도 있다.

        player.koreanName = "토마토";

        --> {name: "tomato", color: "blue", food: true, koreaName: "토마토"}
      
      
 3. `원하는 값`

       원하는 값을 불러오는 방법에는 여러가지 있다.

        getElementById >> 하나의 값
        getElementsByClassName >> 배열
        getElementsByTagName . . . >> 배열

        위에서 id 빼고는 배열을 가져오기 때문에 title.innerText 와 같은 방법은 사용할 수 없다.
        또 Grab me3 처럼 Id를 가진 태그의 하위 태그를 선택하고 싶을 때 위의 방법으로는 한계가 있다.
        이때 사용하는 게 querySelector/querySelectorAll

        const title = document.querySelector(".hellos h1"); 와 같이 쓰면
        .hellos h1 마치 css 선택자 처럼 원하는 요소를 선택 가능
        console.log((title.innerText = "히힛")); 화면에 글자가 히힛으로 바뀐다

        ** 단 hello라는 class를 가진 h1태그가 여러개인 경우 querySelectorAll을 써야 한다.
        선택자가 id인 경우엔 #hello
        만약 요소를 특정하지 않고 선택자만 쓰는 경우
        >> const title = document.querySelector(".hellos");


        Grab me3

        hello

        라고 써도 grab me3와 hello 모두 선택됨
        그리고 여기서 만약 업데이트를 하면
        >>console.log((title.innerText = "히힛"));
        >> 결과는 grab me3, hello 둘 다 사라지고 히힛으로 대체된다.
        >> 

4. `toggle` 

       const a = document.querySelector("h1")
       function handleTitleClick (){
       if(a.classList.contains("active")){
       a.classList.remove("active");
       }else{
       a.classList.remove("active");
       }

       하지만 이보다 더 super cooooooooooooool한건 toggle...
       function handleTitleClick(){
       a,classList.toggle("active");
       } 단 3줄이면 완성....
