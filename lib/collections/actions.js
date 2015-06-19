Actions = new Meteor.Collection('actions');

validateAction = function(action) {
  var errors = {};
  if (!((action.type === 'depot') || (action.type === 'retrait')))
    errors.type = "Le type de l'action n'est pas valide !";
  if ((!action.montant) || (!action.montant.match(/^\d+[.,]?\d{0,2}$/)))
    errors.montant = "Veuillez entrer un montant valide pour l'opération !";
  if (!action.motif)
    errors.motif = "Veuillez entrer un motif à l'opération !";
  return errors;
}

Meteor.methods({
  actionInsert: function(actionAttributes) {
    check(Meteor.userId(), String);
    check(actionAttributes, {
      type: String,
      montant: String,
      motif: String
    });


    var errors = validateAction(actionAttributes);
    if (errors.type || errors.montant || errors.motif)
      throw new Meteor.Error('invalid-action', "Informations invalides !");

    actionAttributes.montant = actionAttributes.montant.replace(/,/g , ".");
    actionAttributes.montant = parseFloat(actionAttributes.montant).toFixed(2);

    var user = Meteor.user();
    var action = _.extend(actionAttributes, {
      utilisateur: user.profile.displayName,
      date: new Date()
    });
    Actions.insert(action);
  }
});
