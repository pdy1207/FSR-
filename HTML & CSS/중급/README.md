### `flex`

/* 
  display : flex  <br>
  부모의 display : flex <br>
  단, 최대한 차지하려고 노력하는것<br>
*/

      .flex-container {
        display: flex;
        justify-content: center; /* 좌우 정렬 */
        align-items: center; /* 상하 정렬 */
        flex-direction: row; /* 가로 세로 */
        flex-wrap: wrap; /* width 크면 밑으로 보내고 싶을때 */
        /* style="flex-grow: 2" 비율로서의 설정 */
      }
      .flex-item {
        width: 100px;
        height: 100px;
        background: gray;
        margin: 5px;
      }
### `media query`

    vw(브라우저 폭에 비례) 
    vh(브라우저 높이에 비례)
    rem(기본 폰트사이즈에 비례) 기본폰트사이즈 === 16px
    em(내 폰트사이즈의 x배)
    큰 사이즈 -> 작은 사이즈 순을 작성

    breakpoint 기준 px값은 다른 사람 따라하는걸 권장
    1200px 
    992px
    768px
    576px
    4개 넘어가면 너무 복잡해짐

  
