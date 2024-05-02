const router = require('express').Router();
const { readDB, addNote, removeNote } = require('../../helpers/fetchActions.js')

router.get('/notes/', (req, res) => {
    readDB.then(notesArray => {
        res.json(notesArray);
    })
    .catch((err) => {
        console.error(err)
        res.json('Unable to read stored notes')
    }
    )
});

router.post('/notes/', (req, res) => {
    const { title, text } = req.body;
    const newNote = { title, text };
    readDB
    .then(notesArray => {
        console.log(notesArray)
        const result = addNote(newNote, notesArray);
        result
        .then(res.json(`New note '${newNote.title}' successfully saved.`))
    })
    .catch((err) => {
        console.error('Unable to save note.');
        res.json('Unable to save note.');
    })
});

router.delete('/notes/:id', (req, res) => {
    // TODO: add DELETE functionality
});

module.exports = router;