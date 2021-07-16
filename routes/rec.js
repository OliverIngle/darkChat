//setup
const express = require('express');
const fs = require('fs').promises;
const router = express.Router();

//append
async function append(data) {
    const file = await fs.readFile('./data/chats.json', 'utf8')
    const db = await JSON.parse(file);
    db.chats.push(data);
    fs.writeFile('./data/chats.json', JSON.stringify(db, null, 4), err => {})
}

//route
router.post('/api', (req, res) => {
    let requestData = req.body;
    console.log(requestData);
    append(requestData).then(res.send({respose: 'recieved'}))
});

//export
module.exports = router;