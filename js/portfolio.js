function showContent(caller, id) {
	$('.sub-content').fadeOut('slow');
    $('.current-section').attr('class','sub-section');

    $(caller).attr('class','current-section');

    setTimeout(function(){
		$(id).fadeIn('slow');
	}, 500);

    if(id == '#3DModeling') {
        $('#title').html(id.substring(1,3)+" "+id.substring(3) + "<span>Click the images for full view and more information.</span>");
    }
    else {
        $('#title').html(id.substring(1) + "<span>Click the images for full view and more information.</span>");
    }
    
}