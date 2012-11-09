var WorkspaceRouter = Backbone.Router.extend({

	routes: {
		"":											"home",
		"about":								"about",
		"how":									"how",
		"blog":									"blog",

		"graphic":							"graphic",
		"graphic/:name":				"user",
		"graphic/:name/:type":	"user"
	},
	
	home : function() {
		Pages.defaultHide();
		var content = '<div class="page-title graphic" style=""><h2>Graphic Design</h2></div><a href="/#/graphic/irvine">Irvine</a></div>';
		$(".page.graphic").html(content);
		$(".graphic").show();
		$(".webdesign").show();
		$(".appdev").show();
	},
	about : function() {
		Pages.defaultHide();
		$(".about").show();
	},
	how : function() {
		Pages.defaultHide();
		$(".how").show();
	},
	blog : function() {
		Pages.defaultHide();
		$(".blog").show();
	},

	user : function(name, type) {
		Pages.defaultHide();

		name = name || "";
		type = type || "";
		
		var sidebar = Pages.getSidebar("graphic", name);
		var content = '<div class="page-title graphic" style=""><h2>Bio</h2></div>';
		content += "<p>Kaitlyn Irvine's sophisticated and organized design sense blossomed from an interest in cleaning and rearranging her room as a child. As a designer, her diverse experience ranges from advertising and branding to packaging and print publications of all sizes. With a clear drive and passion for the creative process, Kaitlyn seeks to exceed your expectations in communication and execution.</p>";
		content += "<p style='height:40px'></p>";
		content += '<div class="page-title graphic" style=""><h2>Portfolio</h2></div>';
		content += '<div class="portfolio"><div class="portfolio-container">';
		content += '<img src="/content/irvine/Irvine_1.jpg" />';
		content += '<img src="/content/irvine/Irvine_2.jpg" />';
		content += '<img src="/content/irvine/Irvine_3.jpg" />';
		content += '<img src="/content/irvine/Irvine_4.png" />';
		content += '<img src="/content/irvine/Irvine_5.png" />';
		content += '<img src="/content/irvine/Irvine_6.jpg" />';
		content += '<img src="/content/irvine/Irvine_7.png" />';
		content += '</div></div>';
		content += '<div class="page-title graphic" style=""><h2>Contact</h2></div>';
		content += '';

		//$(".sidebar.right").html(sidebar);
		$(".page.graphic").html(content);

		$(".sidebar.right").show();

		$(".page.graphic").show();
		Pages.scrollTo(type);
	},
	graphic : function() {
		Pages.defaultHide();
		var content = '<div class="page-title graphic" style=""><h2>Graphic Design</h2></div><a href="/#/graphic/irvine">Irvine</a></div>';
		$(".page.graphic").html(content);
		$(".page.graphic").show();
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
