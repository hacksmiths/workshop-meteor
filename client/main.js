import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.home.events({
  "submit form"(event) {
    event.preventDefault();
    var message = event.target[0].value;

    Entries.insert({
      text: message,
      dateAdded: new Date()
    });
  }
});

Template.list.helpers({
  listOfEntries: function() {
    return Entries.find({}, {
      sort: {
        dateAdded: -1
      }
    });
  }
});