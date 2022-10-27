1. `display : flex`

            display : flex 로 안하면 깨진다.
            css는 기본적으로 부모를 display : flex로 고정시킴.
            자식테이블을 분리 : flex-basis : 20%
            즉 부모테이블 기준으로 css 너비와  flex를 많이씀
            border가 스케치 느김이라고 생각하면됨.
            
            
2. `z-index`

            카카오 맵이나 다른맵 다 
            z-index가 1로 되어있음 
            그러므로 띄우고싶으면 1보다 위를 하면나옴
            z-index ? position 속성을 이용하면 요소를 겹치게 놓을 수 있습니다. 
            
3. `absolute`

            사용하고 싶다면 부모 테그 포지션이 relateive여야함.
            
4. `h3`

            디폴트로 마진값이 있음(값이 들어감)
            마진값이 있는태그는 여러가지로 있다. 그러므로 몇몇개 잘 확인 후 없애야한다.
            
5. `overflow`

            화면에 넘치는 걸 스크롤로 담고싶어 ~~ 그럼 overflow : scroll
            
6. `transition`

            속성은 CSS 속성이 변화할 때 서서히 변화시키는 속성이다. (버튼 애니메이션 사용 시 활용도 多)
