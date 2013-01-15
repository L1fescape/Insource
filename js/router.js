var WorkspaceRouter = Backbone.Router.extend({

	routes: {
		"":												"home",
		"about":									"about",
		"how":										"how",
		"faq":										"faq",
		"faq/:type":							"faq",
		"faq/:type/:title":				"faq",

		"graphic":								"graphic",
		"graphic/:key":						"graphic",
		"graphic/:key/:type":			"graphic",

		"photography":						"photography",
		"photography/:key":				"photography",
		"photography/:key/:type":	"photography",

		"webdesign":							"webdesign",
		"webdesign/:key":					"webdesign",
		"webdesign/:key/:type":		"webdesign"
	},
	
	home : function() {
		Pages.defaultHide();
		/*Pages.All.createCards(function(content) {
			$(".page.graphic").html(content["graphic"]);
			$(".page.photography").html(content["photography"]);
			$(".page.webdesign").html(content["webdesign"]);

			// If there are no people in a category, don't show that category
			for ( var p = 0; p < $(".page").length; p++ ) {
				var page = $(".page").eq(p);
				if ($(page).find("a").length)
					$(page).show();
			}
				
		});*/
		$(".intro").show();
		$(".sidebar").hide();
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
		
		if (key == "" && type == "") {
			Pages.defaultHide();
			Pages.All.createCards(function(content) {
				$(".page.graphic").html(content["graphic"]);
				$(".graphic").show();
			});
		}

		// If the url hash changes, but we're still on the portfolio page,
		// that means we've clicked a link to content we want to scroll to.
		// Let's do this *queue epic music*
		else if ($(".page.graphic.port-layout").is(":visible")) {
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
				$('.portfolio-container a').colorbox({rel:'gal', maxWidth:'95%', maxHeight:'95%'});
				
			});
		}
	},


	photography : function(key, type) {
		
		key = key || "";
		type = type || "";
		
		if (key == "" && type == "") {
			// load photography cards only
			Pages.defaultHide();
			Pages.All.createCards(function(content) {
				$(".page.photography").html(content["photography"]);
				$(".photography").show();
			});
		}

		// If the url hash changes, but we're still on the portfolio page,
		// that means we've clicked a link to content we want to scroll to.
		// Let's do this *queue epic music*
		else if ($(".page.photography.port-layout").is(":visible")) {
				if (type) 
					Pages.scrollTo("[photography="+type+"]");
				else
					Pages.scrollTo("body");
		}
		// Well that was ... anticlimactic
		
		else {
			Pages.defaultHide();

			var route = "/api/?method=photography&format=portfolio&key="+key;
			$.get( route, function(output) {
				output = JSON.parse(output);
				photography = output["photography"][0];
				photography.portfolio = photography.portfolio.split(",");
				var profile = Pages.Photography.createPortfolio(photography);

				$(".sidebar.right").html(profile.sidebar);
				$(".page.photography").html(profile.content);

				$(".sidebar.right").show();

				$(".page.photography").show();
				$('.portfolio-container a').colorbox({rel:'gal', maxWidth:'95%', maxHeight:'95%'});
				
			});
		}
	},

	webdesign : function(key, type) {
		
		key = key || "";
		type = type || "";
		
		if (key == "" && type == "") {
			Pages.defaultHide();
			Pages.All.createCards(function(content) {
				$(".page.webdesign").html(content["webdesign"]);
				$(".webdesign").show();
			});
		}

		// If the url hash changes, but we're still on the portfolio page,
		// that means we've clicked a link to content we want to scroll to.
		// Let's do this *queue epic music*
		else if ($(".page.webdesign.port-layout").is(":visible")) {
				if (type) 
					Pages.scrollTo("[webdesign="+type+"]");
				else
					Pages.scrollTo("body");
		}
		// Well that was ... anticlimactic
		
		else {
			Pages.defaultHide();

			var route = "/api/?method=webdesign&format=portfolio&key="+key;
			$.get( route, function(output) {
				output = JSON.parse(output);
				webdesign = output["webdesign"][0];
				webdesign.portfolio = webdesign.portfolio.split(",");
				var profile = Pages.Webdesign.createPortfolio(webdesign);

				$(".sidebar.right").html(profile.sidebar);
				$(".page.webdesign").html(profile.content);

				$(".sidebar.right").show();

				$(".page.webdesign").show();
				$('.portfolio-container a').colorbox({rel:'gal', maxWidth:'95%', maxHeight:'95%'});
				
			});
		}
	}


});
