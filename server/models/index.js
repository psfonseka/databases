var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.query("SELECT * FROM messages", function (err, result, fields) {
        if (err) throw err;
        //console.log(JSON.stringify({results: result}));
        res.type('json');
        //console.log(JSON.stringify({results: [{messageID: 0, text: "yikes", username: "bob", roomname: "lobby"}]}));
        //res.send(JSON.stringify({results: [{messageID: 0, text: "this is the first message!", username: "bob", roomname: "lobby"}]}));
        //res.type('json');
        res.send(JSON.stringify({results: result}));
      });
    }, // a function which produces all the messages
    post: function (req, res) {
      console.log("post request123");
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {

    },
    post: function (req, res) {

    }
  }
};

