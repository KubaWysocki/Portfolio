const menu=()=>{
	$('.toggleBox').click(()=>{
		let open = $('.mNav>ul').hasClass('expanded');
		if(open){
			$('.mNav>ul').css('opacity','0');
			$('.bar1,.bar2,.bar3').toggleClass("change");
			setTimeout(()=>{
				$('.mNav>ul').toggleClass("expanded");
				$('.mNav').toggleClass("expand");
			}, 300);
		}
		else {
			$('.mNav').toggleClass("expand");
			$('.bar1,.bar2,.bar3').toggleClass("change");
			$('.mNav>ul').toggleClass("expanded");
			setTimeout(()=>{$('.mNav>ul').css('opacity','1')}, 300);
		}
	});
}
const actualSection=()=>{
    const clear=()=>{for(let i=1;i<=6;i++) $('#a'+i).removeClass('current');}
    $(document).on('scroll',function(){
        const scrTop= $(document).scrollTop();
        if (scrTop>=0) {
            clear();
            $('#a1').addClass('current');
        }
        if (scrTop>$('.btnStart').offset().top-100) {
            clear();
            $('#a2').addClass('current');
        }
        if (scrTop>$('.abilities').offset().top-100){
            clear();
            $('#a3').addClass('current');
        }
        if (scrTop>$('.portfolio').offset().top-100){
            clear();
            $('#a4').addClass('current');
        }
        if (scrTop>$('.offer').offset().top-100){
            clear();
            $('#a5').addClass('current');
        }
        if (scrTop>=($(document).height()-$(window).height())-100){
            clear();
            $('#a6').addClass('current');
        }
    });
}
const scrolling=()=>{
    const scroll=(e)=>{
        const menu=$('.mNav').height();
        let targ=$($(e.target).attr('href')||$(e.target).parent().attr('href'));
        $('html, body').animate({
            scrollTop: targ.offset().top-menu
        }, 700);
    }
    $('.btnStart').on('click',(e)=>{
        e.preventDefault();
        scroll(e)
    });
    $('.mNav a').on('click',(e)=>{
        e.preventDefault();
        if($(window).width()<768){
            $('.mNav').removeClass('expand'); 
            $('.mNav>ul').removeClass("expanded");
            $('.bar1,.bar2,.bar3').toggleClass("change");	
            setTimeout(()=>scroll(e),200);
        }
        else scroll(e);
    });
}