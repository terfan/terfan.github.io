$(document).ready(function(){
    $('.nav-link').hover(function(){
        $(this).animate({opacity: 0.75, top: "-=5px"}, 200);
    },function(){
        $(this).animate({opacity: 1.0, top: "+=5px"}, 200);
    });

});

function showContent(id) {
	$('.sub-content').fadeOut('slow');

    setTimeout(function(){
		$(id).fadeIn('slow');
	}, 500);

}

function hideContent() {
    $('.sub-content').fadeOut('slow');
}