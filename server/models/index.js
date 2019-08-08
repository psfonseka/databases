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
    get: function (callback) {
      db.query("SELECT * FROM users", (err, result) => {
        if (err) throw err;
        callback(null, result);
      });
    },
    post: function (req, callback) {
      let user = req.body;
      console.log(user);
      db.query("INSERT INTO users VALUES (" + db.escape(user.username) + ")", (err, result) => {
        if (err) throw err;
        callback(null, result);
      });
    }
  }
};

