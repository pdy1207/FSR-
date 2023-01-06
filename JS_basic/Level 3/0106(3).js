<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello, world!</title>
    <link rel="stylesheet" href="main.css">
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
    <style>
      .size{
        display: none;
      }
    </style>
</head>
<body>
    

    <div class="container mt-3">
      <div class="card p-3">
        <span class="car-title">상품명</span>
        <span class="car-price">가격</span>
      </div>
    </div>

    <form class="container my-5 form-group">
      <p>상품선택</p>
      <select class="form-select mt-2">
        <option>모자</option>
        <option>셔츠</option>
        <option>바지</option>
      </select>
      <select class="form-select mt-2 size">
        <option>95</option>
        <option>100</option>
      </select>
    </form>
    <script>
      $('.form-select').eq(0).on('input',function(){
    var value = $('.form-select').eq(0).val();
      if(value == '셔츠'){
          $('.form-select').eq(1).removeClass('size');
          $('.form-select').eq(1).html('');
            var size2 = `<option>95</option>
            <option>100</option>`;
            $('.form-select').eq(1).append(size2);
      }else if(value == '바지'){
            $('.form-select').eq(1).removeClass('size');
            $('.form-select').eq(1).html('');
            var size2 = `<option>28</option>
            <option>30</option>`;
            $('.form-select').eq(1).append(size2);
          }
        else {
            $('.form-select').eq(1).addClass('size');
        }
        })
    </script>
    <div id="test">

    </div>

    <script>

      //자바스크립트로 html 생성법
      var a = document.createElement('p');
      a.innerHTML = '안녕';
      a.classList.add();
      document.querySelector('#test').appendChild(a);

      var 템플릿 = '<p>안녕</p>';
      document.querySelector('#test').insertAdjacentHTML('beforeend',템플릿);

      $('#test').append(템플릿);
    </script>





    <div class="container mt-5">
        <ul class="list">
          <li class="tab-button" data-id="0">Products</li>
          <li class="tab-button" data-id="1">Information</li>
          <li class="tab-button" data-id="2">Shipping</li>
        </ul>
        <div class="tab-content">
          <p>상품설명입니다. Product</p>
        </div>
        <div class="tab-content">
          <p>스펙설명입니다. Information</p>
        </div>
        <div class="tab-content">
          <p>배송정보입니다. Shipping</p>
        </div>
      </div> 



      <script src="tab.js">
        
      </script>
  
  
</body>
</html>
