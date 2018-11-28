const starsRate=()=>{
    $(document).on('scroll',()=>{
        let skill=$('.skill'),
            scroll=$(document).scrollTop(),
            deviceHeight=window.innerHeight;
        for(i=0;i<skill.length;i++){
            if (scroll > (skill.eq(i).offset().top - deviceHeight/2)){
                skill.eq(i).children('.row').children().each(function(index){
                    setTimeout(()=>{
                        $(this).css('opacity',1)
                    },150*index);
                });
            }
        }
    });
}