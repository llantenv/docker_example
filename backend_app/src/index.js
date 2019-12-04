var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(bodyParser.json());
app.use(express.json({limit: '50mb'}));
app.use(cors());

//controllers
app.use('/people', require('./routes/people'));
app.use('/stuff', require('./routes/stuff'));

app.listen(3000);
module.exports = app;
