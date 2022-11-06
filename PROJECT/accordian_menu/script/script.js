$(document).ready(function(){

    $("#ham").click(function(){
        $("#backdrop").fadeIn();
        $("#menu").css("right","0"); 
        $("body").css("overflow","hidden");
    });
    //0인경우에만 단위x

   $("#close, #backdrop").click(function(){
    $("#backdrop").fadeOut();
    $("#menu").css("right","-300px");
    $("body").css("overflow","auto");
   }); 
   
//    $(".main").click(function(){
//     $(this).children(".sub").slideToggle();

//     $(this).siblings().children(".sub").slideUp();
//    });

   $(".main").click(function(){
    //난이도 상
    var visi = $(this).children(".sub").is(":visible");
    if(visi)
    {
        $(this).children(".sub").slideUp();
        $(this).children("a").children("i").removeClass("rev");
    }
    else
    {
        $(this).children(".sub").slideDown();
        $(this).children("a").children("i").addClass("rev");
    }
    $(this).siblings().children(".sub").slideUp();
    $(this).siblings().children("a").children("i").removeClass("rev");

   });
    
   


});