var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) throw err;
        res.type('json');
        res.statusCode = 200;
        res.send(JSON.stringify({results: data.slice().reverse()}));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req, (err, data) => {
        if(err) throw err;
        res.type('json');
        res.statusCode = 201;
        res.send(JSON.stringify("Inserted succesfully!"));
      });
    }, // a function which handles posting a message to the database
    options: function(req, res) {
      console.log("options request");
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) throw err;
        res.type('json');
        res.statusCode = 200;
        res.send(JSON.stringify({users: data}));
      });
    },
    post: function (req, res) {
      models.users.post(req, (err, data) => {
        if(err) throw err;
        res.type('json');
        res.statusCode = 201;
        res.send(JSON.stringify("Inserted succesfully!"));
      });
    }
  }
};

