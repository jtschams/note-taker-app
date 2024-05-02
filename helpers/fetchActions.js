const { readFile, writeFile} = require('fs/promises');
const { uniqueID, noteDelete } = require('./helpers.js');

// Reads saved notes
const readDB = readFile('./db/db.json').then(data => {
    return JSON.parse(data);
});

// Pushes new note to array
const addNote = (newNote, notesArray) => {
    uniqueID(newNote, notesArray);
    notesArray.push(newNote);
    return writeFile('./db/db.json', JSON.stringify(notesArray, null, 2));
}

// Removes matching id note
const removeNote = (noteID, notesArray) => {
    const newArray = noteDelete(noteID, notesArray);
    return writeFile('./db/db.json', JSON.stringify(newArray, null, 2));
}

module.exports = {
    readDB,
    addNote,
    removeNote
}