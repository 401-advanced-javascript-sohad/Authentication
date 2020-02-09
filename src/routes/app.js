
'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');



// Require Resourses
const errorHandler = require( '../middleware/500.js');
const notFound = require( '../middleware/404.js' );
const authRouter = require('../auth/router.js');




// Prepare the express app
const app = express();


// app using and catchalls
app.use(errorHandler);
app.use(authRouter);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(notFound);



module.exports = {
  server: app,
  start: (port) =>{
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server Up on ${port}`));

  },
};




//////////////////////////////////////////////////////////////