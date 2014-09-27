$(document).ready(function(){
    $('.nav-link').hover(function(){
        $(this).animate({opacity: 0.75, top: "-=5px"}, 200);
    },function(){
        $(this).animate({opacity: 1.0, top: "+=5px"}, 200);
    });

    $('.home').hover(function(){
        $(this).animate({opacity: 0.75}, 200);
    },function(){
        $(this).animate({opacity: 1.0}, 200);
    });

});

function showContent(id) {
	$('.sub-content').fadeOut('slow');

    setTimeout(function(){
		$(id).fadeIn('slow');
		focusBlock(id);
	}, 500);

	$('#byline').animate({
    	'margin-top': 100,
    }, 'slow');

}

function hideContent() {
    $('.sub-content').fadeOut('slow');

    setTimeout(function() {
        $('#byline').animate({
            'margin-top': 200,
        }, 'slow');
    }, 500);

}

function focusBlock(id) {
	//$('#content').slideDown(100);
	//$('#content').height(0.7*$(window).height());

	setTimeout(function(){
		$("#content").load(url, function() {
			$("#content").slideDown(1000);
		});
	}, 600);
    $('#byline').animate({
    	'margin-top': 100,
    }, "slow");
}