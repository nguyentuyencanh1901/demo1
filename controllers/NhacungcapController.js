var Nhacungcap = require('../models/Nhacungcap');



var NhacungcapController = {
 //view ra 
    index:(req,res)=>{
        Nhacungcap.getAll((err,data)=>{
            if(err){
                res.send(err);
            }else{
                res.render('admin/Nhacungcap/Danhsach',{cat:data});
                
            }

        })
    },
//thêm
    add:(req,res)=>{
        res.render('admin/Nhacungcap/AddCate');
    },

    create:(req,res)=>{
        Nhacungcap.create(req.body,(err,data)=>{
           
                if(err){
                    res.send(err);
                }else{
                    res.redirect('/Nhacungcap');
                }
            
        })
    },

    //sửa
    edit:(req,res)=>{
        Nhacungcap.findById(req.params.id,(err,data)=>{
            if(err){
                res.send(err);
            }else{
                res.render('admin/Nhacungcap/EditCate',{cate:data[0]});
            }
        })
        
    },

   update:(req,res)=>{
        Nhacungcap.update(req.body,(err,data)=>{
           
                if(err){
                    res.send(err);
                }else{
                    res.redirect('/Nhacungcap');
                }
            
        })
    },

    delete:(req,res)=>{
        Nhacungcap.delete(req.params.id,(err,data)=>{
            if(err){
                res.send(err);
            }else{
                res.redirect('/Nhacungcap');;
            }
        })
        
    },
}
module.exports = NhacungcapController;