$(".slide-1").on("click", function () {
  $(".slide-container").css("transform", "translateX(0vw)");
});
$(".slide-2").on("click", function () {
  $(".slide-container").css("transform", "translateX(-100vw)");
});
$(".slide-3").on("click", function () {
  $(".slide-container").css("transform", "translateX(-200vw)");
});

var photo = 1;

$(".slide-next").on("click", function () {
  $(".slide-container").css("transform", "translateX(-" + photo + "00vw)");
  photo += 1;
});

$(".slide-before").on("click", function () {
  $(".slide-container").css("transform", "translateX(-" + photo + "00vw)");
  photo -= 1;
});


/* =============스크롤바 */

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});

$(window).on("scroll", function () {
  $(window).scrollTop();
  if (window.scrollY > 100) {
    $(".navbar-brand").css("font-size", "20px");
  } else if (window.scrollY == 0) {
    $(".navbar-brand").css("font-size", "30px");
  }
});

//div의 스크롤바 내린 양 + 눈에 보이는 div 높이 == div 실제 높이
$(".lorem").on("scroll", function () {
  var 스크롤양 = document.querySelector(".lorem").scrollTop;
  var 실제높이 = document.querySelector(".lorem").scrollHeight;
  var 높이 = document.querySelector(".lorem").clientHeight;
  if (스크롤양 + 높이 > 실제높이 - 10) {
    alert("다읽음");
  }
});

document.querySelector("html").scrollHeight; //현제 페이지 높이
document.querySelector("html").clientHeight; //페이지 보이는 부분높이
window.scrollY; //현재 페이지 스크롤양
