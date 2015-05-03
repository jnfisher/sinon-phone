import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    sendId: function() {
      this.sendAction('sendId', this.get('id'));
    }
  }
});
