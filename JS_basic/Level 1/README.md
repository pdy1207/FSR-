## 파일이 지저분해져서 정의 정리


### `정의!`
      document.getElementById("hello").innerHTML = "안녕";      
      //html문서 . ~~의  html 요소를 가져와라 Id가 'hello' 인 / 내부의 html
      
      document.getElementById("hello").style.color = "red";      
      //getElementById === 셀렉터
      
      document.getElementById("hi").innerHTML = "JS 고수에요";      
      // 1. 바꿀요소ID 2. 무엇을 3. 어떻게
      
       // 잘 모르겠다 그러면 차근차근 한글로서 내가 하고싶은 일을 적어보자.


###  `UI만드는 stap` <br>
  1. HTML / CSS로 미리 디자인 <br>
  2. 필요할 때 보여달라고 코드짬 (JS로)  <br>

  코드 TIP  <br>
  자동완성 활용을 많이하자 초보들의 실수! <br>

  긴 코드 짧은 단어로 축약 하는법 <br>
  => function 문법 <br> 
      작명은 구체적인게 좋다. <br>
      1. 소문자 시작 <br>
      2. camelCase <br>
  재사용 용이함

### `변수 쓰는 이유` <br>

1. 길고 복잡한 자료들 저장가능
2. 특정 값을 기억하게 만들고 싶어서

      ![image](https://user-images.githubusercontent.com/110442250/210219692-b51b4fef-5f9f-42fd-bb09-da9a5fe2eb44.png)



###  `css 애니메이션 만드는법` <br>
  one-way UI  애니메이션 만드는법  A상태 -> B상태 <br>

  1. 시작 스타일 <br>
  2. 최종 스타일 <br>
  3. 원할때 최종스타일로 변하라고 코드짬 <br>
  4. 시작스타일에 transition 추가 <br>

### `조건문`

  ※ 사실은 if문 안엔 true / false 넣어야 잘 작동한다.
            
            != 다름 === 엄격함 == 느슨함
- 조건 2개 이상을 비교하고 싶으면 && and || or


      
<hr>
      
              document.getElementsByClassName('navbar-toggler')
                          [0].addEventListener('click',function(){
                              document.getElementsByClassName('list-group')[0].classList.toggle('show');  
                              //toggle 있으면 제거 없으면 추가해줘라는 태그
                          })
                          
                          
                  input 에 입력한 값이 바뀔때 뭔가 실행하려면? 
                           change input으로부터 포커스를 잃었을때.
                          document.getElementById('id').addEventListener('change',function(){ 
                               console.log('안녕')
                           })
