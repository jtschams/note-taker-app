
// Generates a unique random id
const uniqueID = (note, array) => {
    const newID = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    for (let entry of array) {
        if (entry.id === newID) { 
            return uniqueID(note, array);
        }
    }
    note.id = newID;
    return note;
}

// Matches submitted id and removes note from array
const noteDelete = (removal, array) => {
    const deleteIndex = array.findIndex((note) => note.id === removal);
    array.splice(deleteIndex, 1);
    return array;
}

module.exports = {
    uniqueID,
    noteDelete
}