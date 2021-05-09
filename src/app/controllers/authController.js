const express = require('express');
const User = require('../models/user');
const router = express.Router();
const authConfig = require('../../config/auth.json')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailer = require('../../modules/mailer');

function generateToken(params){
    const token = jwt.sign( params, authConfig.secret,{
        expiresIn: 86400,
    });

    return token;
} 

router.post('/register', async (req,res) => {
    const {email} = req.body;
    try{

        if(await User.findOne({email}))
            return res.status(400).send({error: 'User already registered'})

        const user = await User.create(req.body);
        user.password = undefined;

        return res.send({user, token: generateToken({id: user.id})});
    }catch(err){
        return res.status(400).send({error: 'Registration Fail'});
    }
});

router.post('/authenticate', async (req,res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email}).select('+password');

    if (!user)
        return res.status(400).send({error: 'User not found'});

    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({error: 'Invalid password'});

    user.password = undefined;

    res.send({user, token: generateToken({id: user.id})});
});


router.post('/forgot_password', async(req,res)=>{
    const {email} = req.body;

    try{
        const user = await User.findOne({email});
        
        if(!user)
            return res.status(400).send({error: 'User not found'});

        const token = crypto.randomBytes(20).toString('hex');
        const now = new Date;
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate(user.id,{
            '$set':{
                passwordResetToken: token,
                passwordResetExpires: now,
            }
        });

        mailer.sendMail({
            to: email,
            from: 'filipeduf@gmail.com',
            template: 'auth/forgot_password',
            context: {token},
        }, (err)=>{
            console.log(err);
            if(err) return res.status(400).send({error: 'Error on forgot password, try again'});

            return res.send('Email sent!');
        })     
    }catch(err){
        return res.status(400).send({error:'Unexpected Error'})
    }
});

router.post('/reset_password', async(req,res)=>{
    const {email, token, password} = req.body;

    try{        
        const user = await User.findOne({email})
        .select('+passwordResetToken +passwordResetExpires');

        if(!user)
            return res.status(400).send({error: 'User not found'});

        if(token !== user.passwordResetToken)
            return res.status(400).send({error: 'Token Invalid'});
            
        if(new Date() > user.passwordResetExpires)
            return res.status(400).send({error: 'Token Expired, generate a new one!'});

        user.password = password;
        await user.save();
        
        res.send();
    }catch(err){
        console.log(err);
        return res.status(400).send({error:'Cannot reset password'})
    }
 });

module.exports = app=>app.use('/auth', router);