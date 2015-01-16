function showContent(caller, id) {
    $('figure').fadeOut('slow');
    $('.credit').fadeOut('slow');
    $('.current-section').attr('class','sub-section');

    $(caller).attr('class','current-section');

    if(id =='#Traditional') {
        $('#title').html(id.substring(1) + "<span>Click the images for full view and more information.</span>");
        setTimeout(function(){
            //$(id).fadeIn('slow');
            $('figure.trad').fadeIn('slow').css("display","inline-block");
            $('.credit').fadeIn('slow').css("display","inline");
            // temp
            $('.photo').css("display","none");
            $('.des').css("display","none");
        }, 500);
    }
    else if(id == '#3DModeling') {
        $('#title').html(id.substring(1,3)+" "+id.substring(3) + "<span>Click the images for full view and more information.</span>");
        setTimeout(function(){
            //$(id).fadeIn('slow');
            $('figure.mod').fadeIn('slow').css("display","inline-block");
            $('.credit').fadeIn('slow').css("display","inline");
            // temp
            $('.photo').css("display","none");
            $('.des').css("display","none");
        }, 500);
    }
    else if(id == '#Photography') {
        $('#title').html(id.substring(1) + "<span>Click the images for full view and more information.</span>");
        setTimeout(function(){
            $('.photo').fadeIn('slow').css("display","inline-block");
            // temp
            $('.des').css("display","none");
        }, 500);
    }
    else {
        $('#title').html(id.substring(1) + "<span>Click the images for full view and more information.</span>");
        setTimeout(function(){
            $('.des').fadeIn('slow').css("display","inline-block");
            // temp
            $('.photo').css("display","none");
        }, 500);
    }
    
}