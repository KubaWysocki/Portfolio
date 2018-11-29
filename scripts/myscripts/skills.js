const rotate=()=>{
    let timeoutId;
$('.skill').hover(
    function(){
        let newImage= new Image;
        let src=$('img',this).attr('src');
                src=src.substr(0,src.lastIndexOf('.')-1);
                src=src+'1.png';
                newImage.src=src;
        newImage.onload=()=>{
            $('img',this).addClass('rotate');
            clearTimeout(timeoutId);
            timeoutId=setTimeout(()=>{
                $('p', this).css('transform','rotateY(0deg) translateY(-66%)');
                $('img',this).attr('src', src);
            },300)
        }
    },
    function(){
        $('img',this).removeClass('rotate');
        $('p', this).css('transform','rotateY(90deg) translateY(-66%)');
        let src=$('img',this).attr('src');
            src=src.substr(0,src.lastIndexOf('.')-1);
            src=src+'0.png';
        clearTimeout(timeoutId);
        setTimeout(()=>{
            $('img',this).attr('src', src)},300)
    }
)
}
const starsRate=()=>{
    $(document).on('scroll',()=>{
        let skill=$('.skill'),
            scroll=$(document).scrollTop(),
            deviceHeight=window.innerHeight;
        for(let i=0;i<skill.length;i++){
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