

var acount=require('../models/acount');

const Joi = require('joi');
var acountController={



add:(req,res)=>{
    res.render('Trangnguoidung/register');
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
        acount.create(req.body,(err,dete)=>{
       
            if(err){
                res.send(err);
            }else{
                res.redirect('/');
            }
        
    })
    } 
  
},

app:(req,res)=>{
    res.render('Trangnguoidung/login');
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
        acount.check_login(req.body.email,req.body.password,(err,data)=>{
            if(err){
                res.send(err);
            }
            else{
                //lưu thông tin tài khoản vào session
                req.session.acount=data;
                //diều hướng đến trang chủ
                return res.redirect('/');
            }
        })
    }
   
},

}
module.exports = acountController;