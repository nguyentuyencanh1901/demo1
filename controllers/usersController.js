

var users=require('../models/users');
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const Joi = require('joi');
var usersController={



add:(req,res)=>{
   
    res.render('admin/users/register');
},

create:(req,res)=>{
    const Shema=Joi.object().keys({
        name:Joi.string().required().messages({'string.empty':'tên không được để trống !!!'}),
        email:Joi.string().email().required().messages({'string.empty':'email tên không được để trống !!!','string.email':'Không đúng định dạng !!!'}),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages({'string.empty.pattern':'Không đúng đinh dạng password !!!'})

    });
    const {error}=Shema.validate(req.body);
    if(error){
        res.render('admin/users/register',{err:error.details});
    }else{
        bcrypt.hash(req.body.password,parseInt(10)).then((passmoi)=>{
            var name=req.body.name;
       var email=req.body.email;
        users.create(({name,email,passmoi}),(err,data)=>{
           
                if(err){
                    res.send(err);
                }else{
                    res.redirect('/login');
                }
            
        }) 
    });
    }
    

},

app:(req,res)=>{
   
    res.render('admin/users/login');
},


check_login:(req,res)=>{
    const Shema=Joi.object().keys({
       
        email:Joi.string().email().required().messages({'string.empty':'email tên không được để trống !!!','string.email':'Không đúng định dạng !!!'}),
        password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages({'string.empty.pattern':'Không đúng đinh dạng password !!!'})

    });
    const {error}=Shema.validate(req.body);
    if(error){
        res.render('admin/users/login',{err:error.details});
    }else{
        users.check_login(req.body.email,req.body.password,(err,data)=>{
            if(err){
                res.send(err);
            }
            else{
                //lưu thông tin tài khoản vào session
                req.session.login=data;
                //diều hướng đến trang chủ
                return res.redirect('/admin');
            }
        })
    }
   
},


}
module.exports = usersController;