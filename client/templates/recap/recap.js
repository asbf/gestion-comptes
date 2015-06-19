Template.recap.helpers({
  actionsCollection: function () {
    return Actions;
  },

  fields: function () {
    var fields = [
      { key: 'date', label: 'Date', sortOrder: 0, sortDirection: 'descending', fn: function (value, object) { return moment(value).format("DD/MM/YYYY HH:mm:ss"); } },
      { key: 'utilisateur', label: 'Utilisateur' },
      { key: 'type', label: 'Type d\'opération', fn: function (value, object) { return value === 'depot' ? 'Dépôt' : 'Retrait'; } },
      { key: 'montant', label: 'Montant', fn: function (value, object) { return value + ' €'; } },
      { key: 'motif', label: 'Motif' }
    ];
    return fields;
  }
});
