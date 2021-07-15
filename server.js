//MODULES
const utils = require('./utils');
print = utils.printer;
const express = require('express');
const eLayouts = require('express-ejs-layouts');


//MAIN
const utf8 = 'utf8';
const PORT = 8080;

//routers
const index = require('./routes/index');
const reciever = require('./routes/rec');
const about = require('./routes/about');


//setup
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(eLayouts);
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/svg', express.static(__dirname + 'public/svg'));
app.use(express.json());

//routes
app.use('/', index);
app.use('/', reciever);
app.use('/', about)


//listen
app.listen(PORT, () => print(`app on http://localhost:${PORT}`));