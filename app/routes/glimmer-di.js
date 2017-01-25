import Ember from 'ember';
import source from './../sources/glimmer-di';

export default Ember.Route.extend({
  model() {
    return source;
  }
});
