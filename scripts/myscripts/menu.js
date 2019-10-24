const menu=()=>{
	$('.toggleBox').click(()=>{
		let open = $('.mNav>ul').hasClass('expanded');
		if(open){
			$('.mNav>ul').css('opacity','0');
			$('.bar1,.bar2,.bar3').toggleClass('change');
			setTimeout(()=>{
				$('.mNav>ul').toggleClass('expanded');
				$('.mNav').toggleClass('expand');
			}, 300);
		}
		else {
			$('.mNav').toggleClass('expand');
			$('.bar1,.bar2,.bar3').toggleClass('change');
			$('.mNav>ul').toggleClass('expanded');
			setTimeout(()=>{$('.mNav>ul').css('opacity','1')}, 300);
		}
	});
}
const actualSectionHighlight = () => {
    const navHighlight = [
        0,
        $('.btnStart').offset().top-100,
        $('.abilities').offset().top-100,
        $('.portfolio').offset().top-100,
        $('.offer').offset().top-100,
        $(document).height()-$(window).height()-100
    ]
    const setActive = activeIndex => {
        for(let i=0;i<=5;i++) $('#navA'+i).removeClass('current')
        $('#navA'+ activeIndex).addClass('current')
    }
    $(document).on( 'scroll', () => {
        const scrollTop = $(document).scrollTop()
        navHighlight.forEach(( el, i ) => scrollTop >= el ? setActive( i ) : null )
    })
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
            $('.mNav>ul').removeClass('expanded');
            $('.bar1,.bar2,.bar3').toggleClass('change');	
            setTimeout(()=>scroll(e),200);
        }
        else scroll(e);
    });
}