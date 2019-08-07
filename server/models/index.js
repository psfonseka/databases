var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.query("SELECT * FROM messages", function (err, result, fields) {
        if (err) throw err;
        res.type('json');
        res.statusCode = 200;
        res.send(JSON.stringify({results: result.slice().reverse()}));
      });
    }, // a function which produces all the messages
    post: function (req, res) {
      let msg = req.body;
      db.query("INSERT INTO messages VALUES (NULL, " + db.escape(msg.username) + ", " + db.escape(msg.roomname) + ", " + db.escape(msg.text) + ")", function (err, result, fields) {
        if (err) throw err;
        res.type('json');
        res.statusCode = 201;
        res.send(JSON.stringify("Inserted succesfully!"));
      });
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

