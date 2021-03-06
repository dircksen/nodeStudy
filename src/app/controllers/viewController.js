const express = require('express');
const router = express.Router();
const path = require('path');
const axios = require('axios');

router.get('/login', async (req,res) => {
   res.render(path.resolve('./src/views/login.html'));
});

router.get('/homePage', async (req,res) => {
    res.render(path.resolve('./src/views/homePage.html'));
 });

 router.get('/signUp', async (req,res) => {
    res.render(path.resolve('./src/views/signUp.html'));
 });

router.get('/', (req,res)=>{
    res.render(path.resolve('./src/views/index.html'));
});

module.exports = app=>app.use('/', router);