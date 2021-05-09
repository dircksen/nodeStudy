const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res)=>{
    res.send('API is working!');
});

require('./app/controllers/index')(app);

app.listen(3000);