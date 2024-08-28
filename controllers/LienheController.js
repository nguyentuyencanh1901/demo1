const conn = require('../database/connect');
const Chungloai = require('../models/Chungloai');
const Nhacungcap = require('../models/Nhacungcap');
var Gioithieu = require('../models/Gioithieu');
var Lienhe =require('../models/Lienhe');
const util=require('util');


var LienheController = {
  
    index:(req,res)=>{
        
            const query = util.promisify(conn.query).bind(conn);
        
            (async () => {
                try {
                    const catee = await query('select * from chungloai');
                 
                    res.render('Trangnguoidung/Lienhe',{cl:catee});  
                } finally {
                    //conn.end();
                }
            })()
               
           
        
           
        
    },
 

}
module.exports=LienheController;