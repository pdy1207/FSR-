 
$("#tableId").on('click', 'tr', function(){
    var chkbox = $(this).find('td:first-child :checkbox');
    chkbox.prop('checked', !chkbox.prop('checked'));
}
=============================================================================
                 
하지만 체크박스를 직접 누를 시에는

checkbox를 클릭을 해도 tr을 클릭한 상태로 인식을 하여서 checkbox가 눌려지지 않는다.
                 
$("#tableId").on('click', 'tr', function(e){
    if( $(e.target).is('input:checkbox') ) return;
    var chkbox = $(this).find('td:first-child :checkbox');
    chkbox.prop('checked', !chkbox.prop('checked'));
});
