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
                $('p', this).css('transform','rotateY(0deg)');
                $('img',this).attr('src', src);
            },300)
        }
    },
    function(){
        $('img',this).removeClass('rotate');
        $('p', this).css('transform','rotateY(90deg)');
        let src=$('img',this).attr('src');
            src=src.substr(0,src.lastIndexOf('.')-1);
            src=src+'0.png';
        clearTimeout(timeoutId);
        setTimeout(()=>{
            $('img',this).attr('src', src)},300)
    }
)
}