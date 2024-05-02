const router = require('express').Router();
const path = require('path');

// Get routes for homepage and notes page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

module.exports = router;