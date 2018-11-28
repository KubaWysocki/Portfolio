const scrolling=()=>{
    const scroll=(e)=>{
        const menu=$('.mNav').height();
        let targ=$($(e.target).attr('href'));
        $('html, body').animate({
            scrollTop: targ.offset().top-menu
        }, 500);
    }
    const close=()=>{
        $('.mNav').removeClass('expand'); 
        $('.mNav>ul').removeClass("expanded");
        $('.bar1,.bar2,.bar3').toggleClass("change");	
    }
    $('.start').on('click',(e)=>{
        scroll(e)
    });
    $('.mNav a').on('click',(e)=>{
        e.preventDefault();
        if($(window).width()<768){
            close();
            setTimeout(()=>{
            scroll(e)
            },200);
        }
        else scroll(e);
    });
}