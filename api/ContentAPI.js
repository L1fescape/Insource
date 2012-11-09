// BlogAPI.js 

// Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = new Schema({
	title: String
});

var postModel = mongoose.model('Post', Post);





module.exports = {
	get: function ( type, callback ) {
		var response = "Artist: \n You have the skills all you need to do is send us your best work. Once you have been accepted to be an Insource Artist, we set up your profile! Insource University then dives into the market and promotes your work. Businesses browse your portfolios and can easily contact you for their next project. Hassle-free, worry-free, and best of all, free to showcase your talents! \n\n Business: \n You have a project and we have an artist that can help. You can easily browse through any artist's work to find the style and skill sets you are looking for. Once you have found your match, making the first contact is easy with the information provided on the artist's profile. Professional and affordable service is just a few clicks away."
		if (callback) callback(response);
	}

};
