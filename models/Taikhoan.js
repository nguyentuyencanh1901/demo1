
var conn= require('../database/connect');
const bcrypt = require('bcrypt')
const Taikhoan = {
    //phương thức lấy ra tất cả bản ghi trong bảng Nhacungcap
    getAll:(callback)=>{
        return conn.query("SELECT * FROM users",callback);
    },
    //phương thức tìm bản ghi theo id 
    findById:(id,callback)=>{
        return conn.query("SELECT * FROM users WHERE id = " +id,callback);
    },
    

    //phương thức thêm mới 
    create:(data,callback)=>{
        return  conn.query(`INSERT INTO users(name,email,password) VALUES('${data.name}','${data.email}','${data.passmoi}')`,callback);
    },

    //phương thức cập nhật
    update:(data,callback)=>{
        return conn.query(`UPDATE users SET name='${data.name}',email='${data.email}',password='${data.password}' WHERE id='${data.id}'`,callback);
    },
    delete: (id,callback)=>{
        return conn.query("delete  FROM users WHERE id = " +id,callback);
    },
   
}
module.exports = Taikhoan;