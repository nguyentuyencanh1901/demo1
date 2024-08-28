var Chitiet = require('../models/Chitiet');

const conn = require('../database/connect');
const util = require('util');
var ChitietController = {

   
       
        
 
    index: (req, res) => {
        const query = util.promisify(conn.query).bind(conn);
        (async () => {
            try {
                const catee = await query('select * from chungloai');
                const cacc = await query("SELECT * FROM sanpham  WHERE trangthai = " + 1 + " LIMIT 5");
                
                Chitiet.findById(req.params.id,(err,data)=>{
                    if(err){
                        res.send(err);
                    }else{
                        res.render('Trangnguoidung/Chitiet', {cat:data ,catcat: cacc,cl:catee });
                    }
                })

                
            } finally {
                //conn.end();
            }
        })()

    },
   


}
module.exports = ChitietController;