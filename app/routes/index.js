import Ember from 'ember';

export default Ember.Route.extend({
	init: function() {
		this._super();
		this.populateUsers();
		this.populatePosts();
	},
	
	populateUsers: function() {
		this.set('users', this.store.findAll('user'));
	},
	
	populatePosts: function() {
		this.set('posts', this.store.findAll('post'));
	},
	
	model: function() {
		return {
			posts: this.get('posts')
		}
	}
});