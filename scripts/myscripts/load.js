const load=()=>{
    $('body').removeClass('stop_scrolling');
    $('#loading').css('opacity', '0');
    setTimeout(()=>$('#loading').css('display', 'none'),200);
}