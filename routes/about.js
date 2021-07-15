//setup
const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

//route
router.get('/about', (req, res) => {

    res.render('about.ejs');

});

module.exports = router;