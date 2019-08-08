var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query("SELECT * FROM messages", (err, result) => {
        if (err) throw err;
        callback(null, result);
      });
    }, // a function which produces all the messages
    post: function (req, callback) {
      let msg = req.body;
      db.query("INSERT INTO messages VALUES (NULL, " + db.escape(msg.username) + ", " + db.escape(msg.roomname) + ", " + db.escape(msg.text) + ")", (err, result) => {
        if (err) throw err;
        callback(null, result);
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

