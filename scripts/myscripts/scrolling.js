const scrolling=()=>{
    const menu=$('.mNav').height();
    $(function($){
        $.scrollTo(0);
        $('.start').click(function() { 
            $.scrollTo($('.about'), {duration:700,offset:-menu}); 
        });
        $('#a1').click(function(e) {
            close();
            $.scrollTo($('body'), 1000); 
        });
        $('#a2').click(function(e){
            e.preventDefault();
            close();
            if($(window).width()<768) setTimeout(()=>{$.scrollTo($('.about'), {duration:500,offset:-menu})},200);
            else $.scrollTo($('.about'), {duration:500,offset:-menu});
        });
        $('#a3').click(function(e){
            e.preventDefault();
            close();
            if($(window).width()<768) setTimeout(()=>{$.scrollTo($('.abilities'), {duration:500,offset:-menu})},200);
            else $.scrollTo($('.abilities'), {duration:500,offset:-menu});
        });
        $('#a4').click(function(e) {
            e.preventDefault();
            close();
            if($(window).width()<768) setTimeout(()=>{$.scrollTo($('.portfolio'), {duration:500,offset:-menu})},200); 
            else $.scrollTo($('.portfolio'), {duration:500,offset:-menu});
        });
        $('#a5').click(function(e) {
            e.preventDefault();
            close();
            if($(window).width()<768) setTimeout(()=>{$.scrollTo($('.offer'), {duration:500,offset:-menu})},200); 
            else $.scrollTo($('.offer'), {duration:500,offset:-menu});
        });
        $('#a6').click(function() {
            close();
            $.scrollTo($('.contact'), 500);
        });
    });
    const close=()=>{
        if($('.mNav').hasClass('expand')){
            $('.mNav').removeClass('expand'); 
            $('.mNav>ul').removeClass("expanded");
            $('.bar1,.bar2,.bar3').toggleClass("change");	
        }
    }
}