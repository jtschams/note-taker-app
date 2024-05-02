const { readFile, writeFile} = require('fs/promises');
const { uniqueID, noteDelete } = require('./helpers.js')

// Reads saved notes
const readDB = readFile('./db/db.json').then(data => {
    return JSON.parse(data)
});

// Pushes new note to array
const addNote = (newNote, notesArray) => {
    uniqueID(newNote, notesArray)
    notesArray.push(newNote);
    return writeFile('./db/db.json', JSON.stringify(notesArray, null, 2));
}

// TODO: Removes matching id note
// ! Use Array.findIndex(note_id) and Array.splice(i, 1)
const removeNote = (noteID) => {
    
}

module.exports = {
    readDB,
    addNote,
    removeNote
}