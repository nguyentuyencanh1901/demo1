const conn = require('../database/connect');
const Chungloai = require('../models/Chungloai');
const Nhacungcap = require('../models/Nhacungcap');
var Sanpham = require('../models/Sanpham');
const util = require('util');


var SanphamController = {
    //view ra 
    index: (req, res) => {
        const query = util.promisify(conn.query).bind(conn);

        (async () => {
            try {
                const cacc = await query("SELECT * FROM sanpham  LIMIT 5");
               
             
                res.render('admin/Sanpham/Danhsach',{catcat: cacc});  
            } finally {
                //conn.end();
            }
        })()

        


    },
    //serch
    search: (req, res) => {
        const query = util.promisify(conn.query).bind(conn);

        (async () => {
            try {
                const cate = await query('select * from sanpham ');
                const catee = await query('select * from chungloai');
                const ncc = await query('select * from nhacungcap');

                Sanpham.search(req.query.key, (err, data) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.render('admin/Sanpham/Danhsach', { cat: data, cl: catee, ncc: ncc });
                    }
                    console.log(req.query.key);
                })
                // res.render('admin/Sanpham/AddCate',{cl:cate,ncc:ncc});  
            } finally {
                //conn.end();
            }
        })()



    },
    //thêm

    add: (req, res) => {
        const query = util.promisify(conn.query).bind(conn);

        (async () => {
            try {
                const catee = await query('select * from chungloai');
                const ncc = await query('select * from nhacungcap');
                res.render('admin/Sanpham/AddCate', { cl: catee, ncc: ncc });
            } finally {
                //conn.end();
            }
        })()


    },

    create: (req, res) => {

        //Lấy thông tin file từ form input
        try {
            const { name, gia, giamgia, mota, chungloai, nhacungcap, trangthai } = req.body;
            const fileanh = req.file.filename;
            Sanpham.create(({ name, gia, giamgia, mota, chungloai, nhacungcap, trangthai, fileanh }), (err, data) => {
                if (err)
                    res.send(err);
                else
                    res.redirect('/Sanpham');

            });
        }
        catch (err) {
            console.error(err);
        }

    },

    //sửa
    edit: (req, res) => {
        const query = util.promisify(conn.query).bind(conn);

        (async () => {
            try {
                const catee = await query('select * from chungloai');
                const ncc = await query('select * from nhacungcap');
                Sanpham.findById(req.params.id, (err, data) => {
                    if (err) {
                        res.send(err);
                    } else {
                        res.render('admin/Sanpham/EditCate', { cate: data[0], cl: catee, ncc: ncc });
                    }
                })
                // res.render('admin/Sanpham/AddCate',{cl:cate,ncc:ncc});  
            } finally {
                //conn.end();
            }
        })()



    },

    update: (req, res) => {

        //Lấy thông tin file từ form input
        try {

            const { id, name, gia, giamgia, mota, chungloai, nhacungcap, trangthai } = req.body;
            const fileanh = req.file.filename;
            Sanpham.update(({ id, name, gia, giamgia, mota, chungloai, nhacungcap, trangthai, fileanh }), (err, data) => {
                if (err)
                    res.send(err);
                else
                    res.redirect('/Sanpham');

            });
        }
        catch (err) {
            console.error(err);
        }

    },

    delete: (req, res) => {
        Sanpham.delete(req.params.id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.redirect('/Sanpham');;
            }
        })

    },




}
module.exports = SanphamController;