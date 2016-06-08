import JSONAPISerializer from 'ember-data/serializers/json-api';
import Ember from 'ember';

export default JSONAPISerializer.extend({
	isNewSerializerAPI: false,
	normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
		for (var i = 0; i < payload.included.length; i++) {
			Ember.set(payload, 'data.'+i+'.attributes.user', payload.included[i].attributes);
		}

		return this._super(store, primaryModelClass, payload, id, requestType);
	}
});
