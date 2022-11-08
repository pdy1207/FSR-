 #### css
 
   - Sass / Scss (css 전처리기)
   - Sass: Syntactically Awesome Style Sheets
   - Scss: Sassy css (한국에서 더 많이 사용됨)
   - 코드 가독성 
   - 연산 조건 반복가능 (변수 선언, for,if..)
   - 코드 재활용성 (유지보스 용이)
   - @mixin / if 사용해서 반응형 더 쉽게 구현 가능
   - css 클래스는 순서가 없으며, `보통 카멜표기법`으로 사용함. 
   - `margin padding flex` 알면 끝  3개가 끝. 제대로 배우면 css무리없이 가능

※ margin

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
 
 ※ padding
   
    padding: 1em;

    padding: 5% 10%;

    padding: 1em 2em 2em;

    padding: 5px 1em 0 2em;

    /* 전역 값 */
    padding: inherit;
    padding: initial;
    padding: unset;
   
#### HTML
      
   - 보통적으로 div 태그를 많이씀 그러므로 div로서 화면쪼개기 ㄱㄱ 
   - 파피콘 사진은 .icon로 변환을 해줘야 한다! (구글에서 쉽게 검색가능!)
   - p ? h2? `시맨틱 태그 활용`
   - 최적화된 사이트 검색을 위해서 시맨틱 태그를 준수하자. 
   - (p, header, footer, span....)
