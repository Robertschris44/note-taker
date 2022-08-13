const express = require("express");
//local host server set to 3001
const PORT = process.env.PORT || 3001;
const app = express();



//middleware added
app.use(express.urlencoded({ extended: true}));
//incoming JSON data
app.use(express.json());

//static middle ware so page can pickup static files like the style sheet
app.use(express.static('public'));

//always set listen on bottom 
app.listen(PORT, () => {
    console.log(`API server on port ${PORT}!`);
});