const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/start', (req, res) => {
    res.redirect('/setting');
});

app.use('/setting', (req, res) => {
    res.sendFile(path.join(__dirname, '/maker.html'));
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'));
});