var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(req, res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req, res);
    }, // a function which handles posting a message to the database
    options: function(req, res) {
      console.log("options request");
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log("post request");
    },
    post: function (req, res) {
      console.log("post request");
    }
  }
};

