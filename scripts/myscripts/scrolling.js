const scrolling=()=>{
    const menu=$('.mNav').height();
    const close=()=>{
        if($('.mNav').hasClass('expand')){
            $('.mNav').removeClass('expand'); 
            $('.mNav>ul').removeClass("expanded");
            $('.bar1,.bar2,.bar3').toggleClass("change");	
        }
    }
    $('.start').click(()=> { 
        $.scrollTo($('#about'), {duration:700,offset:-menu});
    });
    $('.mNav a').click((e)=>{
        let targ=$(e.target.getAttribute('href'));
        e.preventDefault();
        close();
        if($(window).width()<768){
            setTimeout(()=>{$.scrollTo(targ, {duration:500,offset:-menu});},200);
        }
        else $.scrollTo(targ, {duration:500,offset:-menu});
    });
}