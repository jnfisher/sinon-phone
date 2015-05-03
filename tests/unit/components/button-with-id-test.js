import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('button-with-id', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it sends its id when the button is pressed', function(assert) {
  var component = this.subject();
  var buttonId = '7';
  component.set('id', buttonId);

  component.sendAction = sinon.spy();

  component.send('buttonPressed');

  assert.ok(component.sendAction.calledOnce);
  assert.ok(component.sendAction.calledWith('sendId', buttonId));
});
