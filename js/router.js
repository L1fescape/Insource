var WorkspaceRouter = Backbone.Router.extend({

	routes: {
		"":											"home",
	},
	
	home : function() {
		console.log("asdf");
	},
});


$(document).ready(function() {
	var app = new WorkspaceRouter();
	Backbone.history.start();
});
