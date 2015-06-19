// Création du compte administrateur
Meteor.startup(function () {
  if(Meteor.users.find().count() === 0) {
    // Create default accounts
    var ambrocidus = {
      username: 'ambrocidus',
      password: 'ambrocidus',
      profile: {displayName: 'Ambrocidus'}
    };
    Accounts.createUser(ambrocidus);

    var yashn = {
      username: 'yashn',
      password: 'yashn',
      profile: {displayName: 'Yashn'}
    };
    Accounts.createUser(yashn);
  }
});
