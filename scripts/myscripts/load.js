const load=()=>{
    $('body').removeClass('stop_scrolling')
    $('.loading').css('opacity', '0')
    setTimeout(()=>$('.loading').css('display', 'none'),200)
}
const startAnimation=()=>{
    $(window).on('scroll',() => {
        let scrollTop=$(window).scrollTop()
        if( scrollTop < $(window).height()  ){
            $('.name').css({"-webkit-transform": `translateX(${ scrollTop / 1.2 }px)`})
            $('.desc').css({"-webkit-transform": `translateX(${ -scrollTop * 1.2 }px)`})
            $('.wmore').css({"-webkit-transform": `translateX(${ -scrollTop / 2 }px)`})
            $('.btnStart').css({"-webkit-transform": `translateX(${ scrollTop / 1.5 }px)`})
        }
    })
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream //iOS background fixed not working bug fix
    if(!iOS) $('.preview').css('background-attachment','fixed')
}
const swap=()=>{                        //this function changes order of ul and img on larger devices (md)
    if($(window).width()>=768){
        const image=$('#swap');
        image.remove();
        image.addClass('offset-1');
        $('.offer .row').append(image);
    }
}