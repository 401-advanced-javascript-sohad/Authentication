
'use strict';

const express = require('express');
const authRouter = express.Router();
const Users = require('./users.js');
const auth = require('./middleware.js');

//sigup
authRouter.post('/signup', (req, res,next) => {
  let user = new Users(req.body);
  user.save()
    .then(data => {
      let token = user.generateToken(data);
      res.status(200).send(token);
    }).catch(next);
});




  
//signin
authRouter.post('/signin', auth, (req, res) => {
  res.status(200).send(req.token);
});



//get users
authRouter.get('/users',(req, res) => {
  Users.list() .then(data=>{
      res.status(200).json(data);
    });
});

module.exports = authRouter;




