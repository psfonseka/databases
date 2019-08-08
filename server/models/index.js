var db = require('../db');
var Sequelize = require('sequelize');
var nb = new Sequelize('chat', 'root', 'students');

var User = nb.define('user', {
  username: {
    type: Sequelize.STRING,
    primaryKey: true
  }
});

var Message = nb.define('message', {
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

module.exports = {
  messages: {
    get: function (callback) {
      let res = [];
      Message.sync()
      .then(function() {
        return Message.findAll({});
      })
      .then(function(messages) {
        messages.forEach(function(message) {
          res.push(message.dataValues);
        });
        callback(null, res);
      })
      .catch(function(err) {
        console.log(err);
      });
    }, // a function which produces all the messages
    post: function (req, callback) {
      let msg = req.body;
      Message.sync()
        .then(function() {
          return Message.create({username: msg.username, roomname: msg.roomname, text: msg.text});
        })
        .then(function() {
          callback(null);
        })
        .catch(function(err) {
          console.log(err);
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
      db.query("INSERT INTO users VALUES (" + db.escape(user.username) + ")", (err, result) => {
        if (err) throw err;
        callback(null, result);
      });
    }
  }
};

