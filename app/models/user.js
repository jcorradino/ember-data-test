import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  username: attr('string'),
  email: attr('string'),
  city: attr('string'),
  website: attr('string'),
  companyName: attr('string'),
	posts: hasMany('post')
});