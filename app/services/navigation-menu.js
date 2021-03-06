import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Service.extend({
  onboarding: service(),

  isDefault: Ember.computed.equal('menuType', 'default'),
  isOnboarding: Ember.computed.equal('menuType', 'onboarding'),

  menuType: Ember.computed('onboarding.isOnboarding', function() {
    let isOnboarding = this.get('onboarding.isOnboarding');
    if (isOnboarding) {
      return 'onboarding';
    } else {
      return 'default';
    }
  }),
});
