$("body").on({
	"click" : function() {
		$(".portfolio-thumb-container img").removeClass("active");
		$(this).addClass("active");
		var index = $(".portfolio-thumb-container img").index(this);
		var left = index * $(".portfolio").width() * -1;
		$(".portfolio-container").animate({"marginLeft" : left}, 300);
	}
}, ".portfolio-thumb-container img");
