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
