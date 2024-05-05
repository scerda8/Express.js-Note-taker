//Dependencies
const express = require('express');
const json = require('./db/db.json');

//Set up server
const PORT = 3001;
const app = express();

//middleware





//application listening on local host 
app.listen(PORT, () => 
  console.log(`Express server listening on port ${PORT}!`)
);
