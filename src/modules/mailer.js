const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');
const exphbs = require('express-handlebars');
const {host, port , user , pass} = require('../config/mail.json');

var transport = nodemailer.createTransport({
    host,
    port,
    auth: {user,pass}
});

// transport.use('compile',hbs({
//     viewEngine: 'handlebars',
//     viewPath: path.resolve("./", "./src/resources/mail/"),
//     extName: '.html',
// }))

transport.use(
    'compile',
    hbs({
      viewEngine: exphbs.create({
        layoutsDir: path.resolve("./", "./src/resources/mail/"),
        defaultLayout: 'auth/forgot_password',
        extname: '.html',
      }),
      viewPath: path.resolve("./", "./src/resources/mail/"),
      extName: '.html',
    })
  );

module.exports = transport;