const startAnimation=()=>{
    $(window).on('scroll',()=>{
        let top=$(window).scrollTop();
            $('.name').css('left', top);
            $('.desc').css('left', -top*1.5);
            $('.wmore').css('left', -top/1.5);
            $('.start').css('left', top/1.5);
    });
    //iOS background fixed not working bug fix
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if(iOS) $('.preview').css('background-attachment','scroll');
    //deep effect on start 
    $('.preview').css('background-size', '105% 105%');
}