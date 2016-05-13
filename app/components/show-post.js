import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	title: Ember.computed.alias('content.title'),
	body: Ember.computed.alias('content.body'),
	authorkey: Ember.computed.alias('content.authorkey'),
	didInsertElement: function(){
		this.set('user', this.get('store').peekRecord('user', this.get('authorkey')));
	}
});
