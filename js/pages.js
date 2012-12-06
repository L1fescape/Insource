var Pages = {
	lastPerson : "",
	defaultHide : function() {
		$(".page").hide();
		$(".sidebar.right").hide();
	},
	scrollTo : function(element) {
		$('html, body').animate({
			scrollTop: $(element).offset().top - 20
		}, 500);
	},

	FAQ : {
		createSidebar : function() {
			var sidebar = "<ul class=faq>	\
											<li><a href='/#/faq/business'>For Businesses and Organizations</a></li> \
											<ul>	\
												<li><a href='/#/faq/business/contact'>How do I contact an Artist?</a></li> \
												<li><a href='/#/faq/business/reliable'>How do I know that my Artist is reliable?</a></li> \
												<li><a href='/#/faq/business/pay'>How do I pay the artist?</a></li> \
												<li><a href='/#/faq/business/liable'>Who is liable if something goes wrong?</a></li> \
											</ul>	\
											<li><a href='/#/faq/artists'>For Artists</a></li>	\
											<ul>	\
												<li><a href='/#/faq/artists/become'>How do I become an Artist?</a></li> \
												<li><a href='/#/faq/artists/project'>How do I get a project?</a></li> \
												<li><a href='/#/faq/artists/price'>How do I set my price?</a></li> \
												<li><a href='/#/faq/artists/paid'>How do I get paid?</a></li> \
												<li><a href='/#/faq/artists/insource'>How does Insource University make money?</a></li> \
											</ul>	\
										</ul>";
			return sidebar;
		}
	},

	All : {
		createCards : function(callback) {
			var cards = {};
			
			// Store references to the templates for each type of card
			var cardTemplates = {
				"graphic" : Pages.Graphic.createCard,
				"webdesign" : Pages.Webdesign.createCard,
				"photography" : Pages.Photography.createCard
			};
			
			// Headers for each card type
			cards["graphic"] = '<div class="page-title graphic" style=""><h2>Graphic Design</h2></div>';
			cards["photography"] = '<div class="page-title photography" style=""><h2>Photography</h2></div>';
			cards["webdesign"] = '<div class="page-title webdesign" style=""><h2>Webdesign</h2></div>';
			
			var route = "/api/?method=all&format=card";
			$.get(route, function(output) {
				output = JSON.parse(output);
				console.log(output);
				
				for (var type in output) {
					for (var p in output[type]) {
						var person = output[type][p];
						cards[type] += cardTemplates[type](person);
					}
				}
				console.log(cards)


				if (callback) callback(cards);
			});
		}
	},

	Graphic : {
		createCard : function(person) {
			// TODO this is a bad way of switching layouts
			$(".page.graphic").removeClass("port-layout");
			$(".page.graphic").addClass("card-layout");
			
			person.portfolio = person.portfolio.split(",");

			var card = "<a href='/#/graphic/"+person.key+"'>	\
										<div class=card>	\
											<img class=headshot src='"+person.picture+"' />	\
											<div class=card-info> \
											<h3>Name</h3>"+person.name+"	\
											<h3>Portfolio</h3>	\
											<div class=mini-port>";
											for (var i in person.portfolio) {
												if (i == 5)
													break;
												card += "<img src='/content/"+person.key+"/"+person.portfolio[i]+"' />"
											}
						card += "</div>	\
										</div>	\
										</div>	\
									</a>";
			return card;
		},
		createPortfolio : function(person) {
			// TODO this is a bad way of switching layouts
			$(".page.graphic").removeClass("card-layout");
			$(".page.graphic").addClass("port-layout");

			var sidebar = "<div class=headshot>										\
											<img src='"+person["picture"]+"' />		\
										</div>																	\
										<div class='person-title graphic'>			\
											" + person["name"] + "								\
										</div>																	\
										<ul class=port-nav>										\
											<li><a href='/#/graphic/"+person["key"]+"/bio'>Bio</a></li>	\
											<li><a href='/#/graphic/"+person["key"]+"/portfolio'>Portfolio</a></li>	\
											<li><a href='/#/graphic/"+person["key"]+"/contact'>Contact</a></li>	\
										</ul>";


			var content = "<div class='page-title graphic' graphic='bio'>		\
											<h2>Bio</h2>													\
										</div>																	\
										<p>" + person['bio'] + "</p>						\
										<p style='height:40px'></p>							\
										<div class='page-title graphic' graphic='portfolio'>	\
											<h2>Portfolio</h2>										\
										</div>																	\
										<div class=portfolio>										\
											<div class=portfolio-container>";
											for (var i in graphic.portfolio) {
											 content += "<a href='/content/"+person.key+"/"+graphic.portfolio[i]+"'><img src='/content/"+person.key+"/"+graphic.portfolio[i]+"' /></a>";
											}	 
											content += "<div style='clear:both;'></div>";
					content +="</div>";
					content += "<div class=portfolio-thumb-container>";
											for (var i in graphic.portfolio) {
											 content += "<img src='/content/"+person.key+"/"+graphic.portfolio[i]+"' />";
											}	 
					content +="</div> \
										</div>																	\
										<div class='page-title graphic' graphic='contact'>	\
											<h2>Contact</h2>											\
										</div>																	\
										<p>Email: " + person['email'] + "</p>		\
										<p>Phone: " + person['phone'] + "</p>";

			return { sidebar: sidebar, content: content};
		}
	},

	Photography : {
		createCard : function(person) {
			// TODO this is a bad way of switching layouts
			$(".page.photography").removeClass("port-layout");
			$(".page.photography").addClass("card-layout");
			
			person.portfolio = person.portfolio.split(",");

			var card = "<a href='/#/photography/"+person.key+"'>	\
										<div class=card>	\
											<img class=headshot src='"+person.picture+"' />	\
											<div class=card-info> \
											<h3>Name</h3>"+person.name+"	\
											<h3>Portfolio</h3>	\
											<div class=mini-port>";
											for (var i in person.portfolio) {
												if (i == 5)
													break;
												card += "<img src='/content/"+person.key+"/"+person.portfolio[i]+"' />"
											}
						card += "</div>	\
										</div>	\
										</div>	\
									</a>";
			return card;
		},
		createPortfolio : function(person) {
			// TODO this is a bad way of switching layouts
			$(".page.photography").removeClass("card-layout");
			$(".page.photography").addClass("port-layout");

			var sidebar = "<div class=headshot>										\
											<img src='"+person["picture"]+"' />		\
										</div>																	\
										<div class='person-title photography'>			\
											" + person["name"] + "								\
										</div>																	\
										<ul class=port-nav>										\
											<li><a href='/#/photography/"+person["key"]+"/bio'>Bio</a></li>	\
											<li><a href='/#/photography/"+person["key"]+"/portfolio'>Portfolio</a></li>	\
											<li><a href='/#/photography/"+person["key"]+"/contact'>Contact</a></li>	\
										</ul>";


			var content = "<div class='page-title photography' photography='bio'>		\
											<h2>Bio</h2>													\
										</div>																	\
										<p>" + person['bio'] + "</p>						\
										<p style='height:40px'></p>							\
										<div class='page-title photography' photography='portfolio'>	\
											<h2>Portfolio</h2>										\
										</div>																	\
										<div class=portfolio>										\
											<div class=portfolio-container>";
											for (var i in photography.portfolio) {
											 content += "<a href='/content/"+person.key+"/"+photography.portfolio[i]+"'><img src='/content/"+person.key+"/"+photography.portfolio[i]+"' /></a>";
											}	 
											content += "<div style='clear:both;'></div>";
					content +="</div>";
					content += "<div class=portfolio-thumb-container>";
											for (var i in photography.portfolio) {
											 content += "<img src='/content/"+person.key+"/"+photography.portfolio[i]+"' />";
											}	 
					content +="</div> \
										</div>																	\
										<div class='page-title photography' photography='contact'>	\
											<h2>Contact</h2>											\
										</div>																	\
										<p>Email: " + person['email'] + "</p>		\
										<p>Phone: " + person['phone'] + "</p>";

			return { sidebar: sidebar, content: content};
		}
	},
	
	Webdesign : {
		createCard : function(person) {
			// TODO this is a bad way of switching layouts
			$(".page.webdesign").removeClass("port-layout");
			$(".page.webdesign").addClass("card-layout");
			
			person.portfolio = person.portfolio.split(",");

			var card = "<a href='/#/webdesign/"+person.key+"'>	\
										<div class=card>	\
											<img class=headshot src='"+person.picture+"' />	\
											<div class=card-info> \
											<h3>Name</h3>"+person.name+"	\
											<h3>Portfolio</h3>	\
											<div class=mini-port>";
											for (var i in person.portfolio) {
												if (i == 5)
													break;
												card += "<img src='/content/"+person.key+"/"+person.portfolio[i]+"' />"
											}
						card += "</div>	\
										</div>	\
										</div>	\
									</a>";
			return card;
		},
		createPortfolio : function(person) {
			// TODO this is a bad way of switching layouts
			$(".page.webdesign").removeClass("card-layout");
			$(".page.webdesign").addClass("port-layout");

			var sidebar = "<div class=headshot>										\
											<img src='"+person["picture"]+"' />		\
										</div>																	\
										<div class='person-title webdesign'>			\
											" + person["name"] + "								\
										</div>																	\
										<ul class=port-nav>										\
											<li><a href='/#/webdesign/"+person["key"]+"/bio'>Bio</a></li>	\
											<li><a href='/#/webdesign/"+person["key"]+"/portfolio'>Portfolio</a></li>	\
											<li><a href='/#/webdesign/"+person["key"]+"/contact'>Contact</a></li>	\
										</ul>";


			var content = "<div class='page-title webdesign' webdesign='bio'>		\
											<h2>Bio</h2>													\
										</div>																	\
										<p>" + person['bio'] + "</p>						\
										<p style='height:40px'></p>							\
										<div class='page-title webdesign' webdesign='portfolio'>	\
											<h2>Portfolio</h2>										\
										</div>																	\
										<div class=portfolio>										\
											<div class=portfolio-container>";
											for (var i in webdesign.portfolio) {
											 content += "<a href='content/"+person.key+"/"+webdesign.portfolio[i]+"'><img src='/content/"+person.key+"/"+webdesign.portfolio[i]+"' /></a>";
											}	 
											content += "<div style='clear:both;'></div>";
					content +="</div>";
					content += "<div class=portfolio-thumb-container>";
											for (var i in webdesign.portfolio) {
											 content += "<img src='/content/"+person.key+"/"+webdesign.portfolio[i]+"' />";
											}	 
					content +="</div> \
										</div>																	\
										<div class='page-title webdesign' webdesign='contact'>	\
											<h2>Contact</h2>											\
										</div>																	\
										<p>Email: " + person['email'] + "</p>		\
										<p>Phone: " + person['phone'] + "</p>";

			return { sidebar: sidebar, content: content};
		}
	}
};
