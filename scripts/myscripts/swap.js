const swap=()=>{
    if($(window).width()>=768){
    const image=$('#swap2');
    image.remove();
    image.addClass('offset-1');
    $('#swap1').append(image);
    }
}
//this function changes order of ul and img on larger devices (md)