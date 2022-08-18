const express = require("express");
//local host server set to 3001
const fs = require('fs');
const path = require('path');
const {notes} = require('./db/db.json');
const lib = require('./lib/notes');
const app = express();
//creating const for passage/routes
// const routes = require('./routes');

const PORT = process.env.PORT || 3002;



//middleware added
app.use(express.urlencoded({ extended: true}));
//incoming JSON data
app.use(express.json());

//static middle ware so page can pickup static files like the style sheet
app.use(express.static('public'));


function newNote(body, messageArray){
  const note = body
  messageArray.push(note)
  fs.writeFileSync(
      path.join(__dirname, './db/db.json'),
      JSON.stringify({notes: messageArray}, null, 2),
  )
  return note
}



app.get('/api/notes', (req, res) => {
  let results = notes
  if(req.query){
    results = lib.filterByQuery(req.query, results)
  }
  res.json(results)
})

app.post('/api/notes', (req, res) => {
  req.body.id = notes.length.toString()
  const note = newNote(req.body, notes)
  res.json(note)
})




app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html')) //sending it to directory name
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html')) //sending it to directory name
})



//always set listen on bottom 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });