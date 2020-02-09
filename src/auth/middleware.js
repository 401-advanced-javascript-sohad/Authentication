/* eslint-disable strict */
'use strict';

const Users = require('./users.js');
const base64 = require('base-64');

module.exports = (req, res, next) => {

    
  try {

    let [authType, authString] = req.headers.authorization.split(/\s+/);

    switch(authType.toLowerCase()) {
    case 'basic':
      return authBasic(authString);
    default:
      return authError();
    }

  } catch(e) {
    return authError();
  }

};


  function authBasic(authString) {
    let base64Buffer = Buffer.from(authString,'base64');
    let bufferString =base64Buffer.toString(); 
    let [username,password]= bufferString.split(':');  
    let auth = {username , password};

    return User.authenticateBasic(auth)
      .then( user => authenticate(user) );
  }

  function authenticate(user) {
    if ( user ) {
      req.user = user;
      req.token = user.generateToken();
      next();
    }
  }

