//default 날짜 함수 금일 그리고 내일   
  var today = new Date().toISOString().substring(0, 10);
  var thisday = new Date();
  var tomorrow = new Date(thisday.setDate(thisday.getDate() + 1));
                
  document.getElementById('date_to').value = today;
  document.getElementById('date_from').value = tomorrow.toISOString().substring(0, 10);

  
   //전체 클릭 함수
   $( document ).ready( function() {
       $( '.all' ).click( function() {
        var order2Chk=$(".all").prop("checked");
        if(order2Chk){
            $(".chk").prop("checked",true);
            $("#choice_pick").css({"backgroundColor":"#ff6347","cursor":"pointer","color":"#fff"}).prop("disabled",false);
            $("#choice_hold").css({"backgroundColor":"#ff6347","cursor":"pointer","color":"#fff"}).prop("disabled",false);
            $("#choice_delete").css({"backgroundColor":"#d2201d","cursor":"pointer","color":"#fff"}).prop("disabled",false);
        }
        else{
            $(".chk").prop("checked",false);
            $("#choice_pick").css({"backgroundColor":"#cbcbcb","cursor":"auto","color":"#303033"}).prop("disabled",true);
            $("#choice_hold").css({"backgroundColor":"#cbcbcb","cursor":"auto","color":"#303033"}).prop("disabled",true);
            $("#choice_delete").css({"backgroundColor":"#cbcbcb","cursor":"auto","color":"#303033"}).prop("disabled",true);
        }
           
    });
});

$("#table_customers").on('click', 'tr', function(e){
    if( $(e.target).is('input:checkbox') ) return;
    var chkbox = $(this).find('td:last-child :checkbox');
    chkbox.prop('checked', !chkbox.prop('checked'));
     var tmpp = $(this).prop('checked'); 
     var tt = $(".chk").length;
     var ss = $(".chk:checked").length;
    
     if(tmpp==true || ss>0){
     $("#choice_pick").css({"backgroundColor":"#ff6347","cursor":"pointer","color":"#fff"}).prop("disabled",false);
     $("#choice_hold").css({"backgroundColor":"#ff6347","cursor":"pointer","color":"#fff"}).prop("disabled",false);
     $("#choice_delete").css({"backgroundColor":"#d2201d","cursor":"pointer","color":"#fff"}).prop("disabled",false);
     }
     else{
     $("#choice_pick").css({"backgroundColor":"#cbcbcb","cursor":"auto","color":"#303033"}).prop("disabled",true);
     $("#choice_hold").css({"backgroundColor":"#cbcbcb","cursor":"auto","color":"#303033"}).prop("disabled",true);
     $("#choice_delete").css({"backgroundColor":"#cbcbcb","cursor":"auto","color":"#303033"}).prop("disabled",true);
     }
  });
