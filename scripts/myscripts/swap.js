const swap=()=>{
    if($(window).width()>=768){
        const image=$('#swap');
        image.remove();
        image.addClass('offset-1');
        $('.offer .row').append(image);
    }
}
//this function changes order of ul and img on larger devices (md)