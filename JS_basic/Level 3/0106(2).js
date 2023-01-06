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
</head>
<body>
    <div class="card-group container">
        <div class="card">
          <img src="https://via.placeholder.com/600">
          <div class="card-body">
            <h5 >Card title</h5>
            <p >가격 : 70000</p>
            <button class="btn btn-danger">주문하기</button>
          </div>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/600">
          <div class="card-body">
            <h5 >Card title</h5>
            <p >가격 : 70000</p>
            <button class="btn btn-danger">주문하기</button>
          </div>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/600">
          <div class="card-body">
            <h5>Card title</h5>
            <p>가격 : 70000</p>
            <button class="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>      
     
    <script>
    var products = [
            { id : 0, price : 70000, title : 'Blossom Dress' },
            { id : 1, price : 50000, title : 'Springfield Shirt' },
            { id : 2, price : 60000, title : 'Black Monastery' }
    ];
    
        for(let i =0; i<=2; i++){
        document.querySelectorAll('.card-body h5')[i].innerHTML = products[i].title;
        document.querySelectorAll('.card-body p')[i].innerHTML = '가격 : ' + products[i].price;
        }
        $('.card-body h5').eq(0).html(products[0].title);
        
        // document.querySelectorAll('.card-body h5')[1].innerHTML = products[1].title;
        // document.querySelectorAll('.card-body p')[1].innerHTML = '가격 : ' + products[1].price;

        
        // document.querySelectorAll('.card-body h5')[2].innerHTML = products[2].title;
        // document.querySelectorAll('.card-body p')[2].innerHTML = '가격 : ' + products[2].price;
    
    </script>
  
  
</body>
</html>
