'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../auth/middleware.js');



router.get('/books', auth, handleGetAll);
router.get('/books/:id', auth,  handleGetOne);

// Route Handlers
function handleGetAll(req, res, next) {
  console.log('alive');
  let books = {
    count: 3,
    results: [
      { title:'sohad life' },
      { title:'strong Women' },
      { title: ' Javascript' },
    ],
  };
  res.status(200).json(books);
}

function handleGetOne(req, res, next) {
  let book = {
    title:'sohad',
  };
  res.status(200).json(book);
}

module.exports = router;