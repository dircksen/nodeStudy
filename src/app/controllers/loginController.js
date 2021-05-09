const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', async (req,res) => {
   res.render(path.resolve('./src/views/login.html'));
});

module.exports = app=>app.use('/login', router);