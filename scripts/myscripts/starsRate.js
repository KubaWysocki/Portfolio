const starsRate=()=>{
    $(document).on('scroll',()=>{
        let skill=$('.skill');
        let deviceHeight=window.innerHeight;
        for(i=0;i<skill.length;i++){
            if ($(document).scrollTop() > (skill.eq(i).offset().top - deviceHeight/2)){
                skill.eq(i).children('.row').children('.col-2').each(function(index){
                    setTimeout(()=>{
                        $(this).css('opacity',1)
                    },150*index);
                });
            }
        }
    });
}