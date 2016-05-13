import JSONAPISerializer from 'ember-data/serializers/json-api';
import Ember from 'ember';

export default JSONAPISerializer.extend({
	isNewSerializerAPI: false,
	normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
		Array.prototype.shuffle = function() {
			var i = this.length, j, temp;
			if ( i == 0 ) return this;
			while ( --i ) {
				j = Math.floor( Math.random() * ( i + 1 ) );
				temp = this[i];
				this[i] = this[j];
				this[j] = temp;
			}
			return this;
		}

		var transformedData = [];
		Ember.$(payload).each(function(id, record) {
			record.authorkey = String(record.userId);
			var post = {};
			post.type = "post";
			post.attributes = record;
			transformedData.push(post);
		});

		transformedData = transformedData.shuffle();

		var id = 0;

		Ember.$(transformedData).each(function(id, record) {
			record.id = id;
			id++;
		});

		return this._super(store, primaryModelClass, {"data": transformedData}, id, requestType);
	}
});
