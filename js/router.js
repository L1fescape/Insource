var WorkspaceRouter = Backbone.Router.extend({

	routes: {
		"":											"home",
		"about":								"about",
		"how":									"how",
		"faq":									"faq",
		"faq/:type":						"faq",
		"faq/:type/:title":			"faq",

		"graphic":							"graphic",
		"graphic/:key":					"graphic",
		"graphic/:key/:type":		"graphic"
	},
	
	home : function() {
		Pages.defaultHide();
		Pages.All.createCards(function(content) {
			$(".page.graphic").html(content);
			$(".graphic").show();
		});
	},
	about : function() {
		Pages.defaultHide();
		$(".about").show();
	},
	how : function() {
		Pages.defaultHide();
		$(".how").show();
	},
	faq : function(type, title) {
		type = type || "";
		title = title || "";
		
		if ($(".page.faq").is(":visible")) {
			
			if (type && !title) 
				Pages.scrollTo(".page-title."+type);
			else if (title)
				Pages.scrollTo("[faq-"+type+"="+title+"]");
			else
				Pages.scrollTo("body");
		}

		else {
			Pages.defaultHide();
			var sidebar = Pages.FAQ.createSidebar();
			$(".sidebar.right").html(sidebar);
			$(".faq").show();
			$(".sidebar.right").show();
			
			if (type && !title) 
				Pages.scrollTo(".page-title."+type);
			else if (title)
				Pages.scrollTo("[faq-"+type+"="+title+"]");
			else
				Pages.scrollTo("body");

		}
	},




	graphic : function(key, type) {
		
		key = key || "";
		type = type || "";
		
		// If the url hash changes, but we're still on the portfolio page,
		// that means we've clicked a link to content we want to scroll to.
		// Let's do this *queue epic music*
		if ($(".page.graphic.port-layout").is(":visible")) {
				if (type) 
					Pages.scrollTo("[graphic="+type+"]");
				else
					Pages.scrollTo("body");
		}
		// Well that was ... anticlimactic
		
		else {
			Pages.defaultHide();

			var route = "/api/?method=graphic&format=portfolio&key="+key;
			$.get( route, function(output) {
				output = JSON.parse(output);
				graphic = output["graphic"][0];
				graphic.portfolio = graphic.portfolio.split(",");
				var profile = Pages.Graphic.createPortfolio(graphic);

				$(".sidebar.right").html(profile.sidebar);
				$(".page.graphic").html(profile.content);

				$(".sidebar.right").show();

				$(".page.graphic").show();
				
			});
		}
	}

});


$(document).ready(function() {
	var app = new WorkspaceRouter();
	Backbone.history.start();
	$("body").keypress(function(e) {
		if (e.which == 97)
			Pages.userPrev();
		else if (e.which == 100)
			Pages.userNext();
	});
});
