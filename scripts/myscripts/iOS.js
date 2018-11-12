const iOS=()=>{
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if(iOS) $('.preview').css('background-attachment','scroll')
}