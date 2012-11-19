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
				"graphic" : Pages.Graphic.createCard
			};
			
			// Headers for each card type
			cards["graphic"] = '<div class="page-title graphic" style=""><h2>Graphic Design</h2></div>';
			
			var route = "/api/?method=all&format=card";
			$.get(route, function(output) {
				output = JSON.parse(output);
				
				for (var type in output) {
					for (var p in output[type]) {
						var person = output[type][p];
						cards[type] += cardTemplates[type](person);
					}
				}

				// Combine all html into one var
				var content = "";
				for (var card in cards) {
					content += cards[card];
				}
				if (callback) callback(content);
			});
		}
	},

	Graphic : {
		createCard : function(person) {
			var card = "<a href='/#/graphic/"+person.key+"'>"+person.name+"</a>";
			return card;
		},
		createPortfolio : function(person) {
			var sidebar = "<div class=headshot>										\
											<img src='"+person["picture"]+"' />		\
										</div>																	\
										<div class='person-title graphic'>			\
											" + person["name"] + "								\
										</div>";

			var content = "<div class='page-title graphic'>				\
											<h2>Bio</h2>													\
										</div>																	\
										<p>" + person['bio'] + "</p>						\
										<p style='height:40px'></p>							\
										<div class='page-title graphic'>				\
											<h2>Portfolio</h2>										\
										</div>																	\
										<div class=portfolio>										\
											<div class=portfolio-container>				\
											</div>																\
										</div>																	\
										<div class='page-title graphic'>				\
											<h2>Contact</h2>											\
										</div>																	\
										<p>Email: " + person['email'] + "</p>		\
										<p>Phone: " + person['phone'] + "</p>";

			return { sidebar: sidebar, content: content};
		}
	}
};
