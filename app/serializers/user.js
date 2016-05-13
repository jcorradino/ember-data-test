import JSONAPISerializer from 'ember-data/serializers/json-api';
import Ember from 'ember';

export default JSONAPISerializer.extend({
	isNewSerializerAPI: false,
	normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
		var transformedData = [];
		Ember.$(payload).each(function(id, record) {
			var post = {
				id: record.id,
				type: "user",
				attributes: {
					name: record.name,
					username: record.username,
					email: record.email,
					city: record.address.city,
					website: record.website
				}
			};
			transformedData.push(post);
		});
		return this._super(store, primaryModelClass, {"data": transformedData}, id, requestType);
	}
});
