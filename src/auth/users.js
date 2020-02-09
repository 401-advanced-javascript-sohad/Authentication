/* eslint-disable strict */
'use strict';

const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');





const users = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

  users.pre('save', function(next) {
    bcrypt.hash(this.password,9)
      .then(hashedPassword => {
        this.password = hashedPassword;
        next();
      })
      .catch( error => {throw error;} );
  });



  users.statics.authenticateBasic = function(auth) {
    let query = {username:auth.username};
    return this.findOne(query)
      .then(user => user.comparePassword(auth.password))
      .catch(console.error);
  };



users.methods.passCompare = function(password) {
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};



users.methods.generateToken = function(user) {
  let token = jwt.sign({ username: user.username}, process.env.SECRET);
  return token;
};


users.statics.list =  async function(){
  let output = await this.find({});
  return output;
  // jwt.sign(tokenData, process.env.SECRET || '' )
};
module.exports = mongoose.model('users',users);