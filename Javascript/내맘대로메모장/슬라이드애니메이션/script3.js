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
