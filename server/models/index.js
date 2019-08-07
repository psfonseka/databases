var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("get request123");
      db.query("SELECT * FROM messages", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
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

