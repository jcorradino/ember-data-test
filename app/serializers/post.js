import JSONAPISerializer from 'ember-data/serializers/json-api';
import Ember from 'ember';

export default JSONAPISerializer.extend({
	isNewSerializerAPI: false,
	normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
		var transformedData = [];
		Ember.$(payload).each(function(id, record) {
			var post = {};
			post.id = record.id;
			post.type = "post";
			post.attributes = record;
			transformedData.push(post);
		});
		return this._super(store, primaryModelClass, {"data": transformedData}, id, requestType);
	}
});
