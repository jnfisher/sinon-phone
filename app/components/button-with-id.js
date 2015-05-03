import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    buttonPressed: function() {
      this.sendAction('sendId', this.get('id'));
    }
  }
});
