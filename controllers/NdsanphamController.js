const conn = require('../database/connect');
const Chungloai = require('../models/Chungloai');
const Nhacungcap = require('../models/Nhacungcap');
var Ndsanpham = require('../models/Ndsanpham');
const util=require('util');


var NdsanphamController = {
  
    index:(req,res)=>{
        const query = util.promisify(conn.query).bind(conn);

        (async () => {
            try {
                const cacc = await query("SELECT * FROM sanpham  WHERE trangthai = " + 1 + " LIMIT 5");
                const cat = await query("SELECT * FROM sanpham  WHERE chungloai_id = "+ req.params.id );
                const catee = await query('select * from chungloai');
             
                res.render('Trangnguoidung/Ndsanpham',{cl:catee,sp:cat,catcat: cacc,});  
            } finally {
                //conn.end();
            }
        })()
           
        
    },

      

}
module.exports=NdsanphamController;