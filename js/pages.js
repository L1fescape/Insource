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

	Graphic : {
		createCard : function(person) {
			return "";
		},
		createProfile : function(person) {
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
