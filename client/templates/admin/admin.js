Template.admin.onCreated(function() {
  Session.set('actionSubmitErrors', {});
});

Template.admin.helpers({
  errorMessage: function(field) {
    return Session.get('actionSubmitErrors')[field];
  },
  errorClass: function(field) {
    return !!Session.get('actionSubmitErrors')[field] ? 'has-error' : '';
  }
});

Template.admin.events({
  'submit form': function(e) {
    e.preventDefault();

    var action = {
      type: $(e.target).find('input:radio[name=type]:checked').val(),
      montant: $(e.target).find('[name=montant]').val(),
      motif: $(e.target).find('[name=motif]').val()
    };

    var errors = validateAction(action);
    if (errors.type || errors.montant || errors.motif)
      return Session.set('actionSubmitErrors', errors);

    Meteor.call('actionInsert', action, function(error, result) {
      Router.go('recap');
    });
  }
});
