/* You'll need to
 *   npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'students');
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = db.define('User', {
  username: {
    type: Sequelize.STRING,
    primaryKey: true
  }
});

var Message = db.define('Message', {
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

/* Sequelize comes with built in support for promises
 * making it easy to chain asynchronous operations together */
Message.sync()
  .then(function() {
    return Message.create({username: 'Jean Valjean', roomname: 'lobby', text: 'Men like you don\'t change'});
  })
  .then(function() {
    return Message.findAll({ where: {username: 'Jean Valjean'} });
  })
  .then(function(messages) {
    messages.forEach(function(message) {
      console.log(message);
    });
  })
  .catch(function(err) {
    console.log(err);
    db.close();
  })
User.sync()
  .then(function() {
    // Now instantiate an object and save it:
    return User.create({username: 'Jean Valjean'});
  })
  .then(function() {
    // Retrieve objects from the database:
    return User.findAll({ where: {username: 'Jean Valjean'} });
  })
  .then(function(users) {
    users.forEach(function(user) {
      console.log(user.username + ' exists');
    });
    db.close();
  })
  .catch(function(err) {
    // Handle any error in the chain
    console.error(err);
    db.close();
  });
