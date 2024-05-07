const router= require('express').Router();
const {readFromFile, readAndAppend } = require('../Helpers/fsUtils');
const uuid = require('../Helpers/uuid');
const fs=require('fs');

//get routes to fetch notes

router.get("/notes",(req,res)=>{
    readFromFile('./db/db.json').then((data)=> res.json(JSON.parse(data)));
});

//post requests(req) to add new notes
router.post("/notes",(req,res)=>{
    const {title,text}= req.body;
    if (title && text ) {
        const newNote={
            title,
            text,
            id: uuid(),
        };
        readAndAppend(newNote,'./db/db.json');
        res.json('New Note Added Successfully!');
    }
    else{
        res.json('Error in adding new note');
    }
}
);
router.delete("/notes/:id",(req,res)=>{
    let data= fs.readFileSync('./db/db.json', "utf8");
    const dataJSON=JSON.parse(data);
    const newNotes= dataJSON.filter((note)=> note.id !==req.params.id);
    fs.writeFileSync('./db/db.json',JSON.stringify(newNotes));
    res.json(newNotes);
}
);

module.exports= router;