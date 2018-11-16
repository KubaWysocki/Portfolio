const actualSection=()=>{
    const clear=()=>{for(i=1;i<=6;i++){ $('#a'+i).removeClass('current');}}
    $(document).on('scroll',function(){
        let scrTop= $(document).scrollTop();
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