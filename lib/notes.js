const fs = require("fs");
const path = require("path");






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
    findById
}

