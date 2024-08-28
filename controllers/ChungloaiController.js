var Chungloai = require('../models/Chungloai');



var ChungloaiController = {
 //view ra 
    index:(req,res)=>{
        Chungloai.getAll((err,data)=>{
            if(err){
                res.send(err);
            }else{
                res.render('admin/Chungloai/Danhsach',{cat:data});
                
            }

        })
    },
//thêm
    add:(req,res)=>{
        res.render('admin/Chungloai/AddCate');
    },

    create:(req,res)=>{
        Chungloai.create(req.body,(err,data)=>{
           
                if(err){
                    res.send(err);
                }else{
                    res.redirect('/chungloai');
                }
            
        })
    },

    //sửa
    edit:(req,res)=>{
        Chungloai.findById(req.params.id,(err,data)=>{
            if(err){
                res.send(err);
            }else{
                res.render('admin/Chungloai/EditCate',{cate:data[0]});
            }
        })
        
    },

   update:(req,res)=>{
        Chungloai.update(req.body,(err,data)=>{
           
                if(err){
                    res.send(err);
                }else{
                    res.redirect('/chungloai');
                }
            
        })
    },

    delete:(req,res)=>{
        Chungloai.delete(req.params.id,(err,data)=>{
            if(err){
                res.send(err);
            }else{
                res.redirect('/chungloai');;
            }
        })
        
    },
}
module.exports = ChungloaiController;