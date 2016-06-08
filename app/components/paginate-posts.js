import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	postCount: 0,
	currentPage: Ember.computed(function(){
		return 0;
	}).property(),
	postsPerPage: 5,

	oldPosts: Ember.computed(function(){
		return (this.get('currentPage') !== 0) ? "show" : "hidden";
	}).property('posts'),

	newPosts: Ember.computed(function(){
		return (this.get('postCount') > (this.get('currentPage') + 1) * this.get('postsPerPage')) ? "show" : "hidden";
	}).property('posts'),

	posts: Ember.computed(function(){
		return [];
	}).property(),

	didInsertElement: function(){
		var $this = this;
		$(".loadNewPosts").on('click', function(){
			var currentPage = $this.get('currentPage');
			currentPage++;
			$this.set('currentPage', currentPage);
			$this.populatePosts();
		});

		$(".loadOldPosts").on('click', function(){
			var currentPage = $this.get('currentPage');
			currentPage--;
			$this.set('currentPage', currentPage);
			$this.populatePosts();
		});

		this.populatePosts();
	},

	populatePosts: function(start, end) {
		var posts = [],
			$this = this,
			start = this.get('currentPage') * this.get('postsPerPage'),
			end = start + this.get('postsPerPage');

		$('.loadingFrame').fadeIn('fast');
		if (Object.keys(this.get('store').peekAll('post').get('content')).length === 0) {
			Ember.run.later(function(){
				$this.populatePosts(start,end,true);
			}, 300);
		} else {
			var loadedPosts = this.get('store').peekAll('post').get('content'),
				posts = [];

			this.set('postCount', Object.keys(loadedPosts).length);

			for (var i = start; i < end; i++) {
				posts.push(loadedPosts.get(i));
			}

			this.set('posts', posts);
			$('.loadingFrame').fadeOut('fast');
		}
	}
});
