import Ember from 'ember';

export default Ember.Controller.extend({
  buttonGroups: Ember.A([
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#'] ]),

  currentNumber: '',

  clearNumber: function() {
    this.set('currentNumber', '');
  },

  dialNumber: function() {
    // Dial a number
    this.clearNumber();
  },

  actions: {
    receiveButtonPress: function(buttonId) {
      this.set('currentNumber', this.get('currentNumber') + buttonId);

      if (this.get('currentNumber').length === 10) {
        this.dialNumber();
      }
    }
  }
});
