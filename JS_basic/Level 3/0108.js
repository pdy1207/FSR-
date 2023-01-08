<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello, world!</title>
    <link rel="stylesheet" href="main.css" />
    <script
      src="https://code.jquery.com/jquery-3.6.3.min.js"
      integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
      crossorigin="anonymous"
    ></script>
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <div class="row">
        <!-- <div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100" />
          <h5>Card title</h5>
          <p>가격 : 70000</p> -->
      </div>
    </div>

    <div class="container my-3">
      <button class="btn btn-danger" id="more">더보기</button>
      <button class="btn btn-danger" id="price">정렬하기</button>
    </div>
    <script>
      /* 가격순 정렬하기 */
      $("#price").on("click", function () {
        products.sort(function (a, b) {
          return a.price - b.price;
        });
        $(".row").html("");

        products.forEach((a, i) => {
          let 템플릿 = `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100" />
          <h5>${a.title}</h5>
          <p>${"가격 : " + a.price}</p> 
          </div>`;
          $(".row").append(템플릿);
        });
      });
    </script>
    <script>
      /* 버튼을 누르면 데이터를 보여줘라 */
      var result = 0;
      $("#more").on("click", function () {
        result = result + 1;
        if (result == 1) {
          $.get("https://codingapple1.github.io/js/more1.json").then((data) => {
            console.log(data);

            data.forEach((a) => {
              let 템플릿 = `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100" />
          <h5>${a.title}</h5>
          <p>${"가격 : " + a.price}</p> 
          </div>`;
              $(".row").append(템플릿);
            });
          });
        } else if (result == 2) {
          $.get("https://codingapple1.github.io/js/more2.json").then((data) => {
            console.log(data);
            data.forEach((b) => {
              let 템플릿 = `<div class="col-sm-4">
              <img src="https://via.placeholder.com/600" class="w-100" />
              <h5>${b.title}</h5>
              <p>${"가격 : " + b.price}</p> 
              </div>`;
              $(".row").append(템플릿);
            });
          });
        }
      });
    </script>
    <script>
      let products = [
        { id: 0, price: 70000, title: "Blossom Dress" },
        { id: 1, price: 50000, title: "Springfield Shirt" },
        { id: 2, price: 60000, title: "Black Monastery" },
      ];

      products.forEach((a, i) => {
        let 템플릿 = `<div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100" />
          <h5>${a.title}</h5>
          <p>${"가격 : " + a.price}</p>
          </div>`;
        $(".row").append(템플릿);
      });
      /* 정렬하기 */
      var 어레이 = [7, 3, 5, 2, 40];
      /*  전부 변형 하려면 .map */
      var 새어레이2 = 어레이.map(function (e) {
        return e * 4;
      });
      console.log(새어레이2);
      /* 원하는 자료만 필터하려면...
        sort() 는 원본 변형
        filter() 는 원본 변형 x
      */
      var 새어레이 = 어레이.filter(function (e) {
        return e < 4;
      });
      console.log(새어레이);
      // 어레이.sort();  문자 정렬
      var 어레이2 = ["a", "c", "b"];
      어레이2.sort();
      console.log(어레이2);

      어레이.sort(function (a, b) {
        // a ,b 는 array 안의 자료
        // return 오른쪽이 양수면 a를 오른쪽으로
        // return 오른쪽이 음수면 b를 오른쪽으로
        return b - a;
      }); /* 숫자 정렬 */
      console.log(어레이);
    </script>
  </body>
</html>
