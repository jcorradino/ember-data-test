import Ember from 'ember';

export default Ember.Component.extend({
	title: Ember.computed.alias('content.title'),
	body: Ember.computed.alias('content.body'),
	authorID: Ember.computed.alias('content.user'),
	author: Ember.computed(function(){
		debugger;
	})
});
