const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/static'));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

require('./app/controllers/index')(app);

app.listen(3000);