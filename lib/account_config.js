// Disable the possibility to create an account
Accounts.config({ forbidClientAccountCreation: true });

if (Meteor.isClient) {
  accountsUIBootstrap3.setLanguage('fr');
  Accounts.ui.config({ passwordSignupFields: 'USERNAME_ONLY' });
}
