//setup
const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

//data
//get data asyncronously
const mesList = async () => {
    const file = await fs.readFile('./data/chats.json', 'utf-8');
    const json = await JSON.parse(file);
    return json.chats;
}

//route
router.get('/', (req, res) => {
    res.redirect('/home');
});

router.get('/home', (req, res) => {
    //get data
    const mes = mesList();
    var chats = [];

    //render page when data is found
    mes.then(arr => {
        arr.forEach(element => {
            chats.push(element);
        });
        res.render('index.ejs', {
            messages: chats,
        });
    });
});

//export
module.exports = router;