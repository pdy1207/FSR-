## 파일 지저분 해져서 정의 정리!

### `array / object`

![image](https://user-images.githubusercontent.com/110442250/210938599-770aca74-5b37-4a72-b8c9-81822dd645e8.png)


### `반복문의 용도`

1. 코드 반복
2. array, object 데이터 전부 꺼낼때 사용

### `forEach 안에 파라미터 2개 생성`

  - 첫째는 array안의 데이터
  - 둘째는 0부터 1씩 증가하는 정수

### `서버와의 요청`


      /* 
            서버와 요청
          1. 어떤 데이터인지
          2. 어떤 방법으로 요청할건지 잘 기재해야함.
          
          - 데이터의 url 
          - GET인지 POST 인지 잘 기재해야 데이터를받음
          GET 데이터를 읽을때 POST 데이터를 보낼때.
        */

### 배열 `정렬하기`

        /* 
        정렬하기  
        */
var 어레이 = [7, 3, 5, 2, 40];

        /*  
        전부 변형 하려면 .map 
        */
        
var 새어레이2 = 어레이.map(function (e) {<br>
  return e * 4;<br>
});<br>
console.log(새어레이2);<br>

      /* 
        원하는 자료만 필터하려면...
        sort() 는 원본 변형
        filter() 는 원본 변형 x
      */
var 새어레이 = 어레이.filter(function (e) {<br>
  return e < 4;<br>
});<br>

console.log(새어레이);<br>
// `어레이.sort();  문자 정렬` <br>
var 어레이2 = ["a", "c", "b"]; <br>
어레이2.sort(); <br> 
console.log(어레이2); <br>

어레이.sort(function (a, b) { <br>
  // `a ,b 는 array 안의 자료` <br>
  // `return 오른쪽이 양수면 a를 오른쪽으로` <br>
  // `return 오른쪽이 음수면 b를 오른쪽으로` <br>
  return b - a; <br>
}); 

      /* 숫자 정렬 */
      

console.log(어레이);<br>
