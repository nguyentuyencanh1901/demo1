var Taikhoan = require('../models/Taikhoan');

const bcrypt = require('bcrypt')

var TaikhoanController = {
    //view ra 
    index: (req, res) => {
        Taikhoan.getAll((err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.render('admin/Taikhoan/Danhsach', { cat: data });

            }

        })
    },
    //thêm
    add: (req, res) => {
        res.render('admin/Taikhoan/AddCate');
    },

    create: (req, res) => {

        bcrypt.hash(req.body.password, parseInt(10)).then((passmoi) => {
            var name = req.body.name;
            var email = req.body.email;
            Taikhoan.create(({ name, email, passmoi }), (err, data) => {

                if (err) {
                    res.send(err);
                } else {
                    res.redirect('/Taikhoan');
                }

            })
        });
    },




    //sửa
    edit: (req, res) => {
        Taikhoan.findById(req.params.id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.render('admin/Taikhoan/EditCate', { cate: data[0] });
            }
        })

    },

    update:(req,res)=>{
        Taikhoan.update(req.body,(err,data)=>{
           
                if(err){
                    res.send(err);
                }else{
                    res.redirect('/Taikhoan');
                }
            
        })
    },
    delete: (req, res) => {
        Taikhoan.delete(req.params.id>27, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.redirect('/Taikhoan');;
            }
        })

    },
}
module.exports = TaikhoanController;