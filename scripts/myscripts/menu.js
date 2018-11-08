const menu=()=>{
	$('.toggleBox').click(()=>{
		let open = $('.mNav>ul').hasClass('expanded');
		if(open){
			$('.mNav>ul').css('opacity','0');
			setTimeout(() => {
				$('.bar1,.bar2,.bar3').toggleClass("change");
				$('.mNav>ul').toggleClass("expanded");
				$('.mNav').toggleClass("expand");
			}, 300);
		}
		else {
			$('.mNav').toggleClass("expand");
			$('.bar1,.bar2,.bar3').toggleClass("change");
			$('.mNav>ul').toggleClass("expanded");
			setTimeout(() => {$('.mNav>ul').css('opacity','1')}, 300);
		}
	});
}