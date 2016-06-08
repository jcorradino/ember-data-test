import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  postId: attr('string'),
  title: attr('string'),
  body: attr('string'),
  user: attr(),
  userId: belongsTo('User')
});
