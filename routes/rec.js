//setup
const express = require('express');
const fs = require('fs').promises;
const router = express.Router();

//append
async function append(data) {
    try {
        const file = await fs.readFile('./data/chats.json', 'utf8')
        const db = await JSON.parse(file);
        db.chats.push(data);
        fs.writeFile('./data/chats.json', JSON.stringify(db, null, 4), err => {})
    } catch(error) {
        console.log(error);
    }
}

//route
router.post('/api', async (req, res) => {
    try {
        let requestData = req.body;
        console.log(requestData);
        append(requestData).then(res.send({respose: 'recieved'}))
    } catch(error) {
        console.log(error);
    }
});

//export
module.exports = router;