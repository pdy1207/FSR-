### css 용어정리

#### 보통  margin padding flex 알면 끝  3개가 끝.

-. `margin` 

            margin: 0 0 20px
            margin: 10px; // 동서남북 모두 10px 패딩
            margin: 5px(위) 10px(오른쪽&왼쪽) 0(아래);
            margin: 5px(위&아래) 10px(오른쪽&왼쪽);
            margin: 10px(위) 20px(오른쪽) 30px(아래쪽) 10px(왼쪽)
            ※ 단점은 소스가 많이 길어짐.....
            margin-right
            margin-letf
            margin-top
            margin-bottom

1. `display : flex`

            display : flex 로 안하면 깨진다.
            css는 기본적으로 부모를 display : flex로 고정시킴.
            자식테이블을 분리 : flex-basis : 20%
            즉 부모테이블 기준으로 css 너비와  flex를 많이씀
            border가 스케치 느김이라고 생각하면됨.
            display : flex 하면 세로 정렬이 되는데 flex-direction column으로 변환 
            
            
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
            
7. `list-style` 

           ul태그의 있는 점 을 없앰 
