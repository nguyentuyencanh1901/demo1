const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const Joi = require('joi');
const multer = require('multer')
var path=require('path');
const { create } = require('domain');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.static(path.join(__dirname,'/img')));

app.set('view engine','ejs');


var session=require('express-session');
const authMiddlweare = require('./middleware/authmiddleware');



app.use(session({
    secret:'canh19012005', // mã bảo mật đặt tùy ý
    resave:true,
    saveUninitialized:false
}));

app.use((req,res,next)=>{
    res.locals.acount = req.session.acount;
    next();
})


app.use((req,res,next)=>{
    res.locals.login = req.session.login;
    next();
})





app.get('/logout',(req,res)=>{
    req.session.login=null;
    return res.redirect('/')
})

app.get('/log-out',(req,res)=>{
    req.session.acount=null;
    return res.redirect('/')
})
app.get('/admin',authMiddlweare.authcheck,(req,res)=>{
 res.render('admin/Trangchu');
})



require('./router/Chungloai.route')(app);
require('./router/Sanpham.route')(app);
require('./router/Nhacungcap.route')(app);
require('./router/users.route')(app);
require('./router/Trangchu.route')(app);
require('./router/Chitiet.route')(app);
require('./router/Ndsanpham.route')(app);
require('./router/Gioithieu.route')(app);
require('./router/Header.route')(app);
require('./router/acount.route')(app);
require('./router/Lienhe.route')(app);
require('./router/Taikhoan.route')(app);




app.listen(3000,()=>console.log("server runing..."));