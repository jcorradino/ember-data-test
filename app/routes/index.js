import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var $this = this;
		var post = this.store.findAll('post');
		return post;
	}
});