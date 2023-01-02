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




###  `css 애니메이션 만드는법` <br>
  one-way UI  애니메이션 만드는법  A상태 -> B상태 <br>

  1. 시작 스타일 <br>
  2. 최종 스타일 <br>
  3. 원할때 최종스타일로 변하라고 코드짬 <br>
  4. 시작스타일에 transition 추가 <br>

      
<hr>
      
              document.getElementsByClassName('navbar-toggler')
                          [0].addEventListener('click',function(){
                              document.getElementsByClassName('list-group')[0].classList.toggle('show');  
                              //toggle 있으면 제거 없으면 추가해줘라는 태그
                          })
