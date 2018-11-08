const startAnimation=()=>{
    $(window).on('scroll',()=>{
        let top=$(window).scrollTop();
            $('.name').css('left', top);
            $('.desc').css('left', -top*1.5);
            $('.wmore').css('left', -top/1.5);
            $('.start').css('left', top/1.5);
    });
}