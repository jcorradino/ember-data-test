import Ember from 'ember';

export default Ember.Component.extend({
	title: Ember.computed.alias('content.record.title'),
	body: Ember.computed.alias('content.record.body'),
	userName: Ember.computed.alias('content.record.user.name'),
	userWebsite: Ember.computed.alias('content.record.user.website')
});
