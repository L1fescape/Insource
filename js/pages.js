var Pages = {
	lastPerson : "",
	defaultHide : function() {
		$(".page").hide();
		$(".sidebar.right").hide();
	},
	changed : function() {
		var currentPerson = window.location.hash.split("/")[2];

		if (currentPerson == Pages.lastPerson)
			return false;
		else {
			Pages.lastPerson = currentPerson;
			return true;
		}
	},

	scrollTo : function(sub) {
		console.log("scroll");
	},
		
	getSidebar : function( job, name ) {
		return "sidebar";
	},
	getContent : function( job, name ) {
		return "content";
	},
	userNext : function() {                                                                                                                            
		var newMarginLeft = parseInt($(".portfolio-container").css("marginLeft")) - 440;                                                                 
		$(".portfolio-container").stop().animate({'marginLeft':newMarginLeft}, 300);                                                                            
	},
	userPrev : function() {                                                                                                                            
		var newMarginLeft = parseInt($(".portfolio-container").css("marginLeft")) + 440;                                                                 
		$(".portfolio-container").stop().animate({'marginLeft':newMarginLeft}, 300);                                                                            
	}
};
