var Trangchu = require('../models/Trangchu');

const conn = require('../database/connect');
const util = require('util');
var TrangchuController = {

    //view ra 
    index: (req, res) => {
        const query = util.promisify(conn.query).bind(conn);
        (async () => {
            try {
                const catee = await query('select * from chungloai');
                const cattt = await query("SELECT * FROM sanpham  WHERE trangthai = " + 2 + " LIMIT 6");
                const cat = await query("SELECT * FROM sanpham  WHERE chungloai_id = " + 13 + " LIMIT 5");
                const cate = await query("SELECT * FROM sanpham  WHERE chungloai_id = " + 14 + " LIMIT 5");
                const tn = await query("SELECT * FROM sanpham  WHERE chungloai_id = " + 15 + " LIMIT 5");
                const vp = await query("SELECT * FROM sanpham  WHERE chungloai_id = " + 16 + " LIMIT 5");

                res.render('Trangnguoidung/Trangchu', { cat: cat ,cate:cate, tn:tn,vp:vp,cattt:cattt,cl:catee});
            } finally {
                //conn.end();
            }
        })()

    },

 

}
module.exports = TrangchuController;