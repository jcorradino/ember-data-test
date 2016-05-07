import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var posts = this.store.findAll('post');
		var authors = this.store.findAll('user');
		return {
			posts: posts,
			authors: posts
		};
	}
});