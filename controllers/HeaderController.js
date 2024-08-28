const conn = require('../database/connect');
const Chungloai = require('../models/Chungloai');
const Nhacungcap = require('../models/Nhacungcap');
var Header = require('../models/Header');
const util=require('util');


var HeaderController = {
  
    index:(req,res)=>{
        const query = util.promisify(conn.query).bind(conn);

        (async () => {
            try {
                const catee = await query('select * from chungloai');
             
                res.render('Trangnguoidung/Header',{cl:catee});  
            } finally {
                //conn.end();
            }
        })()
           
        
    },

    search:(req,res)=>{
        const query = util.promisify(conn.query).bind(conn);

        (async () => {
            try {
                const cate = await query('select * from sanpham');
                const catee = await query('select * from chungloai');
                const ncc = await query('select * from nhacungcap');
              
                Header.search(req.query.key,(err,data)=>{
                    if(err){
                        res.send(err);
                    }else{
                        res.render('Trangnguoidung/Timkiem',{cat:data,cl:catee,ncc:ncc});
                    }
                   
                })
                // res.render('admin/Sanpham/AddCate',{cl:cate,ncc:ncc});  
            } finally {
                //conn.end();
            }
        })()
 

}
}
module.exports=HeaderController;