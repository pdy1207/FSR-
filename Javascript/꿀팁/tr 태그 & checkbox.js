 //행 만 눌렀을때에 체크박스 기능 그 후 버튼 활성화 되게끔 완성하거나 둘 중 하나 지워야함.
$("#table_customers").on('click', 'tr', function(e){
    if( $(e.target).is('input:checkbox') ) return;
    var chkbox = $(this).find('td:last-child :checkbox');
    chkbox.p
=============================================================================
$("#tableId").on('click', 'tr', function(){
    var chkbox = $(this).find('td:first-child :checkbox');
    chkbox.prop('checked', !chkbox.prop('checked'));
}
