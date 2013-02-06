$(document).ready(function() {
	$(".portfolio").mousemove(function(e) {
		var parentOffset = $(this).parent().offset(); 
		var relX = e.pageX - parentOffset.left;
		if ( $(".portfolio-container").children("img").length > 4 ) {
			$(".portfolio-container").css({marginLeft : -relX + 100 });
		}
	});
	$('.portfolio a').colorbox({rel:'gal'});
});
