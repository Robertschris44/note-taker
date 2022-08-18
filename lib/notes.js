const fs = require("fs");
const path = require("path");



//need function to write note here
function newNote(body, messageArray){
    const note = body
    messageArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({notes: messageArray}, null, 2),
    )
    return note
}

function findById(id, messageArray){
    const result = messageArray.filter(note => note.id === id)[0];
    return result
}

function filterByQuery(query, messageArray) {
    let filteredResults = messageArray;


    if (query.title) {
        filteredResults = filteredResults.filter(note => note.title === query.title);
    }
    if (query.text) {
        filteredResults = filteredResults.filter(note =>note.type === query.text);
    }
    return filteredResults;
}


module.exports = {
    filterByQuery,
    findById,
    newNote
}

