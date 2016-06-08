import Ember from 'ember';

export default Ember.Route.extend({
	init: function() {
		this._super();
		this.populatePosts();
	},
	
	populatePosts: function() {
		this.set('posts', this.store.query('post', {
			include: 'userId',
			sort: 'id'  
		}));
	},
	
	model: function() {
		// return {
		// 	posts: this.get('posts')
		// }
	}
});