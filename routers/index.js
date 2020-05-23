const express = require('express'); // using express

const router = express.Router(); // setting up router

router.get('/', (req,res) => {
    res.send('hi');
})

module.exports = router; // exporting router