Meteor.publish("actions", function () {
  return Actions.find({}, {sort: {date: -1}});
});
