//Dependencies
const express= require ('express');
const fs=require('fs');
const indexRoute =require('./Routes/index');
const notesRoute=require('./Routes/notes');
//Set up server
const app = express();

const PORT = 3001;

//middleware
app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.static('Public'));

app.use('/', indexRoute);
app.use('/api', notesRoute);



//application listening on local host 
app.listen(PORT, () => 
  console.log(`Express server listening on port ${PORT}!`)
);
